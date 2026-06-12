import AnimatedName from "@/components/Common/AnimatedName/AnimatedName";

type Verdict = {
  text: string;
  emoji: string;
  color: string;
  image: string;
};

type SidebarProps = {
  showResults: boolean;
  moyenne: number;
  scoreFG: number;
  moyenneColor: string;
  currentVerdict: Verdict;
};

export default function Sidebar({
  showResults,
  moyenne,
  scoreFG,
  moyenneColor,
  currentVerdict,
}: SidebarProps) {
  return (
    <div className="space-y-5">
      {showResults && (
        <>
          <div className="rounded-xl border border-slate-200/90 bg-slate-100/70 p-6 dark:border-slate-800 dark:bg-slate-900/70">
            <span className="text-[10px] uppercase text-slate-500 dark:text-slate-400 block mb-2">
              Moyenne Générale
            </span>
            <div
              className={`text-4xl font-black bg-clip-text text-transparent bg-gradient-to-r ${moyenneColor}`}
            >
              {moyenne.toFixed(2)}
            </div>
          </div>

          <div className="rounded-xl border border-slate-200/90 bg-slate-100/70 p-6 dark:border-slate-800 dark:bg-slate-900/70">
            <span className="text-[10px] uppercase text-slate-500 dark:text-slate-400 block mb-2">
              Score d&apos;Orientation (FG)
            </span>
            <div className="text-4xl font-black text-indigo-600 dark:text-indigo-400">
              {scoreFG.toFixed(2)}
            </div>
          </div>
        </>
      )}

      <div className="rounded-xl border border-slate-200/90 bg-slate-100/70 p-6 flex flex-col items-center text-center gap-3 dark:border-slate-800 dark:bg-slate-900/70">
        <span className="text-[10px] text-slate-500 dark:text-slate-400 w-full text-left">
          <AnimatedName name="abqarino" className="text-base" />
        </span>
        <img
          src={currentVerdict.image}
          alt="Abqarino"
          className="w-36 h-36 border-2 border-slate-200 dark:border-slate-700/60 m-1 rounded-full object-contain drop-shadow-lg bg-slate-200/70 dark:bg-slate-800/50"
        />
        <p className={`text-sm font-semibold ${currentVerdict.color}`}>
          {currentVerdict.text}
        </p>
      </div>

      <div className="rounded-xl border border-slate-200/90 bg-slate-100/70 p-5 text-xs space-y-4 dark:border-slate-800 dark:bg-slate-900/70">
        <h4 className="font-bold uppercase tracking-widest text-[10px] text-slate-500 dark:text-slate-400">
          Formules réglementaires
        </h4>
        <div className="rounded-lg p-4 bg-slate-200/80 dark:bg-black/20 font-mono text-[11px] text-slate-700 dark:text-slate-300">
          <p>Moy = Σ(Note × Coef) / ΣCoefs</p>
          <p>FG = 4 × MG + Σ(Matière × Poids)</p>
        </div>
      </div>
    </div>
  );
}
