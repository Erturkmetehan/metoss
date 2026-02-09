import React from 'react';
import { City } from '../types';
import { Users, Info, X, Utensils, CloudSun, Camera, Lightbulb, Car } from 'lucide-react';

interface InfoPanelProps {
  city: City | null;
  onClose: () => void;
}

export const InfoPanel: React.FC<InfoPanelProps> = ({ city, onClose }) => {
  if (!city) return null;

  const isTR = city.country === 'Turkey';
  const themeColor = isTR ? 'text-red-400' : 'text-emerald-400';
  const themeBorder = isTR ? 'border-red-500' : 'border-emerald-500';
  const gradient = isTR ? 'from-red-900 to-slate-900' : 'from-emerald-900 to-slate-900';

  // Fallback data if details are missing
  const hasDetails = !!city.details;
  const description = city.shortDesc || `${city.name}, ${city.country} sınırları içerisinde yer alan önemli bir bölgedir.`;
  const population = city.population || "Veri Hazırlanıyor";
  
  return (
    <div className="h-full max-h-[85vh] flex flex-col p-0 rounded-2xl bg-slate-900/95 backdrop-blur-xl border border-slate-700/50 shadow-2xl overflow-hidden animate-in fade-in slide-in-from-right-10 duration-300">
      
      {/* Header */}
      <div className={`h-36 w-full relative bg-gradient-to-br ${gradient} p-6 flex flex-col justify-end`}>
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-white/70 hover:text-white bg-black/20 hover:bg-black/40 rounded-full transition-colors backdrop-blur-sm z-10"
        >
          <X size={20} />
        </button>
        
        {/* Plate Code Badge (Only for Turkey) */}
        {city.plateCode && (
           <div className="absolute top-6 left-6 border-2 border-white rounded-md bg-blue-600 text-white font-bold px-0.5 py-0.5 flex flex-col items-center w-10 shadow-lg rotate-[-5deg]">
              <span className="text-[6px] leading-none mb-0.5">TR</span>
              <span className="text-lg leading-none font-mono">{city.plateCode}</span>
           </div>
        )}

        <div className="flex items-center gap-2 mb-1 pl-1">
          <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-black/30 text-white border border-white/20`}>
            {city.country === 'Turkey' ? 'Türkiye' : 'Bulgaristan'}
          </span>
          {city.region && <span className="text-xs text-slate-300 font-medium tracking-wide">• {city.region}</span>}
        </div>
        <h2 className="text-3xl font-black text-white tracking-tight leading-none truncate drop-shadow-lg">
          {city.name}
        </h2>
      </div>

      <div className="flex-1 overflow-y-auto custom-scrollbar p-6 space-y-6">
        
        {/* Quick Stats */}
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-slate-800/50 p-3 rounded-xl border border-slate-700/50">
            <div className={`flex items-center gap-2 ${themeColor} mb-1`}>
              <Users size={16} />
              <span className="text-[10px] font-bold uppercase tracking-wide">Nüfus</span>
            </div>
            <p className="text-base font-semibold text-slate-200">{population}</p>
          </div>
          <div className="bg-slate-800/50 p-3 rounded-xl border border-slate-700/50">
            <div className={`flex items-center gap-2 ${themeColor} mb-1`}>
              <CloudSun size={16} />
              <span className="text-[10px] font-bold uppercase tracking-wide">İklim</span>
            </div>
            <p className="text-base font-semibold text-slate-200">
                {hasDetails ? city.details?.climate : 'Bölgesel İklim'}
            </p>
          </div>
        </div>

        {/* Description */}
        <div className={`bg-slate-800/30 p-4 rounded-xl border-l-2 ${themeBorder}`}>
          <div className="flex items-center gap-2 mb-2 text-slate-400">
             <Info size={16} /> <span className="text-xs font-bold uppercase">Genel Bilgi</span>
          </div>
          <p className="text-slate-300 text-sm leading-relaxed">
            {description}
          </p>
        </div>

        {/* Details List (Only if available) */}
        {hasDetails ? (
            <div className="space-y-4">
                <div>
                    <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 flex items-center gap-2">
                        <Utensils size={14} /> Ne Yenir?
                    </h4>
                    <p className="text-sm text-slate-200 bg-slate-800 p-3 rounded-lg border border-slate-700/50">
                        {city.details?.cuisine}
                    </p>
                </div>
                <div>
                    <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 flex items-center gap-2">
                        <Camera size={14} /> Gezilecek Yerler
                    </h4>
                    <div className="flex flex-wrap gap-2">
                        {city.details?.places.map((place, idx) => (
                            <span key={idx} className="text-xs font-medium px-2.5 py-1 rounded-md bg-slate-800 text-slate-300 border border-slate-700 hover:border-slate-500 transition-colors cursor-default">
                                {place}
                            </span>
                        ))}
                    </div>
                </div>
                <div>
                    <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 flex items-center gap-2">
                        <Lightbulb size={14} /> Bunları Biliyor Muydunuz?
                    </h4>
                    <p className="text-xs text-slate-400 italic leading-relaxed border-t border-slate-800 pt-2">
                        "{city.details?.funFact}"
                    </p>
                </div>
            </div>
        ) : (
            <div className="text-center p-6 border-2 border-dashed border-slate-800 rounded-xl">
                <p className="text-slate-500 text-sm">Bu şehir için detaylı rehber verisi yakında eklenecek.</p>
            </div>
        )}
      </div>
    </div>
  );
};