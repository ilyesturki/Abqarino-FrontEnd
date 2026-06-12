import { Section } from "../moyenne-utils";

type SectionSelectorProps = {
  selectedSectionId: string;
  sections: Section[];
  onSectionChange: (sectionId: string) => void;
};

export default function SectionSelector({
  selectedSectionId,
  sections,
  onSectionChange,
}: SectionSelectorProps) {
  return (
    <div className="rounded-xl border border-slate-200/90 bg-slate-100/70 p-5 dark:border-slate-800 dark:bg-slate-900/70">
      <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-2.5">
        Sélectionnez votre section
      </label>
      <select
        value={selectedSectionId}
        onChange={(e) => onSectionChange(e.target.value)}
        className="w-full rounded-xl border border-slate-200/90 bg-slate-200/70 px-4 py-3 text-sm text-slate-800 outline-none transition-all cursor-pointer appearance-none dark:border-slate-700/80 dark:bg-slate-800/70 dark:text-slate-50"
      >
        {sections.map((section) => (
          <option
            key={section.id}
            value={section.id}
            className="bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-200"
          >
            {section.name}
          </option>
        ))}
      </select>
    </div>
  );
}
