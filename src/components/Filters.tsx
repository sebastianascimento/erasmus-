"use client";

import React from "react";
import { FilterState } from "@/types/restaurant";

interface FiltersProps {
  filters: FilterState;
  onFilterChange: (filters: FilterState) => void;
  categories: string[];
  neighborhoods: string[];
}

export default function Filters({
  filters,
  onFilterChange,
  categories,
  neighborhoods,
}: FiltersProps) {
  const handleChange = (key: keyof FilterState, value: string) => {
    onFilterChange({
      ...filters,
      [key]: value,
    });
  };

  const handleReset = () => {
    onFilterChange({
      category: "",
      neighborhood: "",
      difficulty: "",
      searchTerm: "",
    });
  };

  return (
    <div id="explorar" className="rounded-[2rem] border border-white/60 bg-[linear-gradient(180deg,rgba(255,251,246,0.9),rgba(255,247,239,0.84))] p-6 shadow-[0_20px_70px_rgba(77,32,25,0.08)] backdrop-blur-sm sm:p-8">
      <div className="mb-6 flex items-center gap-3">
        <span className="grid h-11 w-11 place-items-center rounded-2xl bg-[#7f2f26]/10 text-2xl text-[#7f2f26]">🔎</span>
        <p className="text-xs uppercase tracking-[0.28em] text-[#7f2f26]/70">Filtros</p>
      </div>

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-5">
        {/* Search */}
        <div className="lg:col-span-2">
          <label className="mb-3 block text-sm font-semibold text-[#5d221c]">
            Nome do Monumento
          </label>
          <input
            type="text"
            placeholder="Digite o nome..."
            value={filters.searchTerm}
            onChange={(e) => handleChange("searchTerm", e.target.value)}
            className="w-full rounded-2xl border border-[#7f2f26]/15 bg-white/95 px-4 py-3 text-[#241711] shadow-inner shadow-black/5 outline-none ring-0 placeholder:text-[#8c766b] focus:border-[#7f2f26]/30 focus:bg-white focus:shadow-[0_0_0_4px_rgba(127,47,38,0.08)]"
          />
        </div>

        {/* Category */}
        <div>
          <label className="mb-3 block text-sm font-semibold text-[#5d221c]">
            Categoria
          </label>
          <select
            value={filters.category}
            onChange={(e) => handleChange("category", e.target.value)}
            className="w-full cursor-pointer appearance-none rounded-2xl border border-[#7f2f26]/15 bg-white/95 px-4 py-3 text-[#241711] shadow-inner shadow-black/5 outline-none focus:border-[#7f2f26]/30 focus:bg-white focus:shadow-[0_0_0_4px_rgba(127,47,38,0.08)]"
          >
            <option value="">Todas</option>
            {categories.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>

        {/* Neighborhood */}
        <div>
          <label className="mb-3 block text-sm font-semibold text-[#5d221c]">
            Bairro
          </label>
          <select
            value={filters.neighborhood}
            onChange={(e) => handleChange("neighborhood", e.target.value)}
            className="w-full cursor-pointer appearance-none rounded-2xl border border-[#7f2f26]/15 bg-white/95 px-4 py-3 text-[#241711] shadow-inner shadow-black/5 outline-none focus:border-[#7f2f26]/30 focus:bg-white focus:shadow-[0_0_0_4px_rgba(127,47,38,0.08)]"
          >
            <option value="">Todos</option>
            {neighborhoods.map((n) => (
              <option key={n} value={n}>
                {n}
              </option>
            ))}
          </select>
        </div>

        {/* Difficulty */}
        <div>
          <label className="mb-3 block text-sm font-semibold text-[#5d221c]">
            Dificuldade
          </label>
          <select
            value={filters.difficulty}
            onChange={(e) => handleChange("difficulty", e.target.value)}
            className="w-full cursor-pointer appearance-none rounded-2xl border border-[#7f2f26]/15 bg-white/95 px-4 py-3 text-[#241711] shadow-inner shadow-black/5 outline-none focus:border-[#7f2f26]/30 focus:bg-white focus:shadow-[0_0_0_4px_rgba(127,47,38,0.08)]"
          >
            <option value="">Todas</option>
            <option value="Easy">🟢 Fácil</option>
            <option value="Moderate">🟡 Moderado</option>
            <option value="Hard">🔴 Difícil</option>
          </select>
        </div>

        {/* Reset Button */}
        <div className="flex items-end">
          <button
            onClick={handleReset}
            className="w-full rounded-2xl bg-[#7f2f26] px-4 py-3 font-semibold text-white shadow-lg shadow-[#7f2f26]/25 transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#5d221c] hover:shadow-xl"
          >
            Limpar
          </button>
        </div>
      </div>
    </div>
  );
}
