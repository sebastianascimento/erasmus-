"use client";

import React, { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { Monument } from "@/types/restaurant";

interface InteractiveMapProps {
  monuments: Monument[];
  selectedMonument: Monument | null;
  onMarkerClick: (monument: Monument) => void;
}

const customIcon = L.icon({
  iconUrl: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 40'%3E%3Cpath fill='%230ea5e9' d='M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12z'/%3E%3Ccircle cx='12' cy='12' r='5' fill='white'/%3E%3C/svg%3E",
  iconSize: [24, 40],
  iconAnchor: [12, 40],
  popupAnchor: [0, -40],
});

const selectedIcon = L.icon({
  iconUrl: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 40'%3E%3Cpath fill='%230369a1' d='M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12z'/%3E%3Ccircle cx='12' cy='12' r='5' fill='white'/%3E%3C/svg%3E",
  iconSize: [24, 40],
  iconAnchor: [12, 40],
  popupAnchor: [0, -40],
});

export default function InteractiveMap({
  monuments,
  selectedMonument,
  onMarkerClick,
}: InteractiveMapProps) {
  const mapRef = useRef<L.Map | null>(null);
  const markersRef = useRef<{ [key: number]: L.Marker }>({});

  useEffect(() => {
    // Initialize map
    if (!mapRef.current && typeof window !== "undefined") {
      mapRef.current = L.map("leaflet-map").setView([50.05, 19.64], 13);

      // Add OpenStreetMap tiles
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 19,
      }).addTo(mapRef.current);
    }

    // Clear existing markers
    Object.values(markersRef.current).forEach((marker) =>
      mapRef.current?.removeLayer(marker)
    );
    markersRef.current = {};

    if (monuments.length === 0) return;

    // Add markers for each monument
    monuments.forEach((monument) => {
      if (mapRef.current) {
        const marker = L.marker(
          [monument.latitude, monument.longitude],
          {
            icon:
              selectedMonument?.id === monument.id
                ? selectedIcon
                : customIcon,
          }
        )
          .bindPopup(
            `<div class="p-3">
              <h3 class="font-bold text-slate-900">${monument.name}</h3>
              <p class="text-sm text-blue-600">${monument.category}</p>
              <p class="text-xs text-slate-600 mt-1">📍 ${monument.neighborhood}</p>
              <p class="text-xs text-slate-600">⭐ ${monument.rating}/5 | ${monument.difficulty}</p>
            </div>`
          )
          .on("click", () => onMarkerClick(monument))
          .addTo(mapRef.current);

        markersRef.current[monument.id] = marker;
      }
    });

    // Fit bounds to all markers
    if (monuments.length > 0 && mapRef.current) {
      const group = new L.FeatureGroup(Object.values(markersRef.current));
      mapRef.current.fitBounds(group.getBounds().pad(0.1));
    }

    return () => {
      // Cleanup is handled by useEffect dependencies
    };
  }, [monuments, selectedMonument, onMarkerClick]);

  // Update marker icon when selection changes
  useEffect(() => {
    Object.entries(markersRef.current).forEach(([id, marker]) => {
      const monumentId = parseInt(id);
      const isSelected = selectedMonument?.id === monumentId;
      marker.setIcon(isSelected ? selectedIcon : customIcon);
    });
  }, [selectedMonument]);

  if (monuments.length === 0) {
    return (
      <div className="rounded-[2rem] border border-[#7f2f26]/15 bg-[linear-gradient(180deg,rgba(255,251,247,0.9),rgba(244,236,226,0.9))] p-12 text-center shadow-[0_16px_50px_rgba(73,33,25,0.08)]">
        <span className="mb-4 block text-6xl">🗺️</span>
        <p className="text-lg font-medium text-[#3b241d]">
          Nenhum monumento para exibir no mapa
        </p>
      </div>
    );
  }

  return (
    <div id="mapa" className="overflow-hidden rounded-[2rem] border border-white/70 bg-[linear-gradient(180deg,rgba(255,252,247,0.96),rgba(247,239,230,0.92))] p-5 shadow-[0_22px_70px_rgba(73,33,25,0.1)] sm:p-6">
      <div className="mb-6 flex items-center gap-3">
        <span className="grid h-11 w-11 place-items-center rounded-2xl bg-[#7f2f26]/10 text-2xl text-[#7f2f26]">🗺️</span>
        <h2 className="font-display text-3xl text-[#241711] sm:text-4xl">
          Mapa Interativo
        </h2>
      </div>

      <div
        id="leaflet-map"
        className="w-full overflow-hidden rounded-[1.5rem] border border-[#7f2f26]/10"
        style={{ height: "520px" }}
      />

      <div className="mt-6 grid grid-cols-2 gap-4 rounded-[1.4rem] bg-[#f3e7db] p-4 md:grid-cols-4">
        <div className="flex items-center gap-2">
          <div className="h-8 w-6 rounded-full bg-gradient-to-b from-[#cf8d67] to-[#b45e3d] shadow-md"></div>
          <p className="text-sm font-medium text-[#3b241d]">Monumento</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-8 w-6 rounded-full bg-gradient-to-b from-[#7f2f26] to-[#4d1a16] shadow-md"></div>
          <p className="text-sm font-medium text-[#3b241d]">Selecionado</p>
        </div>
        <div className="col-span-2 text-xs text-[#7d695f]">
          💡 Clique nos marcadores para detalhes • Arraste para explorar
        </div>
      </div>

      {selectedMonument && (
        <div className="mt-4 rounded-[1.4rem] border border-[#7f2f26]/10 bg-[#fff8f1] p-4">
          <h3 className="text-lg font-bold text-[#241711]">
            {selectedMonument.name}
          </h3>
          <p className="mt-1 text-sm text-[#7f2f26]">
            {selectedMonument.category}
          </p>
          <p className="mt-2 text-xs text-[#7d695f]">
            📍 {selectedMonument.neighborhood} - {selectedMonument.address}
          </p>
          <div className="mt-3 flex flex-wrap gap-4">
            <span className="rounded-full bg-[#f0d7c6] px-2 py-1 text-xs text-[#7f2f26]">
              ⭐ {selectedMonument.rating}/5
            </span>
            <span className="rounded-full bg-[#f5e6cc] px-2 py-1 text-xs text-[#855920]">
              {selectedMonument.difficulty}
            </span>
            <span className="rounded-full bg-[#e3efe3] px-2 py-1 text-xs text-[#3c6a43]">
              {selectedMonument.ticketPrice}
            </span>
          </div>
          <p className="mt-3 text-sm leading-7 text-[#5e4b43]">{selectedMonument.description}</p>
          <a
            href={selectedMonument.website}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-block rounded-full bg-[#7f2f26] px-4 py-2 font-semibold text-white transition-all hover:bg-[#5d221c]"
          >
            Learn More →
          </a>
        </div>
      )}
    </div>
  );
}
