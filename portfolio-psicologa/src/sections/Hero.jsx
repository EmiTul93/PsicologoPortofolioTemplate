import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="flex items-center justify-center min-h-screen px-4 pt-20 bg-background">
      {/* ECCO LA MODIFICA: 
        Abbiamo aggiunto data-aos="fade-up" a questo div. 
        Ora tutto il suo contenuto (titolo, paragrafo e bottoni) apparirà in dissolvenza verso l'alto.
      */}
      <div className="max-w-4xl mx-auto text-center" data-aos="fade-up">
        
        <h1 className="mb-6 text-5xl font-extrabold leading-tight md:text-6xl text-textDark">
          Ritrova il tuo <span className="text-primary">Benessere Emotivo</span>
        </h1>
        
        <p className="max-w-2xl mx-auto mb-10 text-xl leading-relaxed text-gray-600">
          Supporto psicologico professionale per affrontare le sfide della vita con consapevolezza e serenità. Inizia oggi il tuo percorso di crescita.
        </p>
        
        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <a 
            href="#contatti" 
            className="px-8 py-3 font-semibold text-white transition-all duration-300 rounded-lg shadow-md bg-primary hover:bg-secondary"
          >
            Prenota un Consulto
          </a>
          <a 
            href="#chi-sono" 
            className="px-8 py-3 font-semibold transition-all duration-300 bg-white border rounded-lg shadow-sm text-primary border-primary hover:bg-gray-50"
          >
            Scopri il mio approccio
          </a>
        </div>

      </div>
    </section>
  );
};

export default Hero;