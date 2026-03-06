import React from 'react';

const Navbar = () => {
  return (
   
    <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md shadow-sm z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        
       
        <div className="text-2xl font-bold text-primary tracking-wide cursor-pointer">
          <a href="#home">Dott.ssa Nome Cognome</a>
        </div>

        
        <ul className="hidden md:flex space-x-8 text-textDark font-medium">
          <li><a href="#home" className="hover:text-primary transition-colors">Home</a></li>
          <li><a href="#chi-sono" className="hover:text-primary transition-colors">Chi Sono</a></li>
          <li><a href="#qualifiche" className="hover:text-primary transition-colors">Qualifiche</a></li>
          <li><a href="#ambiti" className="hover:text-primary transition-colors">Ambiti</a></li>
          <li><a href="#contatti" className="hover:text-primary transition-colors text-primary font-bold">Contatti</a></li>
        </ul>

      </div>
    </nav>
  );
};

export default Navbar;