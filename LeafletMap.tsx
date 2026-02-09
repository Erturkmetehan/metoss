import React, { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import { City } from '../types';

interface LeafletMapProps {
  cities: City[];
  selectedCity: City | null;
  onCitySelect: (city: City) => void;
}

// Helper to check if string contains Cyrillic
const hasCyrillic = (text: string) => /[а-яА-Я]/.test(text);

// Color Palettes
const TURKEY_PALETTE = [
    '#ef4444', '#f97316', '#f59e0b', '#dc2626', '#ea580c', '#d97706', '#b91c1c', '#c2410c', '#b45309'
];

const BULGARIA_PALETTE = [
    '#3b82f6', '#06b6d4', '#8b5cf6', '#6366f1', '#14b8a6', '#2563eb', '#0891b2', '#7c3aed'
];

const getRegionColor = (name: string, country: 'Turkey' | 'Bulgaria') => {
    if (!name) return '#475569';
    let hash = 0;
    for (let i = 0; i < name.length; i++) {
        hash = name.charCodeAt(i) + ((hash << 5) - hash);
    }
    const index = Math.abs(hash);
    if (country === 'Turkey') return TURKEY_PALETTE[index % TURKEY_PALETTE.length];
    return BULGARIA_PALETTE[index % BULGARIA_PALETTE.length];
};

// Cyrillic to Turkish/Latin transliteration
const transliterateBG = (text: string) => {
    if (!text) return "";
    if (text.includes('Sofia') || text.includes('София')) return 'Sofya';
    
    if (!hasCyrillic(text)) return text;
    const map: Record<string, string> = {
        'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g', 'д': 'd', 'е': 'e', 'ж': 'j', 'з': 'z', 'и': 'i', 'й': 'y', 'к': 'k', 'л': 'l', 'м': 'm', 'н': 'n', 'о': 'o', 'п': 'p', 'р': 'r', 'с': 's', 'т': 't', 'у': 'u', 'ф': 'f', 'х': 'h', 'ц': 'ts', 'ч': 'ç', 'ш': 'ş', 'щ': 'şt', 'ъ': 'ı', 'ь': 'y', 'ю': 'yu', 'я': 'ya',
        'А': 'A', 'Б': 'B', 'В': 'V', 'Г': 'G', 'Д': 'D', 'Е': 'E', 'Ж': 'J', 'З': 'Z', 'И': 'I', 'Й': 'Y', 'К': 'K', 'Л': 'L', 'М': 'M', 'Н': 'N', 'О': 'O', 'П': 'P', 'Р': 'R', 'С': 'S', 'Т': 'T', 'У': 'U', 'Ф': 'F', 'Х': 'H', 'Ц': 'Ts', 'Ч': 'Ç', 'Ш': 'Ş', 'Щ': 'Şt', 'Ъ': 'I', 'Ь': 'Y', 'Ю': 'Yu', 'Я': 'Ya'
    };
    return text.split('').map(char => map[char] || char).join('');
};

const normalizeName = (name: string) => {
    if (!name) return "";
    return name.toLowerCase()
        .replace(/ğ/g, "g").replace(/ü/g, "u").replace(/ş/g, "s").replace(/ı/g, "i").replace(/ö/g, "o").replace(/ç/g, "c")
        .replace(/['".\s-()]/g, "").replace("ili", "").replace("valiligi", "").replace("province", "").replace("district", "").replace("oblast", "").replace("region", "").replace("city", "").replace("municipality", "");
};

// --- DATA SOURCES ---
const TR_PROVINCES_URL = ["https://raw.githubusercontent.com/codeforamerica/click_that_hood/master/public/data/turkey.geojson"];
const BG_PROVINCES_URL = ["https://code.highcharts.com/mapdata/countries/bg/bg-all.geo.json"];

// District Sources
const TR_DISTRICTS_URL = ["https://raw.githubusercontent.com/cihadturhan/tr-geojson/master/geo/tr-districts.json"];
const BG_MUNICIPALITIES_URL = ["https://raw.githubusercontent.com/yurukov/Bulgaria-geocoding/master/obshtini_geojson/obshtini.geojson"];

const fetchGeoJsonWithFallback = async (urls: string[]) => {
    for (const url of urls) {
        try {
            const response = await fetch(url);
            if (!response.ok) continue;
            const text = await response.text();
            if (text.startsWith('version https://git-lfs')) continue;
            return JSON.parse(text);
        } catch (err) { console.warn(`Fetch error for ${url}`, err); }
    }
    throw new Error("GeoJSON fetch failed");
};

export const LeafletMap: React.FC<LeafletMapProps> = ({ cities, selectedCity, onCitySelect }) => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);
  const [loading, setLoading] = useState(true);
  
  // Layers references
  const provincesLayerGroup = useRef<L.LayerGroup>(new L.LayerGroup());
  const districtsLayerGroup = useRef<L.LayerGroup>(new L.LayerGroup());
  const districtsLoaded = useRef(false);

  // Zoom threshold to switch between Provinces and Districts
  const DISTRICT_ZOOM_THRESHOLD = 8;

  // --- HANDLERS (Defined before usage) ---

  const handleProvinceClick = (name: string, country: 'Turkey' | 'Bulgaria', feature: any, layer: any) => {
      let target = normalizeName(name);
      
      // Simple find
      const existingCity = cities.find(c => normalizeName(c.name) === target || normalizeName(c.id) === target);
      
      if (existingCity) {
          onCitySelect(existingCity);
      } else {
           onCitySelect({
              id: target,
              name: name,
              country: country,
              shortDesc: `${country} ili/bölgesi.`,
              region: country
          });
      }
  };

  const bindProvinceEvents = (feature: any, layer: any, country: 'Turkey' | 'Bulgaria') => {
      let name = country === 'Turkey' ? feature.properties?.name : (feature.properties?.shapeName || feature.properties?.Name);
      if(country === 'Bulgaria') name = transliterateBG(name);
      
      const cityData = cities.find(c => normalizeName(c.id) === normalizeName(name) || normalizeName(c.name) === normalizeName(name));

      let tooltipHtml = `<div class="font-sans min-w-[100px]">
        <div class="font-bold text-sm ${country === 'Turkey' ? 'text-red-200' : 'text-indigo-200'}">${name}</div>`;
      if(cityData?.population) tooltipHtml += `<div class="text-xs text-slate-300">Nüfus: ${cityData.population}</div>`;
      tooltipHtml += `</div>`;

      layer.bindTooltip(tooltipHtml, { sticky: true, className: 'bg-slate-900/90 border border-slate-700 rounded p-2 backdrop-blur shadow-xl' });

      layer.on('click', (e: any) => {
          L.DomEvent.stopPropagation(e);
          handleProvinceClick(name, country, feature, layer);
          // Smart Zoom: Fly to bounds but not too deep if it's large
          mapInstanceRef.current?.flyToBounds(e.target.getBounds(), { padding: [50, 50], maxZoom: 9, duration: 1.5 }); 
      });

      layer.on('mouseover', () => {
          layer.setStyle({ fillOpacity: 1, weight: 2 });
          layer.bringToFront();
      });
      layer.on('mouseout', () => layer.setStyle({ fillOpacity: 0.8, weight: 1 }));
  };

  const bindDistrictEvents = (feature: any, layer: any, country: 'Turkey' | 'Bulgaria') => {
      // Robust Property Check for Name
      const rawName = feature.properties?.name || feature.properties?.Name || feature.properties?.ilce || feature.properties?.ime || 'Bilinmeyen';
      // Robust Property Check for Province (for context)
      const rawProvince = feature.properties?.province || feature.properties?.il || feature.properties?.oblast || feature.properties?.oblast_name || feature.properties?.region || feature.properties?.pro || '';

      let name = rawName;
      if (country === 'Bulgaria') name = transliterateBG(name);

      let provinceName = rawProvince;
      if (country === 'Bulgaria' && hasCyrillic(provinceName)) provinceName = transliterateBG(provinceName);
      
      // Try to find parent city to inherit colors and details
      const parentCity = cities.find(c => 
          (provinceName && (normalizeName(c.name) === normalizeName(provinceName) || normalizeName(c.id) === normalizeName(provinceName)))
      );

      const defaultStroke = country === 'Turkey' ? '#ffffff' : '#e0e7ff';
      const defaultWeight = 0.5;
      const defaultOpacity = 0.4;

      let tooltipHtml = `<div class="font-sans min-w-[120px]">
        <div class="font-bold text-xs text-white">${name}</div>
        <div class="text-[10px] text-slate-400 border-t border-slate-700 mt-1 pt-0.5">
            ${country === 'Turkey' ? (provinceName ? `${provinceName} İlçesi` : 'İlçe') : (provinceName ? `${provinceName} Belediyesi` : 'Belediye')}
        </div>
      </div>`;

      layer.bindTooltip(tooltipHtml, { sticky: true, className: 'bg-slate-900/95 border border-slate-600 rounded px-2 py-1.5 backdrop-blur shadow-xl' });

      layer.on('click', (e: any) => {
          L.DomEvent.stopPropagation(e);
          
          // Create a synthetic city object for the district that inherits from parent
          const districtCity: City = {
              id: `${country}-${normalizeName(name)}`,
              name: name,
              country: country,
              region: provinceName || (country === 'Turkey' ? 'Türkiye' : 'Bulgaristan'),
              shortDesc: parentCity 
                  ? `${parentCity.name} iline bağlı, ${parentCity.shortDesc ? parentCity.shortDesc.split(',')[0].toLowerCase() : 'tarihi'} özellikler taşıyan bir ${country === 'Turkey' ? 'ilçe' : 'belediye'}.`
                  : `${country === 'Turkey' ? 'Türkiye' : 'Bulgaristan'} sınırları içerisinde yer alan ${name} bölgesi.`,
              details: parentCity?.details ? {
                  cuisine: parentCity.details.cuisine,
                  climate: parentCity.details.climate,
                  places: [name + ' Merkezi', ...parentCity.details.places.slice(0, 2)],
                  funFact: `${name}, ${parentCity.name} kültürünün bir parçasıdır. ${parentCity.details.funFact}`
              } : {
                  cuisine: 'Yöresel Lezzetler',
                  climate: 'Bölgesel İklim',
                  places: ['Şehir Merkezi', 'Tarihi Yapılar'],
                  funFact: `${name}, bölgenin önemli yerleşim yerlerinden biridir.`
              }
          };
          onCitySelect(districtCity);
          
          // Highlight effect
          layer.setStyle({ weight: 2, color: '#22d3ee', fillOpacity: 0.8 });
          setTimeout(() => {
              // Reset style only if layer still exists (might be zoomed out)
              if (layer._map) {
                  layer.setStyle({ weight: defaultWeight, color: defaultStroke, fillOpacity: defaultOpacity });
              }
          }, 1500);
      });
      
      layer.on('mouseover', () => {
          layer.setStyle({ fillOpacity: 0.75, weight: 1.5, color: '#fbbf24' });
          layer.bringToFront();
      });
      layer.on('mouseout', () => {
          layer.setStyle({ fillOpacity: defaultOpacity, weight: defaultWeight, color: defaultStroke });
      });
  };

  // --- LOADERS (Defined before useEffect) ---

  const loadProvinces = async (map: L.Map) => {
      try {
          const [trData, bgData] = await Promise.all([
              fetchGeoJsonWithFallback(TR_PROVINCES_URL).catch(e => null),
              fetchGeoJsonWithFallback(BG_PROVINCES_URL).catch(e => null)
          ]);

          if (trData) {
              L.geoJSON(trData, {
                  style: (feature) => ({
                      fillColor: getRegionColor(feature?.properties?.name || '', 'Turkey'),
                      weight: 1, color: '#ffffff', fillOpacity: 0.8
                  }),
                  onEachFeature: (feature, layer) => bindProvinceEvents(feature, layer, 'Turkey')
              }).addTo(provincesLayerGroup.current);
          }

          if (bgData) {
              L.geoJSON(bgData, {
                  style: (feature) => {
                      let name = feature?.properties?.shapeName || feature?.properties?.Name || feature?.properties?.name || '';
                      name = transliterateBG(name);
                      return {
                          fillColor: getRegionColor(name, 'Bulgaria'),
                          weight: 1, color: '#e0e7ff', fillOpacity: 0.8
                      };
                  },
                  onEachFeature: (feature, layer) => bindProvinceEvents(feature, layer, 'Bulgaria')
              }).addTo(provincesLayerGroup.current);
          }

          // Initial Add
          provincesLayerGroup.current.addTo(map);
      } catch (e) {
          console.error("Province load failed", e);
      } finally {
          setLoading(false);
      }
  };

  const loadDistricts = async (map: L.Map) => {
      try {
          const [trDistricts, bgDistricts] = await Promise.all([
              fetchGeoJsonWithFallback(TR_DISTRICTS_URL).catch(e => null),
              fetchGeoJsonWithFallback(BG_MUNICIPALITIES_URL).catch(e => null)
          ]);

          if (trDistricts) {
              L.geoJSON(trDistricts, {
                  style: (feature) => ({
                      fillColor: getRegionColor(feature?.properties?.province || feature?.properties?.name || '', 'Turkey'), // Color match parent
                      weight: 0.5, color: '#ffffff', fillOpacity: 0.4 
                  }),
                  onEachFeature: (feature, layer) => bindDistrictEvents(feature, layer, 'Turkey')
              }).addTo(districtsLayerGroup.current);
          }

          if (bgDistricts) {
              L.geoJSON(bgDistricts, {
                  style: (feature) => {
                    // Try to find province name for consistent coloring or use own name
                    const provinceName = feature?.properties?.oblast || feature?.properties?.oblast_name || feature?.properties?.region || feature?.properties?.name || '';
                    const safeName = transliterateBG(provinceName);
                    return {
                        fillColor: getRegionColor(safeName, 'Bulgaria'), 
                        weight: 0.5, color: '#e0e7ff', fillOpacity: 0.4
                    };
                  },
                  onEachFeature: (feature, layer) => bindDistrictEvents(feature, layer, 'Bulgaria')
              }).addTo(districtsLayerGroup.current);
          }
          
          districtsLoaded.current = true;
      } catch (e) {
          console.error("District load failed", e);
      }
  };

  // --- EFFECT ---
  useEffect(() => {
    if (!mapContainerRef.current || mapInstanceRef.current) return;

    const map = L.map(mapContainerRef.current, {
        zoomControl: false,
        attributionControl: false,
        zoomSnap: 0.5,
        zoomAnimation: true,
        maxBounds: [[34, 20], [45, 48]],
        minZoom: 5
    }).setView([42.0, 26.5], 6.5);

    L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; CARTO',
        subdomains: 'abcd',
        maxZoom: 19
    }).addTo(map);
    
    L.control.zoom({ position: 'bottomright' }).addTo(map);
    mapInstanceRef.current = map;

    // Start loading
    loadProvinces(map);

    // Zoom Listener
    map.on('zoomend', async () => {
        const zoom = map.getZoom();
        
        if (zoom >= DISTRICT_ZOOM_THRESHOLD) {
            // Show Districts
            if (map.hasLayer(provincesLayerGroup.current)) {
                map.removeLayer(provincesLayerGroup.current);
            }
            
            if (!districtsLoaded.current) {
                setLoading(true);
                await loadDistricts(map);
                setLoading(false);
            }
            
            if (!map.hasLayer(districtsLayerGroup.current)) {
                map.addLayer(districtsLayerGroup.current);
            }
        } else {
            // Show Provinces
            if (map.hasLayer(districtsLayerGroup.current)) {
                map.removeLayer(districtsLayerGroup.current);
            }
            if (!map.hasLayer(provincesLayerGroup.current)) {
                map.addLayer(provincesLayerGroup.current);
            }
        }
    });

  }, []); // eslint-disable-line

  // Watch for external selection
  useEffect(() => {
    if (selectedCity && mapInstanceRef.current && !loading) {
       // Only fly if it's a known city (province) to avoid jumping around too much on district clicks
       const isProvince = cities.some(c => c.id === selectedCity.id);
       if(isProvince) {
           // We let the province click handler do the zoom, or if it comes from search:
           // Logic to find layer bounds would be complex here without iterating layers.
           // Relying on user interaction or search flyTo logic if implemented elsewhere.
       }
    }
  }, [selectedCity, loading, cities]);


  return (
    <div className="relative w-full h-full bg-[#0f172a]">
        <div ref={mapContainerRef} className="w-full h-full z-0" />
        {loading && (
            <div className="absolute inset-0 z-50 flex items-center justify-center bg-slate-900/90 backdrop-blur-md pointer-events-none">
                <div className="flex flex-col items-center gap-6">
                    <div className="w-16 h-16 border-4 border-t-violet-500 border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin"></div>
                    <div className="text-slate-300 text-lg font-light tracking-widest animate-pulse">HARİTA YÜKLENİYOR</div>
                </div>
            </div>
        )}
        
        {/* Zoom Hint */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-slate-950/80 backdrop-blur-md text-slate-200 text-xs font-medium px-4 py-1.5 rounded-full pointer-events-none border border-slate-700/50 shadow-xl z-[400] flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
            İlçeleri görmek için haritaya yaklaşın
        </div>
    </div>
  );
};