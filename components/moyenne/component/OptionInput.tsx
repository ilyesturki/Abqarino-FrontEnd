type OptionInputProps = {
  optionGrade: string;
  optionBonus: number;
  onOptionChange: (value: string) => void;
};

export default function OptionInput({ optionGrade, optionBonus, onOptionChange }: OptionInputProps) {
  return (
    <div
      className="rounded-xl border border-slate-200/90 bg-slate-100/70 p-5 dark:border-slate-800 dark:bg-slate-900/70"
    >
      <h3 className="text-[10px] font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-1">Matière Optionnelle</h3>
      <p className="text-xs text-slate-500 dark:text-slate-500 mb-3">Seuls les points au-dessus de 10 sont comptabilisés comme bonus.</p>
      <div className="grid gap-4 sm:grid-cols-[1.2fr_0.8fr] items-center">
        <input
          type="number"
          min={0}
          max={20}
          inputMode="decimal"
          value={optionGrade}
          onChange={(e) => onOptionChange(e.target.value)}
          placeholder="Ex: 14"
          className="w-full rounded-xl border border-slate-200/90 bg-slate-200/70 px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 dark:placeholder:text-slate-600 outline-none transition-all focus:border-indigo-500/60 dark:border-slate-700/80 dark:bg-slate-800/70 dark:text-slate-50"
        />
        <div className="text-xs text-slate-500 dark:text-slate-400 pl-2">
          Bonus généré :{" "}
          <span className="text-indigo-600 dark:text-indigo-400 font-black text-base">+{optionBonus.toFixed(1)}</span>{" "}
          pts
        </div>
      </div>
    </div>
  );
}
