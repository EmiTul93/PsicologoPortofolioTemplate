import React from 'react';

const qualificheData = [
  { id: 1, anno: "2015 - 2020", titolo: "Laurea Magistrale in Psicologia Clinica", istituto: "Università degli Studi di Roma 'La Sapienza'", descrizione: "Specializzazione in valutazione clinica, diagnosi e interventi di supporto psicologico." },
  { id: 2, anno: "2021 - 2024", titolo: "Scuola di Specializzazione in Psicoterapia", istituto: "Istituto Cognitivo Comportamentale", descrizione: "Diploma di Psicoterapeuta con focus sui disturbi d'ansia e dell'umore." },
  { id: 3, anno: "2022", titolo: "Master in Tecniche di Rilassamento", istituto: "Associazione Italiana Psicologi", descrizione: "Competenze avanzate in Mindfulness, Training Autogeno e gestione dello stress." },
  { id: 4, anno: "2023", titolo: "Certificazione EMDR (Livello 1)", istituto: "EMDR Italia", descrizione: "Abilitazione all'utilizzo della terapia EMDR per l'elaborazione dei traumi." }
];

const Qualifiche = () => {
  return (
    <section id="qualifiche" className="py-20 overflow-hidden bg-background">
      <div className="max-w-6xl px-4 mx-auto sm:px-6 lg:px-8">
        
        {/* L'intestazione appare per prima */}
        <div className="mb-16 text-center" data-aos="fade-up">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl text-textDark">
            Percorso <span className="text-primary">Formativo</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            La formazione continua è alla base del mio impegno per offrire il miglior supporto possibile.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          
          {/* Aggiungiamo 'index' per calcolare il delay dinamico */}
          {qualificheData.map((item, index) => (
            <div 
              key={item.id} 
              className="p-8 transition-shadow duration-300 bg-white border border-gray-100 shadow-sm rounded-2xl hover:shadow-md"
              data-aos="fade-up"
              data-aos-delay={100 + (index * 200)} // Il trucco matematico per l'effetto cascata
            >
              <span className="inline-block px-3 py-1 mb-4 text-sm font-semibold rounded-full bg-secondary/10 text-primary">
                {item.anno}
              </span>
              <h3 className="mb-2 text-xl font-bold text-textDark">{item.titolo}</h3>
              <p className="mb-4 font-medium text-secondary">{item.istituto}</p>
              <p className="leading-relaxed text-gray-600">{item.descrizione}</p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Qualifiche;