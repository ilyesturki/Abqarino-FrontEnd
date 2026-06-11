import { Star, Award, Sparkles } from "lucide-react";
import SectionHeader from "./SectionHeader";

export default function Testimonials() {
  const testimonials = [
    {
      rating: 5,
      text: "Grâce aux exercices adaptatifs, j'ai compris exactement où j'avais des lacunes en Python. En 2 mois, je suis passé de 10 à 18/20. Abqarino c'est vraiment différent.",
      author: "Aziz Kouki",
      role: "Terminale Info → INSAT",
      initials: "AK",
      bg: "from-blue-600/10 dark:from-blue-600/40 to-emerald-500/5",
      border: "hover:border-blue-600/40",
    },
    {
      rating: 5,
      text: "Le simulateur BAC m'a aidée à choisir mes vœux avec confiance. Et les Meets 1-to-1 avant les examens ? Le prof a revu tout mon code et expliqué mes erreurs en détail.",
      author: "Mariem Boughattas",
      role: "Terminale Info → Sup'Com",
      initials: "MB",
      bg: "from-blue-600/10 dark:from-blue-600/40 to-emerald-500/5",
      border: "hover:border-blue-600/40",
    },
    {
      rating: 4,
      text: "Le cours STI sur abqarino est le meilleur que j'aie trouvé en ligne. Les schémas sont clairs, les exercices progressifs. J'ai eu 17 à mon BAC STI cette année.",
      author: "Hamza Ben Salah",
      role: "Terminale STI → ENIT",
      initials: "HB",
      bg: "from-blue-600/10 dark:from-blue-600/40 to-emerald-500/5",
      border: "hover:border-blue-600/40",
    },
  ];

  return (
    <section
      className="py-24 px-6 bg-gray-50 dark:bg-black-100 transition-colors duration-500"
      id="testimonials"
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          sectionTitle="Témoignages"
          title="Ils ont réussi avec "
          customWord="Abqarino"
          desc=""
        />

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-16">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className={`group relative p-8 rounded-[2rem] border border-gray-200  dark:border-accent-2/30 hover:border-blue-600 bg-white/50 dark:bg-white/5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 ${t.border}`}
            >
              {/* Background gradient on hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-b ${t.bg} opacity-0 group-hover:opacity-100 transition-opacity rounded-[2rem] -z-10`}
              />

              {/* Graduation Image positioned absolute to the top right corner of the card */}
              <img
                src="images/abqarino-graduated.png"
                alt="Gradué"
                className="absolute -top-6 -right-6 w-20 h-20 rounded-full object-cover border-2 border-white dark:border-blue-600 shadow-lg z-20 dark:bg-amber bg-white"
              />

              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className={`${
                      i < t.rating
                        ? "fill-yellow-400 text-amber-400"
                        : "fill-gray-200 dark:fill-gray-800 text-gray-200 dark:text-gray-800"
                    }`}
                  />
                ))}
              </div>

              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8 min-h-[120px]">
                "{t.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 pt-6 border-t border-gray-200 dark:border-accent-2/30">
                <div className="relative w-12 h-12 rounded-full bg-gray-900 dark:bg-white flex items-center justify-center text-white dark:text-gray-900 font-black text-sm shadow-lg">
                  {t.initials}
                  <div className="absolute -bottom-1 -right-1 bg-amber p-1 rounded-full border-2 border-white dark:border-amber">
                    <Award size={10} className="text-white" />
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-amber">
                    {t.author}
                  </h4>
                  <p className="text-xs font-medium text-accent-2">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
