export default function HeroBadge({className}:{className?:string}) {
    return (
      <div className={`inline-flex items-center gap-1.5 bg-accent-light text-black dark:text-ink text-xs font-bold tracking-widest px-3 py-1.5 rounded-full mb-5 border border-accent-2/30 ${className}`}>
        <span className="w-1.5 h-1.5 bg-amber rounded-full animate-blink" />
        Plateforme éducative tunisienne
      </div>
    );
  }