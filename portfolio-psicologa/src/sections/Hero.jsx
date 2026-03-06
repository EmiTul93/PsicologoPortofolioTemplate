import React from 'react';

const Hero = () => {
  return (
   
    <section id="home" className="min-h-screen flex items-center justify-center bg-background pt-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        
        
        <h1 className="text-5xl md:text-6xl font-extrabold text-textDark mb-6 leading-tight">
          Ritrova il tuo <span className="text-primary">Benessere Emotivo</span>
        </h1>
        
       
        <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
          Supporto psicologico professionale per affrontare le sfide della vita con consapevolezza e serenità. Inizia oggi il tuo percorso di crescita.
        </p>
        
        
        <div className="flex justify-center gap-4 flex-col sm:flex-row">
          <a 
            href="#contatti" 
            className="px-8 py-3 bg-primary text-white font-semibold rounded-lg shadow-md hover:bg-secondary transition-all duration-300"
          >
            Prenota un Consulto
          </a>
          <a 
            href="#chi-sono" 
            className="px-8 py-3 bg-white text-primary border border-primary font-semibold rounded-lg shadow-sm hover:bg-gray-50 transition-all duration-300"
          >
            Scopri il mio approccio
          </a>
        </div>

      </div>
    </section>
  );
};

export default Hero;