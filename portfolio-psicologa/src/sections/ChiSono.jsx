import React from 'react';

const ChiSono = () => {
  return (
    // Aggiunto overflow-hidden per evitare scroll orizzontali durante l'animazione
    <section id="chi-sono" className="py-20 overflow-hidden bg-white">
      <div className="max-w-6xl px-4 mx-auto sm:px-6 lg:px-8">
        
        <div className="flex flex-col items-center gap-12 md:flex-row">
          
          {/* Colonna Sinistra: Immagine - APPARE DA SINISTRA */}
          <div className="w-full md:w-1/2" data-aos="fade-right">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Ritratto Dottoressa" 
                className="rounded-2xl shadow-xl object-cover w-full h-[500px]"
              />
              <div className="absolute hidden w-full h-full border-4 -z-10 top-6 -right-6 border-secondary rounded-2xl md:block"></div>
            </div>
          </div>

          {/* Colonna Destra: Testo / Biografia - APPARE DA DESTRA CON RITARDO */}
          <div className="w-full md:w-1/2" data-aos="fade-left" data-aos-delay="200">
            <h2 className="mb-6 text-3xl font-bold md:text-4xl text-textDark">
              Piacere di conoscerti, sono la <span className="text-primary">Dott.ssa Nome Cognome</span>
            </h2>
            
            <div className="space-y-4 text-lg leading-relaxed text-gray-600">
              <p>
                Sono una psicologa e psicoterapeuta specializzata in supporto agli adulti e giovani adulti. Da oltre 10 anni accompagno le persone in percorsi di crescita personale e superamento delle difficoltà emotive.
              </p>
              <p>
                Il mio approccio si basa sull'ascolto attivo, l'empatia e la totale assenza di giudizio. Credo fermamente che ogni individuo possieda già le risorse necessarie per affrontare le sfide della vita; il mio compito è aiutarti a riscoprirle e valorizzarle.
              </p>
              <p>
                Insieme possiamo costruire uno spazio sicuro dove esplorare i tuoi pensieri, lavorando verso un maggiore benessere psicologico e una vita più serena.
              </p>
            </div>

            <div className="pt-6 mt-8 border-t border-gray-200">
              <p className="font-semibold text-textDark">
                Iscrizione all'Albo degli Psicologi della regione [Lazio] n. [12345]
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ChiSono;