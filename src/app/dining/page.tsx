"use client";

import Header from "@/components/Header";

export default function DiningPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="px-4 py-16 sm:px-6 lg:px-8 border-b border-[#8d3140]/10">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-sm font-semibold text-[#8d3140] uppercase tracking-wide mb-4">
                  Culinary Journey
                </p>
                <h1 className="font-display text-5xl lg:text-6xl text-[#7f152b] mb-6 leading-tight">
                  A Taste of Old Kraków
                </h1>
                <p className="text-base text-[#5e4b43] leading-relaxed mb-4">
                  From centuries-old recipes to innovative modern cuisine, Kraków's culinary scene offers a piercing to the vibrant, bohemian nightlife of Kazimierz. Traditional pierogi and hearty soups are set against the backdrop of a modern, European culinary renaissance.
                </p>
              </div>

              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/images/polishcousine.jpg"
                  alt="Polish Cuisine"
                  className="w-full h-96 object-cover"
                  onError={(e) => {
                    e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 600 400'%3E%3Crect fill='%23ddd' width='600' height='400'/%3E%3Ctext x='300' y='200' font-size='24' fill='%23999' text-anchor='middle' dominant-baseline='middle'%3E🍽️%3C/text%3E%3C/svg%3E";
                  }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Culinary Landscape Section */}
        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <h2 className="font-display text-4xl text-[#7f152b] mb-3">
              The Culinary Landscape
            </h2>
            <p className="text-base text-[#5e4b43] mb-10">
              Discover the full spectrum of Kraków's dining and nightlife scene.
            </p>

            {/* Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Large card - left */}
              <div className="md:col-span-2 rounded-2xl overflow-hidden shadow-lg group cursor-pointer bg-white">
                <div className="overflow-hidden bg-gray-300">
                  <img
                    src="/images/steetfood.jpeg"
                    alt="Classic Polish Cuisine"
                    className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 600'%3E%3Crect fill='%23999' width='800' height='600'/%3E%3Ctext x='400' y='300' font-size='30' fill='%23666' text-anchor='middle' dominant-baseline='middle'%3E🍷%3C/text%3E%3C/svg%3E";
                    }}
                  />
                </div>
                <div className="p-6">
                  <span className="inline-block bg-[#f3e8e8] text-[#8d3140] px-3 py-1 rounded-full text-xs font-semibold mb-3">
                    HERITAGE DINING
                  </span>
                  <h3 className="font-display text-3xl text-[#2b2b2b]">
                    Kazimierz Street Eats
                  </h3>
                  <p className="text-sm text-[#5e4b43] mt-2">
                    Taste the legendary street-style zapiekanki in the vibrant heart of Kazimierz.
                  </p>
                </div>
              </div>

              {/* Small cards - right */}
              <div className="flex flex-col gap-6">
                {/* Modern Cafes */}
                <div className="rounded-2xl overflow-hidden shadow-lg group cursor-pointer bg-white">
                  <div className="overflow-hidden bg-gray-300">
                    <img
                      src="/images/about-studio.jpg"
                      alt="Modern Cafes"
                      className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 500 300'%3E%3Crect fill='%23d4a574' width='500' height='300'/%3E%3Ctext x='250' y='150' font-size='24' fill='%238b6914' text-anchor='middle' dominant-baseline='middle'%3E☕%3C/text%3E%3C/svg%3E";
                      }}
                    />
                  </div>
                  <div className="p-4">
                    <h4 className="font-display text-lg text-[#2b2b2b]">
                      Klub Studio
                    </h4>
                    <p className="text-xs text-[#5e4b43]">Where the music hits loud and the night never ends.</p>
                  </div>
                </div>

                {/* Iconic Milk Bars */}
                <div className="rounded-2xl overflow-hidden shadow-lg group cursor-pointer bg-white">
                  <div className="overflow-hidden bg-gray-300">
                    <img
                      src="/images/teatrocubano.jpg"
                      alt="teatro Cubano"
                      className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 500 300'%3E%3Crect fill='%23f5e6d3' width='500' height='300'/%3E%3Ctext x='250' y='150' font-size='24' fill='%238b7355' text-anchor='middle' dominant-baseline='middle'%3E🥛%3C/text%3E%3C/svg%3E";
                      }}
                    />
                  </div>
                  <div className="p-4">
                    <h4 className="font-display text-lg text-[#2b2b2b]">
                      Teatro Cubano
                    </h4>
                    <p className="text-xs text-[#5e4b43]">Latin rhythms, tropical vibes & endless dancing.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="mt-12 border-t border-white/50 bg-[linear-gradient(180deg,rgba(52,26,20,0.98),rgba(33,16,13,0.98))] text-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div>
              <h3 className="font-display text-lg text-[#f4c9ad]">Kraków Heritage</h3>
              <p className="mt-3 text-sm text-white/75">About Us</p>
            </div>
            <div>
              <h3 className="font-display text-lg text-[#f4c9ad]">Contact</h3>
              <p className="mt-3 text-sm text-white/75">Privacy Policy</p>
              <p className="text-sm text-white/75">Terms of Service</p>
            </div>
            <div>
              <h3 className="font-display text-lg text-[#f4c9ad]">Info</h3>
              <p className="mt-3 text-sm text-white/75">© 2024 Cracow Heritage Guide. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
