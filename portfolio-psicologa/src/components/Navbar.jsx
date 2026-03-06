import React from 'react';

const Navbar = () => {
  return (
   
    <nav className="fixed top-0 left-0 z-50 w-full shadow-sm bg-white/80 backdrop-blur-md">
      <div className="flex items-center justify-between max-w-6xl px-4 py-4 mx-auto">
        
       
        <div className="text-2xl font-bold tracking-wide cursor-pointer text-primary">
          <a href="#home">Dottore/essa Nome Cognome</a>
        </div>

        
        <ul className="hidden space-x-8 font-medium md:flex text-textDark">
          <li><a href="#home" className="transition-colors hover:text-primary">Home</a></li>
          <li><a href="#chi-sono" className="transition-colors hover:text-primary">Chi Sono</a></li>
          <li><a href="#qualifiche" className="transition-colors hover:text-primary">Qualifiche</a></li>
          <li><a href="#ambiti" className="transition-colors hover:text-primary">Ambiti</a></li>
          <li><a href="#contatti" className="font-bold transition-colors hover:text-primary text-primary">Contatti</a></li>
        </ul>

      </div>
    </nav>
  );
};

export default Navbar;