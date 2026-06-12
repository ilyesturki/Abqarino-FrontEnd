import HeroBadge from "./HeroBadge";
import HeroActions from "./HeroActions";

export default function HeroContent() {
  return (
    <div>
      <HeroBadge />

      <h1 className="text-[clamp(2.2rem,4vw,3.2rem)] font-extrabold leading-[1.15] tracking-tight text-black dark:text-ink mb-5">
        Prépare ton BAC.
        <br />
        Entre à <em className="not-italic text-amber">l'université</em>
        <br />
        de tes rêves.
      </h1>

      <p className="text-base text-slate-700 dark:text-ink-2 leading-[1.7] max-w-md mb-9">
        Cours structurés, exercices adaptatifs, lives interactifs — tout le
        programme officiel tunisien, avec un accent spécial sur l'Informatique
        et les STI.
      </p>

      <HeroActions />
    </div>
  );
}
