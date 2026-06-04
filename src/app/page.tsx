"use client";

import { useState, useMemo, useRef } from "react";
import dynamic from "next/dynamic";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Featured from "@/components/Featured";
import { Monument, FilterState } from "@/types/restaurant";
import monumentData from "@/data/restaurants.json";

// Dynamic import para o mapa Leaflet (SSR não é necessário)
const InteractiveMap = dynamic(
  () => import("@/components/InteractiveMap"),
  { ssr: false }
);

export default function Home() {
  const monuments: Monument[] = monumentData.monuments;
  const mapRef = useRef<HTMLDivElement>(null);
  const getGoogleMapsUrl = (monument: Monument) =>
    monument.mapsUrl ?? `https://www.google.com/maps/search/?api=1&query=${monument.latitude},${monument.longitude}`;

  const [filters, setFilters] = useState<FilterState>({
    category: "",
    neighborhood: "",
    difficulty: "",
    searchTerm: "",
  });

  const [selectedMonument, setSelectedMonument] = useState<Monument | null>(
    null
  );

  // Extract unique categories and neighborhoods
  const categories = useMemo(
    () => [...new Set(monuments.map((m) => m.category))].sort(),
    [monuments]
  );

  const neighborhoods = useMemo(
    () => [...new Set(monuments.map((m) => m.neighborhood))].sort(),
    [monuments]
  );

  // Filter monuments based on selected filters
  const filteredMonuments = useMemo(() => {
    return monuments.filter((monument) => {
      const matchCategory =
        !filters.category || monument.category === filters.category;
      const matchNeighborhood =
        !filters.neighborhood ||
        monument.neighborhood === filters.neighborhood;
      const matchDifficulty =
        !filters.difficulty || monument.difficulty === filters.difficulty;
      const matchSearch =
        !filters.searchTerm ||
        monument.name
          .toLowerCase()
          .includes(filters.searchTerm.toLowerCase());

      return (
        matchCategory && matchNeighborhood && matchDifficulty && matchSearch
      );
    });
  }, [filters, monuments]);

  const handleViewOnMap = (monument: Monument) => {
    setSelectedMonument(monument);
    // Scroll to map with smooth animation
    setTimeout(() => {
      mapRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Hero />

      <main className="flex-1">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <div className="space-y-10">
          <section>
            <Featured monuments={monuments} onViewOnMap={handleViewOnMap} />
          </section>

          <section className="border-b border-[#8d3140]/10">
            <div className="mx-auto max-w-7xl">
              <h1 className="font-display text-4xl md:text-5xl leading-tight text-[#7f152b] text-center mb-4">
                Discover Kraków
              </h1>
              <p className="text-center text-base text-[#5e4b43] max-w-3xl mx-auto">
                Journey through centuries of history, from royal castles to vibrant medieval squares. Explore the architectural marvels and cultural depths of Poland's historic capital.
              </p>

              {/* Category filter removed per request */}
            </div>
          </section>

          <section>
            <div className="mx-auto max-w-7xl">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {filteredMonuments.slice(0, 8).map((monument) => (
                  <div key={monument.id} className="group rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow bg-white border border-[#8d3140]/10">
                    <div className="relative h-48 overflow-hidden bg-gray-200">
                      <img
                        src={monument.imageUrl}
                        alt={monument.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        onError={(e) => {
                          e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect fill='%23ddd' width='400' height='300'/%3E%3Ctext x='200' y='150' font-size='24' fill='%23999' text-anchor='middle' dominant-baseline='middle'%3E🏰%3C/text%3E%3C/svg%3E";
                        }}
                      />
                      <div className="absolute top-3 left-3 bg-white/90 rounded-full px-3 py-1 text-xs font-semibold text-[#7f152b]">
                        {monument.category}
                      </div>
                    </div>

                    <div className="p-4">
                      <h3 className="font-display text-xl text-[#7f152b] mb-2 line-clamp-2">
                        {monument.name}
                      </h3>
                      <p className="text-sm text-[#5e4b43] mb-4 line-clamp-2">
                        {monument.description}
                      </p>

                      <div className="flex items-center gap-2 mb-3 text-sm">
                        <span>⭐</span>
                        <span className="font-semibold text-[#7f152b]">{monument.rating}</span>
                        <span className="text-[#5e4b43]">({monument.neighborhood})</span>
                      </div>

                      <div className="flex gap-2">
                        <a
                          href={getGoogleMapsUrl(monument)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 rounded-full bg-[#8d3140] py-2 text-center text-sm font-semibold text-white transition-colors hover:bg-[#741f30]"
                        >
                          Google Maps
                        </a>
                        <a
                          href={monument.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 rounded-full border border-[#8d3140]/15 bg-white py-2 text-center text-sm font-semibold text-[#7f152b] transition-colors hover:border-[#8d3140]/25 hover:bg-[#f9f3ef]"
                        >
                          Website
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

        </div>
        </div>
      </main>

      <footer className="mt-8 border-t border-white/50 bg-[linear-gradient(180deg,rgba(52,26,20,0.98),rgba(33,16,13,0.98))] text-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div>
              <h3 className="font-display text-2xl text-[#f4c9ad]">Sobre Cracow Heritage</h3>
              <p className="mt-3 text-sm leading-7 text-white/75">
                Um guia visual para explorar os monumentos de Cracóvia com foco em descoberta, contexto e navegação rápida.
              </p>
            </div>

            <div>
              <h3 className="font-display text-2xl text-[#f4c9ad]">Recursos</h3>
              <ul className="mt-3 space-y-2 text-sm text-white/75">
                <li><a href="#mapa" className="hover:text-white">Mapa Interativo</a></li>
                <li><a href="#explorar" className="hover:text-white">Filtros de Busca</a></li>
                <li><a href="#destaques" className="hover:text-white">Monumentos em Destaque</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-display text-2xl text-[#f4c9ad]">Informações</h3>
              <p className="mt-3 text-sm text-white/75">📧 info@cracowheritage.pl</p>
              <p className="mt-2 text-sm text-white/75">📍 Kraków, Polônia</p>
            </div>
          </div>

          <div className="mt-8 border-t border-white/10 pt-6 text-center">
            <p className="text-sm text-white/55">
              © 2026 Cracow Heritage. Feito com Tailwind CSS + Leaflet + OpenStreetMap.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
