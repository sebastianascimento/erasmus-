import React from "react";
import { Monument } from "@/types/restaurant";
import MonumentCard from "./RestaurantCard";

interface MonumentListProps {
  monuments: Monument[];
  onViewOnMap?: (monument: Monument) => void;
}

export default function MonumentList({ monuments, onViewOnMap }: MonumentListProps) {
  if (monuments.length === 0) {
    return (
      <div className="rounded-[2rem] border border-dashed border-[#7f2f26]/20 bg-[linear-gradient(180deg,rgba(255,252,247,0.92),rgba(246,239,230,0.9))] px-8 py-16 text-center shadow-[0_16px_50px_rgba(73,33,25,0.06)]">
        <span className="mb-4 block text-6xl">😢</span>
        <p className="text-lg font-medium text-[#3b241d]">
          Nenhum monumento encontrado para os filtros selecionados.
        </p>
        <p className="mt-2 text-sm text-[#7d695f]">
          Tente ajustar seus critérios de busca
        </p>
      </div>
    );
  }

  return (
    <div id="destaques">
      <div className="mb-6 flex items-center gap-3">
        <span className="grid h-11 w-11 place-items-center rounded-2xl bg-[#7f2f26]/10 text-2xl text-[#7f2f26]">🏰</span>
        <div>
          <h2 className="font-display text-3xl text-[#241711] sm:text-4xl">Monumentos Históricos</h2>
          <p className="text-sm text-[#7d695f]">
            {monuments.length} resultado{monuments.length !== 1 ? "s" : ""} encontrado{monuments.length !== 1 ? "s" : ""}
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
        {monuments.map((monument) => (
          <MonumentCard 
            key={monument.id} 
            monument={monument}
            onViewOnMap={onViewOnMap}
          />
        ))}
      </div>
    </div>
  );
}
