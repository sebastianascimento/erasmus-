import React from "react";
import { Monument } from "@/types/restaurant";

interface MonumentCardProps {
  monument: Monument;
  onViewOnMap?: (monument: Monument) => void;
}

export default function MonumentCard({
  monument,
  onViewOnMap,
}: MonumentCardProps) {
  const googleMapsUrl =
    monument.mapsUrl ?? `https://www.google.com/maps/search/?api=1&query=${monument.latitude},${monument.longitude}`;
  const ratingColor = 
    monument.rating >= 4.7 ? "from-green-400 to-emerald-500" :
    monument.rating >= 4.5 ? "from-blue-400 to-cyan-500" :
    "from-orange-400 to-amber-500";

  const difficultyEmoji = monument.difficulty === "Easy" ? "🟢" : monument.difficulty === "Moderate" ? "🟡" : "🔴";

  return (
    <div className="group overflow-hidden rounded-[1.8rem] border border-white/70 bg-[linear-gradient(180deg,rgba(255,252,247,0.96),rgba(252,244,236,0.96))] shadow-[0_28px_80px_rgba(73,33,25,0.12)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_34px_90px_rgba(73,33,25,0.18)]">
      <div className={`relative flex h-64 items-center justify-center overflow-hidden bg-gradient-to-br ${ratingColor}`}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.28),transparent_35%),linear-gradient(180deg,rgba(255,255,255,0.08),rgba(0,0,0,0.12))] opacity-90" />
        <span className="relative text-6xl transition-transform duration-300 group-hover:scale-110 sm:text-7xl">🏰</span>
        <div className="absolute bottom-4 left-4 rounded-full bg-white/18 px-4 py-1 text-sm font-medium text-white backdrop-blur">
          {monument.category}
        </div>
      </div>

      <div className="space-y-5 p-6 sm:p-8">
        <div>
          <div className="mb-2 flex items-start justify-between gap-3">
            <h3 className="font-display text-3xl leading-tight text-[#241711] transition-colors duration-300 group-hover:text-[#7f2f26]">
              {monument.name}
            </h3>
            <div className="flex items-center gap-2 rounded-full bg-[#7f2f26] px-4 py-1 text-sm font-semibold text-white shadow-md shadow-[#7f2f26]/20">
              <span>⭐</span>
              <span>{monument.rating}</span>
            </div>
          </div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#7f2f26]/75">
            {monument.category}
          </p>
        </div>
        <p className="line-clamp-3 text-base leading-8 text-[#5e4b43]">
          {monument.description}
        </p>

        <div className="space-y-3 border-y border-[#7f2f26]/10 py-4">
          <div className="flex items-start gap-3 text-sm">
            <span className="text-2xl">📍</span>
            <div>
              <p className="font-semibold text-lg text-[#2b1914]">{monument.neighborhood}</p>
              <p className="text-sm text-[#7d695f]">{monument.address}</p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <span className="text-xl">🕐</span>
            <p className="text-[#5e4b43]">{monument.hours}</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {monument.highlights.slice(0, 3).map((highlight, idx) => (
            <span
              key={idx}
              className="inline-block rounded-full border border-[#7f2f26]/10 bg-[#f6e9dd] px-4 py-1 text-sm font-semibold text-[#7f2f26]"
            >
              {highlight}
            </span>
          ))}
        </div>

        <div className="space-y-2 pt-1">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="text-2xl">{difficultyEmoji}</span>
              <span className="text-sm font-medium text-[#5e4b43]">{monument.difficulty} Level</span>
            </div>
            <span className="text-sm font-bold text-[#241711]">{monument.ticketPrice}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-slate-600">
            <span>⏰ Best: {monument.bestTime}</span>
          </div>
        </div>

        <div className="flex gap-3 pt-1">
          <a
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 rounded-full bg-[#7f2f26] px-6 py-3 text-center text-base font-semibold text-white shadow-lg shadow-[#7f2f26]/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#5d221c]"
          >
            Google Maps
          </a>
          <a
            href={monument.website}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 rounded-full border border-[#7f2f26]/15 bg-white/70 px-6 py-3 text-center text-base font-semibold text-[#5d221c] shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-[#7f2f26]/25 hover:bg-white"
          >
            Website
          </a>
        </div>
      </div>
    </div>
  );
}
