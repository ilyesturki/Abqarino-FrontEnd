type StatusBarProps = {
  coreDenominator: number;
  isSportExempted: boolean;
  sectionName: string;
};

export default function StatusBar({ coreDenominator, isSportExempted, sectionName }: StatusBarProps) {
  return (
    <div
      className="rounded-xl border border-slate-200/90 bg-slate-100/70 px-5 py-3 mb-8 flex flex-wrap gap-x-6 gap-y-2 text-xs dark:border-slate-800 dark:bg-slate-900/70"
    >
      <div>
        <span className="text-slate-500 dark:text-slate-400 mr-1.5">Diviseur actif:</span>
        <span className="text-slate-800 dark:text-slate-200 font-bold">{coreDenominator.toFixed(1)}</span>
      </div>
      <div>
        <span className="text-slate-500 dark:text-slate-400 mr-1.5">Sport:</span>
        <span className={`font-bold ${isSportExempted ? "text-amber-500 dark:text-amber-400" : "text-indigo-600 dark:text-indigo-400"}`}>
          {isSportExempted ? "Dispensé" : "Inclus"}
        </span>
      </div>
      <div>
        <span className="text-slate-500 dark:text-slate-400 mr-1.5">Section active:</span>
        <span className="font-bold text-indigo-600 dark:text-indigo-400">{sectionName}</span>
      </div>
    </div>
  );
}
