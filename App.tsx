import React, { useState, useMemo } from 'react';
import { CITIES } from './constants';
import { City } from './types';
import { LeafletMap } from './components/LeafletMap';
import { InfoPanel } from './components/InfoPanel';
import { Map as MapIcon, Search, X } from 'lucide-react';

const App: React.FC = () => {
  const [selectedCity, setSelectedCity] = useState<City | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  const handleCitySelect = (city: City) => {
    setSelectedCity(city);
    setSearchQuery(''); // Clear search on select
    setIsSearchFocused(false);
  };

  const handleClosePanel = () => {
    setSelectedCity(null);
  };

  // Filter cities based on search query with Turkish character support
  const filteredCities = useMemo(() => {
    if (!searchQuery.trim()) return [];
    
    const query = searchQuery.toLocaleLowerCase('tr');
    return CITIES.filter(city => 
      city.name.toLocaleLowerCase('tr').includes(query) || 
      city.id.toLowerCase().includes(query)
    ).slice(0, 5); // Limit to 5 results for cleaner UI
  }, [searchQuery]);

  return (
    <div className="h-screen w-screen bg-[#0f172a] text-slate-100 overflow-hidden flex flex-col">
      
      {/* Navbar */}
      <nav className="relative z-20 w-full px-4 md:px-6 py-3 flex items-center justify-between border-b border-slate-800/50 bg-[#0f172a]/90 backdrop-blur-sm shrink-0 gap-4">
        
        {/* Logo Area */}
        <div className="flex items-center gap-3 shrink-0">
          <div className="bg-gradient-to-br from-emerald-500 to-cyan-500 p-1.5 rounded-lg shadow-lg shadow-emerald-500/20">
            <MapIcon size={20} className="text-white" />
          </div>
          <div className="hidden md:block">
            <h1 className="text-lg font-bold text-white tracking-tight leading-tight">mappop</h1>
          </div>
        </div>

        {/* Search Bar */}
        <div className="relative flex-1 max-w-md group">
          <div className={`flex items-center bg-slate-800/50 border transition-all duration-300 rounded-xl px-3 py-2 ${isSearchFocused ? 'border-cyan-500/50 ring-2 ring-cyan-500/20 bg-slate-800' : 'border-slate-700 hover:border-slate-600'}`}>
            <Search size={18} className="text-slate-400 shrink-0" />
            <input 
              type="text"
              placeholder="Şehir veya bölge ara..."
              className="w-full bg-transparent border-none outline-none text-sm text-slate-200 ml-2 placeholder:text-slate-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setIsSearchFocused(true)}
              onBlur={() => setTimeout(() => setIsSearchFocused(false), 200)} // Delay to allow click
            />
            {searchQuery && (
              <button onClick={() => setSearchQuery('')} className="p-1 hover:bg-slate-700 rounded-full text-slate-400 hover:text-white transition-colors">
                <X size={14} />
              </button>
            )}
          </div>

          {/* Search Dropdown Results */}
          {isSearchFocused && searchQuery && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-slate-900 border border-slate-700 rounded-xl shadow-2xl overflow-hidden z-50">
              {filteredCities.length > 0 ? (
                <ul>
                  {filteredCities.map(city => (
                    <li key={city.id}>
                      <button 
                        className="w-full text-left px-4 py-3 hover:bg-slate-800 flex items-center justify-between group/item transition-colors"
                        onClick={() => handleCitySelect(city)}
                      >
                        <span className="font-medium text-slate-200 group-hover/item:text-cyan-400 transition-colors">{city.name}</span>
                        <span className="text-[10px] uppercase font-bold text-slate-500 bg-slate-950 px-2 py-0.5 rounded border border-slate-800">
                          {city.country === 'Turkey' ? 'TR' : 'BG'}
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="p-4 text-center text-slate-500 text-sm">
                  Sonuç bulunamadı.
                </div>
              )}
            </div>
          )}
        </div>

        {/* Spacer / Right Elements */}
        <div className="w-8 md:w-auto shrink-0"></div>
      </nav>

      <main className="relative flex-1 w-full h-full">
        
        {/* Full Screen Map */}
        <div className="absolute inset-0 z-0">
          <LeafletMap 
            cities={CITIES}
            selectedCity={selectedCity}
            onCitySelect={handleCitySelect}
          />
        </div>

        {/* Floating Info Panel Overlay */}
        {selectedCity && (
          <div className="absolute top-4 right-4 z-[1000] w-full max-w-sm md:w-96 pointer-events-none">
            {/* Enable pointer events for the card itself */}
            <div className="pointer-events-auto">
              <InfoPanel 
                city={selectedCity} 
                onClose={handleClosePanel}
              />
            </div>
          </div>
        )}

      </main>
    </div>
  );
};

export default App;