import { parseGrade, Section } from "../moyenne-utils";

type GradesGridProps = {
  selectedSection: Section;
  grades: Record<string, string>;
  onGradeChange: (subjectKey: string, value: string) => void;
  sportToggleExempted: boolean;
  onSportToggleChange: (checked: boolean) => void;
};

export default function GradesGrid({
  selectedSection,
  grades,
  onGradeChange,
  sportToggleExempted,
  onSportToggleChange,
}: GradesGridProps) {
  return (
    <div className="rounded-xl border border-slate-200/90 bg-slate-100/70 p-6 dark:border-slate-800 dark:bg-slate-900/70">
      <h3 className="text-[10px] font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-1">
        Notes par Matière
      </h3>
      <p className="text-xs text-slate-500 dark:text-slate-500 mb-5">
        Saisissez vos notes sur 20.
      </p>

      <div className="grid gap-4 sm:grid-cols-2">
        {selectedSection.subjects.map((subject) => {
          const isExemptedField = subject.isSport && sportToggleExempted;
          const gradeVal = parseGrade(grades[subject.key] ?? "");
          // const isHigh = gradeVal >= 14;
          // const isLow = gradeVal > 0 && gradeVal < 8;
          const gradeMood =
            gradeVal >= 18
              ? {
                  image: "/images/abqarino-love.png",
                  alt: "Excellent",
                }
              : gradeVal >= 15
              ? {
                  image: "/images/abqarino-cool.png",
                  alt: "Très Bien",
                }
              : gradeVal >= 10
              ? {
                  image: "/images/abqarino-happy.png",
                  alt: "Bien",
                }
              : gradeVal >= 8
              ? {
                  image: "/images/abqarino-thinking.png",
                  alt: "Peut mieux faire",
                }
              : gradeVal > 0
              ? {
                  image: "/images/abqarino-sad.png",
                  alt: "Aïe",
                }
              : null;
          return (
            <div
              key={subject.key}
              className={`rounded-xl border p-4 transition-all duration-200 ${
                isExemptedField
                  ? "border-amber-300 bg-amber-100/50 dark:border-amber-500/20 dark:bg-amber-500/5"
                  : "border-slate-200/80 bg-slate-100/30 hover:border-indigo-400/50 dark:border-slate-800/80 dark:bg-slate-900/30 dark:hover:border-indigo-500/40"
              }`}
            >
              <div className="flex justify-between items-start mb-2.5">
                <div>
                  <p className="text-sm font-bold text-slate-800 dark:text-slate-100 leading-tight">
                    {subject.name}
                  </p>
                  <p className="text-[10px] text-slate-500 dark:text-slate-500 mt-0.5">
                    Coefficient {subject.coef}
                  </p>
                </div>
                {gradeMood && (
                  <img
                    src={gradeMood.image}
                    alt={gradeMood.alt}
                    className="w-10 h-10 animate-in fade-in duration-300"
                  />
                )}
                {/* {isHigh && (
                  <span className="text-xs text-emerald-500 dark:text-emerald-400">
                    <img
                      src="/images/abqarino-love.png"
                      alt="High Grade"
                      className="w-10 h-10"
                    />
                  </span>
                )}
                {isLow && (
                  <span className="text-xs text-red-500 dark:text-red-400">
                    <img
                      src="/images/abqarino-sad.png"
                      alt="Low Grade"
                      className="w-10 h-10"
                    />
                  </span>
                )} */}
              </div>
              <input
                type="text"
                inputMode="decimal"
                value={grades[subject.key] ?? ""}
                onChange={(e) => onGradeChange(subject.key, e.target.value)}
                placeholder={
                  subject.isSport
                    ? sportToggleExempted
                      ? "Exempté"
                      : "0 – 20"
                    : "0 – 20"
                }
                disabled={subject.isSport && sportToggleExempted}
                className="w-full rounded-lg border border-slate-200/90 bg-slate-200/70 px-3 py-2.5 text-sm text-slate-800 placeholder:text-slate-400 outline-none transition-all focus:border-indigo-500/60 disabled:cursor-not-allowed disabled:bg-slate-200/80 dark:disabled:bg-slate-800/40 disabled:text-slate-500 dark:border-slate-700/80 dark:bg-slate-800/70 dark:text-slate-50 dark:placeholder:text-slate-600"
              />

              {subject.isSport && (
                <div className="mt-3 flex items-center justify-between gap-2 border-t border-slate-200/80 dark:border-slate-800/80 pt-3">
                  {/* <label className="inline-flex items-center gap-3 text-sm">
                    <div className="relative inline-flex h-7 w-14 shrink-0 items-center rounded-full bg-slate-200 dark:bg-slate-800 p-1 transition-colors duration-300 peer-checked:bg-emerald-500/25 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={sportToggleExempted}
                        onChange={(e) => onSportToggleChange(e.target.checked)}
                        className="peer sr-only !w-full !h-full !bg-red-500 z-50"
                      />

                      <span className="pointer-events-none inline-block h-5 w-5 rounded-full bg-white dark:bg-slate-100 shadow-md transition-all duration-300 peer-checked:translate-x-7 peer-checked:bg-emerald-500 peer-checked:shadow-emerald-500/30" />
                    </div>

                    <span className="font-medium text-xs text-slate-800 dark:text-slate-500">
                      Dispense d&apos;Éducation Physique
                    </span>
                  </label> */}
                  <label className="inline-flex items-center gap-3 text-sm cursor-pointer">
                    <div className="relative inline-flex h-7 w-14 shrink-0 items-center rounded-full bg-slate-200 dark:bg-slate-800 p-1 transition-colors duration-300 has-[:checked]:bg-emerald-500/25">
                      <input
                        type="checkbox"
                        checked={sportToggleExempted}
                        onChange={(e) => onSportToggleChange(e.target.checked)}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                      />
                      <span
                        className={`pointer-events-none inline-block h-5 w-5 rounded-full shadow-md transition-all duration-300 ${
                          sportToggleExempted
                            ? "translate-x-7 bg-emerald-500 shadow-emerald-500/30"
                            : "bg-white dark:bg-slate-100"
                        }`}
                      />
                    </div>
                    <span className="font-medium text-xs text-slate-800 dark:text-slate-500">
                      Dispense d&apos;Éducation Physique
                    </span>
                  </label>
                  <span
                    className={`rounded-full px-2.5 py-0.5 text-[10px] font-semibold transition-colors ${
                      sportToggleExempted
                        ? "bg-emerald-500/15 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-400"
                        : "bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400"
                    }`}
                  >
                    {sportToggleExempted ? "Exempté" : "Inclus"}
                  </span>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
