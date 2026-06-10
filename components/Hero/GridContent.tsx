import React from "react";

const GridContent = () => {
  return (
    <div className="px-12 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] items-center justify-around relative z-10">
        <div>
          <div className="inline-flex items-center gap-1.5 bg-accent-light text-black dark:text-ink text-xs font-bold tracking-widest px-3 py-1.5 rounded-full mb-5 border border-accent-2/30">
            <span className="w-1.5 h-1.5 bg-accent-2 rounded-full animate-blink"></span>
            Plateforme éducative tunisienne
          </div>
          <h1 className="font-extrabold leading-[1.15] tracking-tight text-black dark:text-ink mb-5">
            Prépare ton BAC.
            <br />
            Entre à <em className="not-italic text-accent-2">l'université</em>
            <br />
            de tes rêves.
          </h1>
          <p className="text-base dark:text-ink-2 text-black leading-[1.7] max-w-md mb-9">
            Cours structurés, exercices adaptatifs, lives interactifs — tout le
            programme officiel tunisien, avec un accent1 spécial sur
            l'Informatique et les STI.
          </p>
          <div className="flex gap-3 flex-wrap">
            <a
              href="#pricing"
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-lg text-sm font-bold text-white1 bg-accent1 decoration-none cursor-pointer border-none transition-opacity duration-150 hover:opacity-88 hover:-translate-y-0.5"
            >
              Commencer gratuitement
            </a>
            <a
              href="/fr/moyenne"
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-lg text-sm font-bold text-ink bg-transparent border-[1.5px] border-line decoration-none cursor-pointer transition-opacity duration-150 hover:opacity-88 hover:-translate-y-0.5"
            >
              Voir les cours
            </a>
          </div>
        </div>

        <div className="flex flex-col items-center bg-dark border border-line rounded-r-lg p-10 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(108,71,255,0.25)_0%,transparent_70%)]"></div>
          <img
            src="/1st.png"
            alt="Abqarino"
            className="w-40 h-40 rounded-full border-[3px] border-accent-2/60 relative z-10 animate-hover"
          />
          <div className="relative z-10 bg-white1/4 border border-white1/8 rounded-xl p-3.5 mt-6 w-full">
            <p className="text-xs text-white1/70 leading-[1.55]">
              <strong className="text-amber font-bold">Bonjour !</strong> Je
              suis ton guide sur abqarino. Je t'accompagne à chaque étape — des
              cours jusqu'à l'orientation universitaire.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GridContent;
