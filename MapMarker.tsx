import React from 'react';
import { City } from '../types';
import { Users } from 'lucide-react';

interface MapMarkerProps {
  city: City;
  isSelected: boolean;
  onClick: (city: City) => void;
  onHover: (city: City | null) => void;
}

export const MapMarker: React.FC<MapMarkerProps> = ({ city, isSelected, onClick, onHover }) => {
  return (
    <div
      className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group z-10"
      style={{ left: `${city.coordinates.x}%`, top: `${city.coordinates.y}%` }}
      onClick={() => onClick(city)}
      onMouseEnter={() => onHover(city)}
      onMouseLeave={() => onHover(null)}
    >
      <div className="relative flex items-center justify-center">
        {/* Ripple Effect */}
        <div className={`absolute w-8 h-8 rounded-full opacity-75 animate-ping ${isSelected ? 'bg-cyan-500' : 'bg-emerald-500'}`}></div>
        
        {/* Core Dot */}
        <div className={`relative w-4 h-4 rounded-full border-2 border-slate-900 transition-all duration-300 ${isSelected ? 'bg-cyan-400 scale-125' : 'bg-emerald-400 group-hover:scale-125 group-hover:bg-cyan-300'}`}></div>

        {/* Tooltip Label (Updated to show population on hover) */}
        <div className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-3 min-w-[120px] p-2 bg-slate-800/95 rounded-lg shadow-xl backdrop-blur-md transition-all duration-300 border border-slate-600/50 pointer-events-none z-50 flex flex-col items-center gap-1 ${isSelected ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0'}`}>
          <span className={`text-xs font-bold whitespace-nowrap ${isSelected ? 'text-cyan-300' : 'text-emerald-100'}`}>
            {city.name}
          </span>
          <div className="flex items-center gap-1 text-[10px] text-slate-400">
            <Users size={10} />
            <span>{city.population}</span>
          </div>
          {/* Arrow */}
          <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-4 border-transparent border-t-slate-600/50"></div>
        </div>
      </div>
    </div>
  );
};