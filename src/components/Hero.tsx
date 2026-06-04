import React from "react";

export default function Hero() {
  return (
    <section
      aria-label="Hero"
      className="relative flex h-[520px] md:h-[700px] lg:h-[820px] w-full items-center justify-center bg-cover bg-center text-white"
      style={{
        backgroundImage:
          "linear-gradient(rgba(10,6,6,0.12), rgba(10,6,6,0.12)), url('/images/krakow-hero.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black/6" />

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        <h1 className="font-display text-5xl leading-[1.02] sm:text-6xl md:text-8xl lg:text-9xl">Discover the Magic of Kraków</h1>
        <p className="mt-4 text-md sm:text-lg text-white/85">History, culture and unforgettable experiences in the heart of Poland.</p>

        {/* Action buttons removed per request */}
      </div>
    </section>
  );
}
