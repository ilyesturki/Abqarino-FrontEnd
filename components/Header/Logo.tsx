export default function Logo() {
  return (
    <a
      href="#"
      className="mt-1 ml-1 group flex items-center gap-1 transition-transform duration-300 hover:scale-[1.02]"
    >
      <div className="relative mt-1.5 ">
        <img
          src="/imgs/abqarinoLogo.png"
          alt="Abqarino"
          className="h-[80px] w-[80px] object-cover shadow-lg "
        />
        <div className="absolute right-1 top-2 h-3 w-3 rounded-full bg-amber animate-pulse" />
      </div>

      <div>
        <h1 className="text-xl font-extrabold text-ink">
          Abqari<span className="text-amber">no</span>
        </h1>

        <p className="text-[11px] font-medium text-slate-400">
          Apprendre • Construire • Réussir
        </p>
      </div>
    </a>
  );
}
