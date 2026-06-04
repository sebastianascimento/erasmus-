import type { Metadata } from "next";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "FAQ - Kraków Heritage",
  description: "Frequently asked questions about visiting Kraków.",
};

const faqs = [
  {
    question: "What's the best time to visit Kraków?",
    answer:
      "Spring and early autumn are usually the most pleasant times, with mild temperatures and fewer queues. Summer is lively and full of events, but also busier.",
  },
  {
    question: "Is Kraków a safe city for tourists?",
    answer:
      "Yes, Kraków is generally considered safe for visitors. As with any destination, keep an eye on your belongings in crowded areas and be cautious at night.",
  },
  {
    question: "How do I get around the city?",
    answer:
      "The historic center is great for walking. For longer distances, trams and buses work well, with tickets easy to buy from machines and local apps.",
  },
  {
    question: "What currency is used in Poland?",
    answer:
      "The official currency is the Polish złoty (PLN). Many places accept cards, but it's useful to have some cash for small cafés, tickets, or markets.",
  },
  {
    question: "Do I need to speak Polish to visit Kraków?",
    answer:
      "No. English is common in tourist areas and restaurants. Still, learning basic Polish greetings can be helpful and appreciated.",
  },
  {
    question: "Which traditional dishes should I try?",
    answer:
      "Pierogi, żurek, obwarzanek krakowski, barszcz, and meat or mushroom dishes are classic choices. For dessert, look for sernik or pączki.",
  },
  {
    question: "Do museums and monuments close on specific days?",
    answer:
      "Many sites have reduced hours on Mondays or on holidays. Always check the official site of the place before visiting to avoid surprises.",
  },
  {
    question: "How much time do I need to see the essentials?",
    answer:
      "Two to three days is enough to see the historic center, Kazimierz, and Wawel at a comfortable pace. If you want to include museums and attractions outside the center, plan four to five days.",
  },
];

export default function FaqPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-1">
        <section className="border-b border-[#8d3140]/10 px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-[#8d3140]">
                Perguntas frequentes
              </p>
              <h1 className="font-display text-5xl leading-tight text-[#7f152b] lg:text-6xl">
                FAQ sobre Cracóvia
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-8 text-[#5e4b43]">
                Respostas rápidas para as dúvidas mais comuns de quem vai visitar a cidade: transporte, segurança,
                comida, moeda e quanto tempo vale a pena ficar.
              </p>
            </div>

            {/* Icons summary removed per request */}
          </div>
        </section>

        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <div className="space-y-4">
              {faqs.map((faq) => (
                <details
                  key={faq.question}
                  className="group rounded-[1.6rem] border border-[#8d3140]/10 bg-white shadow-[0_14px_40px_rgba(73,33,25,0.06)] transition-all open:border-[#8d3140]/20 open:shadow-[0_18px_50px_rgba(73,33,25,0.1)]"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 text-left">
                    <span className="text-lg font-semibold text-[#241711] group-open:text-[#7f152b]">
                      {faq.question}
                    </span>
                    <span className="grid h-9 w-9 place-items-center rounded-full bg-[#f0e8e0] text-[#7f152b] transition-transform group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <div className="px-6 pb-6 pt-0">
                    <p className="max-w-3xl text-base leading-8 text-[#5e4b43]">
                      {faq.answer}
                    </p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}