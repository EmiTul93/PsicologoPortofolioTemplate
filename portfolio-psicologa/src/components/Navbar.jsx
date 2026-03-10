import React, { useState } from 'react';

const Navbar = () => {
  // 1. Dichiariamo lo "Stato" del menu. Inizia come 'false' (chiuso).
  const [isOpen, setIsOpen] = useState(false);

  // 2. Funzione helper: chiude il menu quando clicchiamo su un link
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="fixed top-0 left-0 z-50 w-full shadow-sm bg-white/80 backdrop-blur-md">
      <div className="flex items-center justify-between max-w-6xl px-4 py-4 mx-auto">
        
        {/* Logo (Aggiungiamo un livello z-index alto per tenerlo sopra il menu mobile) */}
        <div className="text-2xl font-bold text-primary tracking-wide cursor-pointer relative z-[60]">
          <a href="#home" onClick={closeMenu}>Dott.ssa Nome Cognome</a>
        </div>

        {/* 3. Il Pulsante Hamburger (Visibile solo su schermi piccoli) */}
        <div className="md:hidden relative z-[60]">
          <button 
            onClick={() => setIsOpen(!isOpen)} // Inverte lo stato: se è aperto lo chiude, se è chiuso lo apre
            className="p-2 text-textDark hover:text-primary focus:outline-none"
            aria-label="Apri o chiudi menu"
          >
            {isOpen ? (
              // Icona "X" se il menu è aperto
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              // Icona "Hamburger" se il menu è chiuso
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* 4. Menu Desktop (Nascosto su mobile) */}
        <ul className="hidden md:flex space-x-8 text-textDark font-medium relative z-[60]">
          <li><a href="#home" className="transition-colors hover:text-primary">Home</a></li>
          <li><a href="#chi-sono" className="transition-colors hover:text-primary">Chi Sono</a></li>
          <li><a href="#qualifiche" className="transition-colors hover:text-primary">Qualifiche</a></li>
          <li><a href="#ambiti" className="transition-colors hover:text-primary">Ambiti</a></li>
          <li><a href="#contatti" className="font-bold transition-colors hover:text-primary text-primary">Contatti</a></li>
        </ul>

        {/* 5. Menu Mobile (La tendina) */}
        {/* Usiamo le classi condizionali di Tailwind per animare l'entrata e l'uscita dall'alto */}
        <div className={`
          absolute top-0 left-0 w-full bg-white shadow-xl transition-transform duration-300 ease-in-out transform md:hidden z-50
          ${isOpen ? 'translate-y-0' : '-translate-y-full shadow-none'}
        `}>
          <ul className="flex flex-col items-center pt-24 pb-12 space-y-8 text-xl font-medium text-textDark">
            <li><a href="#home" onClick={closeMenu} className="transition-colors hover:text-primary">Home</a></li>
            <li><a href="#chi-sono" onClick={closeMenu} className="transition-colors hover:text-primary">Chi Sono</a></li>
            <li><a href="#qualifiche" onClick={closeMenu} className="transition-colors hover:text-primary">Qualifiche</a></li>
            <li><a href="#ambiti" onClick={closeMenu} className="transition-colors hover:text-primary">Ambiti</a></li>
            <li><a href="#contatti" onClick={closeMenu} className="inline-block px-8 py-3 font-bold text-white rounded-lg shadow-md bg-primary hover:bg-secondary">Contatti</a></li>
          </ul>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;