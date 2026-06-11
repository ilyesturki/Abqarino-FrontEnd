export default function Stats() {
  const stats = [
    {
      value: "+2 500",
      label: "Exercices disponibles",
    },
    {
      value: "1ère → BAC",
      label: "Programme complet",
    },
    {
      value: "98 %",
      label: "Taux de satisfaction",
    },
    {
      value: "24 / 7",
      label: "Support PRO MAX",
    },
  ];

  return (
    <div className="relative py-20 z-10 bg-slate-100 dark:bg-slate-900/70 mt-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-px bg-slate-900/5 dark:bg-white/5 sm:grid-cols-2 lg:grid-cols-4 rounded-xl overflow-hidden border border-slate-200/90 dark:border-slate-800">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-slate-100/70 dark:bg-slate-900/70 px-4 py-8 text-center"
            >
              <p className="text-3xl font-black tracking-tight text-indigo-600 dark:text-indigo-400">
                {stat.value}
              </p>
              <p className="mt-1 text-sm font-medium text-slate-600 dark:text-slate-400">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
