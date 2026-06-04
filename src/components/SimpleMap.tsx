"use client";

import React from "react";
import { Monument } from "@/types/restaurant";

interface SimpleMapProps {
  restaurants: Monument[];
  selectedRestaurant: Monument | null;
  onMarkerClick: (restaurant: Monument) => void;
}

export default function SimpleMap({
  restaurants,
  selectedRestaurant,
  onMarkerClick,
}: SimpleMapProps) {
  if (restaurants.length === 0) {
    return (
      <div className="bg-gradient-to-br from-blue-50 to-slate-100 rounded-2xl p-12 text-center border-2 border-blue-200">
        <span className="text-6xl block mb-4">🗺️</span>
        <p className="text-slate-600 text-lg font-medium">
          Nenhum restaurante para exibir no mapa
        </p>
      </div>
    );
  }

  const minLat = Math.min(...restaurants.map((r) => r.latitude));
  const maxLat = Math.max(...restaurants.map((r) => r.latitude));
  const minLon = Math.min(...restaurants.map((r) => r.longitude));
  const maxLon = Math.max(...restaurants.map((r) => r.longitude));

  const padding = 0.05;
  const lat1 = minLat - padding;
  const lat2 = maxLat + padding;
  const lon1 = minLon - padding;
  const lon2 = maxLon + padding;

  const scale = 1000;
  const width = (lon2 - lon1) * scale;
  const height = (lat2 - lat1) * scale;

  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 mb-8 border border-slate-200">
      <div className="flex items-center gap-3 mb-6">
        <span className="text-3xl">🗺️</span>
        <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-700 to-cyan-600 bg-clip-text text-transparent">
          Mapa de Monumentos
        </h2>
      </div>

      <div
        className="relative bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl border-2 border-blue-300 overflow-hidden"
        style={{
          width: "100%",
          maxWidth: "900px",
          aspectRatio: `${width}/${height}`,
          margin: "0 auto",
        }}
      >
        {/* Animated grid background */}
        <div className="absolute inset-0 opacity-30">
          <svg className="w-full h-full" viewBox={`0 0 ${width} ${height}`}>
            <defs>
              <pattern
                id="grid"
                width="100"
                height="100"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 100 0 L 0 0 0 100"
                  fill="none"
                  stroke="#3b82f6"
                  strokeWidth="0.5"
                />
              </pattern>
            </defs>
            <rect width={width} height={height} fill="url(#grid)" />
          </svg>
        </div>

        {/* Markers */}
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox={`0 0 ${width} ${height}`}
        >
          {restaurants.map((monument) => {
            const x = (monument.longitude - lon1) * scale;
            const y = (monument.latitude - lat1) * scale;
            const isSelected =
              selectedRestaurant?.id === monument.id;

            return (
              <g key={monument.id}>
                {/* Pulse effect for selected */}
                {isSelected && (
                  <>
                    <circle
                      cx={x}
                      cy={y}
                      r={30}
                      fill="#0369a1"
                      opacity="0.1"
                      style={{
                        animation: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite"
                      }}
                    />
                  </>
                )}
                
                {/* Marker circle */}
                <circle
                  cx={x}
                  cy={y}
                  r={isSelected ? 18 : 14}
                  fill={isSelected ? "#0369a1" : "#0ea5e9"}
                  stroke="white"
                  strokeWidth="3"
                  className="cursor-pointer transition-all"
                  onClick={() => onMarkerClick(monument)}
                  style={{
                    pointerEvents: "auto",
                    filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.2))"
                  }}
                />
                
                {/* Marker number */}
                <text
                  x={x}
                  y={y}
                  textAnchor="middle"
                  dominantBaseline="central"
                  fontSize={isSelected ? "11" : "9"}
                  fill="white"
                  fontWeight="bold"
                  pointerEvents="none"
                  className="font-mono"
                >
                  {monument.id}
                </text>
              </g>
            );
          })}
        </svg>

        {/* Info box */}
        {selectedRestaurant && (
          <div className="absolute bottom-4 left-4 bg-white p-4 rounded-xl shadow-2xl max-w-xs border-l-4 border-blue-500 animate-in slide-in-from-bottom-2">
            <p className="font-bold text-slate-900 text-lg">{selectedRestaurant.name}</p>
            <p className="text-sm font-semibold text-blue-600 mt-1">{selectedRestaurant.category}</p>
            <p className="text-xs text-slate-600 mt-2">
              📍 {selectedRestaurant.neighborhood}
            </p>
            <p className="text-xs text-slate-600 mt-1">
              ⭐ {selectedRestaurant.rating}/5 | {selectedRestaurant.difficulty}
            </p>
          </div>
        )}
      </div>

      {/* Legend */}
      <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4 p-4 bg-slate-50 rounded-xl">
        <div className="flex items-center gap-2">
          <span className="inline-block w-4 h-4 bg-cyan-500 rounded-full shadow-md"></span>
          <p className="text-sm font-medium text-slate-700">Normal</p>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-block w-4 h-4 bg-blue-700 rounded-full shadow-md"></span>
          <p className="text-sm font-medium text-slate-700">Selecionado</p>
        </div>
        <div className="text-xs text-slate-600 col-span-2">
          💡 Clique nos marcadores para detalhes
        </div>
      </div>
    </div>
  );
}
