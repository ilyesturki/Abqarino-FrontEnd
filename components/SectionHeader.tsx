import { Sparkles } from "lucide-react";

export default function SectionHeader({
  sectionTitle,
  title,
  customWord,
  desc,
}: {
  sectionTitle: string;
  title: string;
  customWord: string;
  desc: string;
}) {
  return (
    <div className="text-center mb-16">
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-bold tracking-widest uppercase border border-blue-500/20 mb-4">
        <Sparkles size={14} /> {sectionTitle}
      </div>
      <h2 className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white mb-6">
        {title}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-black dark:from-white dark to-blue-600 dark:to-blue-600">
          {customWord}
        </span>
      </h2>
      <p
        style={{
          fontSize: "17px",
          color: "rgba(255,255,255,0.45)",
          maxWidth: "550px",
          margin: "0 auto",
          lineHeight: 1.6,
        }}
      >
        {desc}
      </p>
    </div>
  );
}
