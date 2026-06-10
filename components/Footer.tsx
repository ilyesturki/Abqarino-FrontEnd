export default function Footer() {
    return (
      <footer className="bg-dark border-t border-line px-12 py-14 pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr_1fr] gap-12 max-w-7xl mx-auto mb-12">
          <div className="footer-brand">
            <a href="#" className="flex items-center gap-0 text-xl font-extrabold text-ink decoration-none hover:opacity-88">
              <img 
                src="/Gemini_Generated_Image_b8ndr6b8ndr6b8nd.png" 
                alt="abqarino" 
                className="w-12 h-12 rounded-full object-cover mr-2.5"
              />
              abqari<span className="text-amber">no</span>
            </a>
            <p className="text-sm text-white1/45 mt-3 leading-[1.65] max-w-[280px]">
              La plateforme éducative tunisienne. Du collège au BAC, avec un focus sur l'Informatique et les Sciences Techniques.
            </p>
          </div>
          <div className="footer-col">
            <h5 className="text-sm font-bold tracking-widest uppercase text-white1/45 mb-4">
              Plateforme
            </h5>
            <ul className="flex flex-col gap-2.5">
              <li><a href="#" className="text-sm text-white1/65 decoration-none transition-colors duration-150 hover:text-white1">Cours structurés</a></li>
              <li><a href="#" className="text-sm text-white1/65 decoration-none transition-colors duration-150 hover:text-white1">Exercices adaptatifs</a></li>
              <li><a href="#" className="text-sm text-white1/65 decoration-none transition-colors duration-150 hover:text-white1">Lives interactifs</a></li>
              <li><a href="#" className="text-sm text-white1/65 decoration-none transition-colors duration-150 hover:text-white1">Meets 1-to-1</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h5 className="text-sm font-bold tracking-widest uppercase text-white1/45 mb-4">
              Contact
            </h5>
            <ul className="flex flex-col gap-2.5">
              <li><a href="#" className="text-sm text-white1/65 decoration-none transition-colors duration-150 hover:text-white1">WhatsApp (PRO MAX)</a></li>
              <li><a href="#" className="text-sm text-white1/65 decoration-none transition-colors duration-150 hover:text-white1">Support email</a></li>
              <li><a href="#" className="text-sm text-white1/65 decoration-none transition-colors duration-150 hover:text-white1">Instagram</a></li>
              <li><a href="#" className="text-sm text-white1/65 decoration-none transition-colors duration-150 hover:text-white1">Facebook</a></li>
            </ul>
          </div>
        </div>
        <div className="flex justify-between items-center border-t border-white1/7 pt-6 max-w-7xl mx-auto">
          <span className="text-xs text-white1/35">© 2026 <span className="text-amber">abqarino</span> — Tous droits réservés</span>
          <span className="text-xs text-white1/35">Fait avec ❤️ en <span className="text-amber">Tunisie 🇹🇳</span></span>
        </div>
      </footer>
    );
  }
  