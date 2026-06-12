import { Sparkles } from "lucide-react";
import SectionHeader from "./SectionHeader";

export default function Features() {
  const features = [
    {
      icon: "🐍",
      title: "Maîtrise Algorithmique",
      description:
        "Apprends à coder efficacement en Python avec une approche orientée BAC. Du pseudo-code à l'exécution réelle.",
      tag: "Cœur de métier",
      highlight: true,
    },
    {
      icon: "⚙️",
      title: "Sciences Techniques (STI)",
      description:
        "Contenu expert pour les STI : schémas détaillés, rappels de cours et exercices corrigés introuvables ailleurs.",
      tag: "Spécialité",
      highlight: true,
    },
    {
      icon: "📚",
      title: "Bibliothèque de Ressources",
      description:
        "Accès à des milliers de cours, devoirs et examens corrigés pour toutes les matières du programme tunisien.",
      tag: "1ère → BAC",
      highlight: true,
    },
    {
      icon: "🧠",
      title: "Parcours Adaptatif",
      description:
        "Notre IA identifie tes points faibles et génère des exercices sur-mesure pour progresser sans perdre de temps.",
      tag: "Abqarino Learning",
      highlight: true,
    },
    {
      icon: "🎥",
      title: "Live Coaching",
      description:
        "Sessions en direct pour décortiquer les chapitres complexes et résoudre des exercices en temps réel avec nos profs.",
      tag: "Interactif",
      highlight: true,
    },
    {
      icon: "⚡",
      title: "Suivi 1-to-1",
      description:
        "Besoin d'un coup de boost avant un devoir ? Réserve une séance privée avec un expert pour débloquer ton potentiel.",
      tag: "PRO MAX",
      highlight: true,
    },
  ];

  return (
    <section id="features" className="relative py-24 px-6 dark:bg-black-100">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}

        <SectionHeader
          sectionTitle="Features"
          title="Le catalyseur de ta "
          customWord="réussite"
          desc=""
        />

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group relative p-8 rounded-[2rem] border transition-all duration-300 ${
                feature.highlight
                  ? "border-blue-500/50 bg-gradient-to-br from-blue-500/10 to-transparent shadow-xl shadow-blue-500/5"
                  : "border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 hover:border-slate-300 dark:hover:border-white/20"
              }`}
            >
              <div className="flex justify-between items-start mb-6">
                <div className="w-14 h-14 rounded-2xl bg-slate-100 dark:bg-white/10 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <span
                  className={`px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase ${
                    feature.highlight
                      ? "bg-blue-600 text-white"
                      : "bg-slate-200 dark:bg-white/10 text-slate-600 dark:text-slate-400"
                  }`}
                >
                  {feature.tag}
                </span>
              </div>

              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
