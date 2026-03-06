import React from 'react';

// Il nostro "Database" degli ambiti di intervento.
// Abbiamo aggiunto una proprietà 'svg' che contiene il percorso vettoriale dell'icona.
const ambitiData = [
  {
    id: 1,
    titolo: "Ansia e Attacchi di Panico",
    descrizione: "Percorsi per comprendere e gestire l'ansia, riducendone l'impatto sulla vita quotidiana e restituendo un senso di controllo.",
    // Icona a forma di fulmine/energia
    svg: <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
  },
  {
    id: 2,
    titolo: "Terapia di Coppia",
    descrizione: "Spazio sicuro per affrontare le crisi relazionali, migliorare la comunicazione e ritrovare l'equilibrio a due.",
    // Icona a forma di cuore
    svg: <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
  },
  {
    id: 3,
    titolo: "Gestione dello Stress",
    descrizione: "Tecniche pratiche (inclusa la Mindfulness) per affrontare periodi di sovraccarico lavorativo o emotivo.",
    // Icona a forma di scudo/protezione
    svg: <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.956 11.956 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  },
  {
    id: 4,
    titolo: "Crescita Personale",
    descrizione: "Un percorso per esplorare le proprie potenzialità, migliorare l'autostima e raggiungere i propri obiettivi di vita.",
    // Icona a forma di freccia in su/crescita
    svg: <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
  },
  {
    id: 5,
    titolo: "Elaborazione del Trauma",
    descrizione: "Supporto specializzato (tecniche EMDR) per superare eventi traumatici che continuano a influenzare il presente.",
    // Aggiunte le parentesi graffe per formattare bene e i Fragment <> </>
    svg: (
      <>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </>
    )
  },
  {
    id: 6,
    titolo: "Sostegno alla Genitorialità",
    descrizione: "Accompagnamento nelle diverse fasi dello sviluppo dei figli, per affrontare dubbi e difficoltà del ruolo genitoriale.",
    // Icona a forma di utenti/famiglia
    svg: <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
  }
];

const Ambiti = () => {
  return (
    // Sfondo bianco per alternare i colori delle sezioni
    <section id="ambiti" className="py-20 bg-white">
      <div className="max-w-6xl px-4 mx-auto sm:px-6 lg:px-8">
        
        {/* Intestazione */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl text-textDark">
            Ambiti di <span className="text-primary">Intervento</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            Ogni percorso è unico e personalizzato. Ecco le principali aree in cui posso offrirti il mio supporto.
          </p>
        </div>

        {/* Griglia Responsive: 
          1 colonna su mobile (default)
          2 colonne su tablet (md)
          3 colonne su desktop (lg)
        */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          
          {ambitiData.map((ambito) => (
            <div 
              key={ambito.id} 
              // 'group' è una classe speciale di Tailwind che ci permette di animare elementi figli quando si passa col mouse sul padre
              className="p-8 transition-colors duration-300 border border-gray-100 shadow-sm group rounded-2xl bg-gray-50 hover:bg-primary"
            >
              {/* Contenitore dell'icona */}
              <div className="flex items-center justify-center mb-6 transition-colors duration-300 bg-white shadow-sm w-14 h-14 rounded-xl text-primary group-hover:text-secondary">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="w-8 h-8" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor" 
                  strokeWidth={2}
                >
                  {ambito.svg}
                </svg>
              </div>
              
              {/* Titolo e Descrizione: cambiano colore in bianco quando si passa col mouse (grazie alla classe group-hover) */}
              <h3 className="mb-3 text-xl font-bold transition-colors duration-300 text-textDark group-hover:text-white">
                {ambito.titolo}
              </h3>
              
              <p className="leading-relaxed text-gray-600 transition-colors duration-300 group-hover:text-gray-100">
                {ambito.descrizione}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Ambiti;