import { faLocationArrow } from "@fortawesome/free-solid-svg-icons";
import CustomButton from "./ui/CustomButton";

export default function Orientation() {
  const subjects = [
    { name: "Informatique", score: 18.5, percentage: 93 },
    { name: "Mathématiques", score: 16.0, percentage: 80 },
    { name: "Physique", score: 14.6, percentage: 73 },
    { name: "Anglais", score: 17.4, percentage: 87 },
  ];

  const universities = ["INSAT", "Sup'Com", "ISI", "ENIT"];

  return (
    <section
      className="py-24 px-6 bg-gray-50 dark:bg-black-100 transition-colors duration-500"
      id="orientation"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Text Content */}
          <div className="space-y-8">
            <div className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 text-blue-600 dark:text-amber text-xs font-black tracking-widest uppercase border border-blue-500/20">
              100 % gratuit
            </div>

            <h2 className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white leading-[1.1] tracking-tight">
              Simulateur BAC & <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r  from-black dark:from-white dark to-accent-2 dark:to-accent-2">
                Orientation
              </span>
            </h2>

            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-lg">
              Calcule ton score exact selon les coefficients officiels tunisiens
              et visualise instantanément tes chances d'admission dans les
              meilleures écoles.
            </p>

            <div className="grid gap-6">
              {[
                {
                  icon: "🎯",
                  title: "Score précis par matière",
                  desc: "Basé sur les pondérations officielles du Ministère.",
                },
                {
                  icon: "🏛️",
                  title: "Accès aux écoles d'élite",
                  desc: "INSAT, Sup'Com, ISI, ENIT & autres.",
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className="w-12 h-12 flex items-center justify-center text-xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl shadow-sm dark:shadow-none">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white">
                      {item.title}
                    </h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <CustomButton
              title="Tester le simulateur"
              icon={faLocationArrow}
              link="/fr/moyenne"
              mode="primary"
            />
          </div>

          {/* Right 3D Glass Card */}
          <div className="relative perspective-1000">
            <div className="relative p-8 md:p-10 rounded-[2.5rem] bg-white/80 dark:bg-white/5 backdrop-blur-2xl border border-gray-200 dark:border-white/10 shadow-2xl transition-all duration-500 hover:rotate-x-2 hover:rotate-y-2">
              <div className="text-[10px] font-black uppercase tracking-widest text-white/80 mb-8">
                Simulation — BAC Informatique
              </div>

              {/* Progress Bars */}
              <div className="space-y-6 mb-8">
                {subjects.map((sub, i) => (
                  <div key={i} className="space-y-2">
                    <div className="flex justify-between text-xs font-bold text-gray-700 dark:text-gray-300">
                      <span>{sub.name}</span>
                      <span>{sub.score}</span>
                    </div>
                    <div className="h-2 w-full bg-gray-200 dark:bg-black/20 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-accent-2 rounded-full"
                        style={{ width: `${sub.percentage}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Score Display */}
              <div className="flex justify-between items-center py-6 border-y border-gray-200 dark:border-white/10 my-6">
                <span className="text-sm font-bold text-white/80">
                  Score BAC estimé
                </span>
                <span className="text-4xl font-black text-blue-500 dark:text-white/80">
                  16.78
                </span>
              </div>

              {/* Universities Tags */}
              <div className="flex flex-wrap gap-2">
                {universities.map((uni, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-full text-[11px] font-bold bg-gray-100 dark:bg-accent-light text-gray-700 dark:text-gray-300"
                  >
                    {uni}
                  </span>
                ))}
              </div>

              {/* Footer Note */}
              <div className="flex items-center gap-4 mt-8 pt-6 border-t border-gray-200 dark:border-white/10">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-accent-2 to-accent-light " />
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  Tu es dans le <b>top 5 %</b>. Ces résultats t'ouvrent les
                  portes des meilleures écoles.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
