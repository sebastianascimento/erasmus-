import type { Metadata } from "next";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Experiences - Kraków Heritage",
  description: "My Erasmus experiences and memories in Kraków",
  keywords: "Kraków,Erasmus,Experiences,Travel,Memories",
};

export default function ExperiencesPage() {
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
                My Erasmus
              </p>
              <h1 className="font-display text-5xl lg:text-6xl text-[#7f152b] mb-6 leading-tight">
                Memories of Kraków
              </h1>
              <p className="text-base text-[#5e4b43] leading-relaxed mb-4">
                Throughout my Erasmus in Kraków, I had the chance to explore a city full of history,
                culture, and incredible people. This is a collection of my most memorable experiences
                and the moments that shaped my European journey.
              </p>
            </div>
            <div className="mx-auto w-full max-w-[320px] sm:max-w-[360px] rounded-2xl overflow-hidden shadow-2xl aspect-[3/4]">
              <img
                src="/images/zakopark.jpeg"
                alt="Kraków"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Experiences */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="font-display text-4xl text-[#7f152b] mb-3">
            Featured Experiences
          </h2>
          <p className="text-base text-[#5e4b43] mb-10">
            Moments that marked my time in Kraków.
          </p>

          <div className="space-y-12">
            {/* Experience 1 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="mx-auto w-full max-w-[320px] sm:max-w-[360px] rounded-2xl overflow-hidden shadow-lg aspect-[3/4] lg:order-1 order-2">
                <img
                  src="/images/katedral.jpeg"
                  alt="City Exploration"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="lg:order-2 order-1">
                <span className="inline-block bg-[#8d3140]/10 text-[#8d3140] px-3 py-1 rounded-full text-xs font-semibold mb-3">
                  EXPLORATION
                </span>
                <h3 className="font-display text-3xl text-[#7f152b] mb-4">
                  Discovering the City’s Hidden Corners
                </h3>
                <p className="text-base text-[#5e4b43] leading-relaxed mb-4">
                  I spent countless afternoons wandering medieval streets, finding hidden cafés,
                  and meeting the locals who truly bring Kraków to life. Every corner had
                  a story to tell and an experience to share.
                </p>
              </div>
            </div>

            {/* Experience 2 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <span className="inline-block bg-[#8d3140]/10 text-[#8d3140] px-3 py-1 rounded-full text-xs font-semibold mb-3">
                  FRIENDSHIPS
                </span>
                <h3 className="font-display text-3xl text-[#7f152b] mb-4">
                  The Global Crew
                </h3>
                <p className="text-base text-[#5e4b43] leading-relaxed mb-4">
                  Different roots, same frequency. Building connections that transcend borders and languages.
                </p>
              </div>
              <div className="mx-auto w-full max-w-[320px] sm:max-w-[360px] rounded-2xl overflow-hidden shadow-lg aspect-[3/4]">
                <img
                  src="/images/river.jpeg"
                  alt="Friendships"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Experience 3 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="mx-auto w-full max-w-[320px] sm:max-w-[360px] rounded-2xl overflow-hidden shadow-lg aspect-[3/4] lg:order-1 order-2">
                <img
                  src="/images/cubano.jpeg"
                  alt="Nightlife"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="lg:order-2 order-1">
                <span className="inline-block bg-[#8d3140]/10 text-[#8d3140] px-3 py-1 rounded-full text-xs font-semibold mb-3">
                  FUN
                </span>
                <h3 className="font-display text-3xl text-[#7f152b] mb-4">
                  Nights of Adventure
                </h3>
                <p className="text-base text-[#5e4b43] leading-relaxed mb-4">
                  Kazimierz became my second home. From cozy bar nights to cultural festivals,
                  every moment felt like a celebration of being alive and far from home.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="px-4 py-16 sm:px-6 lg:px-8 bg-[#fbf8f6]">
        <div className="mx-auto max-w-7xl">
          <h2 className="font-display text-4xl text-[#7f152b] mb-3">
            Memory Gallery
          </h2>
          <p className="text-base text-[#5e4b43] mb-10">
            A glimpse into the special moments lived in Kraków.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                image: "/images/katedral.jpeg",
                title: "Sunset at the Rynek",
              },
              {
                image: "/images/irishpub.jpeg",
                title: "Medieval Market",
              },
              {
                image: "/images/bowling.jpeg",
                title: "Historic Streets",
              },
              {
                image: "/images/pub.jpeg",
                title: "Moments with Friends",
              },
              {
                image: "/images/steet.jpeg",
                title: "Nightlife",
              },
              {
                image: "/images/mainsquare.jpeg",
                title: "Reflection",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="mx-auto rounded-2xl overflow-hidden shadow-lg group cursor-pointer aspect-[3/4] w-full max-w-[320px] sm:max-w-[360px]"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reflection Section */}
      <section className="px-4 py-16 sm:px-6 lg:px-8 border-t border-[#8d3140]/10">
        <div className="mx-auto max-w-3xl">
          <div className="text-center">
            <span className="inline-block bg-[#8d3140]/10 text-[#8d3140] px-3 py-1 rounded-full text-xs font-semibold mb-4">
              REFLECTION
            </span>
            <h2 className="font-display text-4xl text-[#7f152b] mb-6">
              What Kraków Taught Me
            </h2>
            <p className="text-lg text-[#5e4b43] leading-relaxed">
              My Erasmus in Kraków was more than an academic experience. It was a journey
              of self-discovery, personal growth, and genuine human connections. This ancient city
              embraced me like an adopted child and taught me the value of being present, exploring the unknown,
              and appreciating the small moments that make life extraordinary.
            </p>
          </div>
        </div>
      </section>
    </main>
    </div>
  );
}
