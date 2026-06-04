import React from "react";
import { Monument } from "@/types/restaurant";

interface FeaturedProps {
  monuments: Monument[];
  onViewOnMap?: (m: Monument) => void;
}

export default function Featured({ monuments, onViewOnMap }: FeaturedProps) {
  const first = monuments.find((m) => m.id === 1) || monuments[0];
  const second =
    monuments.find((m) => m.id === 2) ||
    monuments.find((m) => m.name.toLowerCase().includes("rynek")) ||
    monuments[1];
  const third =
    monuments.find((m) => m.id === 4) ||
    monuments.find((m) => m.name.toLowerCase().includes("kazimierz")) ||
    monuments[2];

  return (
    <section aria-label="Featured places" className="mb-6">
      <div className="mb-6 flex items-start justify-between">
        <div>
          <h2 className="font-display text-3xl text-[#241711] sm:text-4xl">Places to Visit</h2>
          <p className="mt-2 text-sm text-[#7d695f]">Iconic landmarks that define the soul of the city.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {first && (
          <button onClick={() => onViewOnMap?.(first)} className="group col-span-1 lg:col-span-2 block rounded-xl overflow-hidden shadow-[0_20px_40px_rgba(41,18,11,0.08)]">
            <div
              className="relative h-96 bg-cover bg-center rounded-xl"
              style={{ backgroundImage: `url('${first.imageUrl}')` }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-xl" />
              <div className="absolute left-6 bottom-6 z-10 w-[calc(100%-48px)]">
                <span className="inline-block rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-[#5d433a]">{first.category}</span>
                <h3 className="mt-4 text-3xl font-display text-white drop-shadow-md">{first.name}</h3>
                <p className="mt-2 max-w-[70%] text-sm text-white/90">{first.description}</p>
              </div>
            </div>
          </button>
        )}

        <div className="flex flex-col justify-between gap-6">
          {second && (
            <button onClick={() => onViewOnMap?.(second)} className="group block rounded-xl overflow-hidden shadow-[0_12px_30px_rgba(24,10,8,0.18)]">
              <div className="relative h-44 lg:h-48 bg-cover bg-center rounded-xl" style={{ backgroundImage: `url('${second.imageUrl}')` }}>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-xl" />
                <div className="absolute left-4 bottom-4 z-10 w-[calc(100%-32px)]">
                  <span className="inline-block rounded-full bg-white/90 px-2 py-0.5 text-xs font-semibold text-[#5d433a]">{second.category}</span>
                  <h4 className="mt-2 text-lg font-semibold text-white drop-shadow">{second.name}</h4>
                  <p className="mt-1 text-sm text-white/90">{second.description}</p>
                </div>
              </div>
            </button>
          )}

          {third && (
            <button onClick={() => onViewOnMap?.(third)} className="group block rounded-xl overflow-hidden shadow-[0_12px_30px_rgba(24,10,8,0.18)]">
              <div className="relative h-44 lg:h-48 bg-cover bg-center rounded-xl" style={{ backgroundImage: `url('${third.imageUrl}')` }}>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-xl" />
                <div className="absolute left-4 bottom-4 z-10 w-[calc(100%-32px)]">
                  <span className="inline-block rounded-full bg-white/90 px-2 py-0.5 text-xs font-semibold text-[#5d433a]">{third.category}</span>
                  <h4 className="mt-2 text-lg font-semibold text-white drop-shadow">{third.name}</h4>
                  <p className="mt-1 text-sm text-white/90">{third.description}</p>
                </div>
              </div>
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
