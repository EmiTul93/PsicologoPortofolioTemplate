import React from 'react';

const Contatti = () => {
  return (
    <section id="contatti" className="py-20 overflow-hidden text-white bg-primary">
      <div className="max-w-6xl px-4 mx-auto sm:px-6 lg:px-8">
        
        <div className="mb-16 text-center" data-aos="fade-up">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Iniziamo un <span className="text-secondary opacity-80">Percorso Insieme</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-200">
            Sentiti libero di scrivermi per chiedere informazioni o prenotare un primo colloquio conoscitivo.
          </p>
        </div>

        {/* L'intero riquadro esegue un "Zoom In" leggero per focalizzare l'attenzione */}
        <div 
          className="flex flex-col gap-12 overflow-hidden bg-white shadow-2xl lg:flex-row text-textDark rounded-3xl"
          data-aos="zoom-in" 
          data-aos-duration="800"
        >
          
          <div className="flex flex-col justify-between w-full p-10 text-white lg:w-2/5 bg-secondary">
            <div>
              <h3 className="mb-6 text-2xl font-bold">Recapiti</h3>
              <p className="mb-8 leading-relaxed text-gray-100">
                Ricevo nel mio studio privato a Roma e offro anche consulenze online in tutta Italia.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white/20 shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-200">Telefono / WhatsApp</p>
                    <p className="text-lg font-semibold">+39 333 1234567</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white/20 shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-200">Email</p>
                    <p className="text-lg font-semibold">info@dottoressa.it</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white/20 shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-200">Studio Medico</p>
                    <p className="text-lg font-semibold">Via Roma 123, Roma (RM)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full p-10 lg:w-3/5">
            <form action="https://formspree.io/f/ID_PROVVISORIO" method="POST" className="space-y-6">
              
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <label htmlFor="nome" className="block mb-2 text-sm font-medium text-gray-700">Nome e Cognome *</label>
                  <input type="text" id="nome" name="nome" required className="w-full px-4 py-3 transition-all border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-primary focus:border-primary" placeholder="Mario Rossi" />
                </div>
                <div>
                  <label htmlFor="telefono" className="block mb-2 text-sm font-medium text-gray-700">Telefono</label>
                  <input type="tel" id="telefono" name="telefono" className="w-full px-4 py-3 transition-all border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-primary focus:border-primary" placeholder="+39 333..." />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">Email *</label>
                <input type="email" id="email" name="email" required className="w-full px-4 py-3 transition-all border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-primary focus:border-primary" placeholder="mario.rossi@email.com" />
              </div>

              <div>
                <label htmlFor="messaggio" className="block mb-2 text-sm font-medium text-gray-700">Come posso aiutarti? *</label>
                <textarea id="messaggio" name="messaggio" rows="4" required className="w-full px-4 py-3 transition-all border border-gray-300 rounded-lg outline-none resize-none focus:ring-2 focus:ring-primary focus:border-primary" placeholder="Scrivi qui il tuo messaggio..."></textarea>
              </div>

              <div className="flex items-start">
                <input type="checkbox" id="privacy" required className="w-4 h-4 mt-1 border-gray-300 rounded text-primary focus:ring-primary" />
                <label htmlFor="privacy" className="ml-2 text-sm text-gray-500">
                  Acconsento al trattamento dei dati personali in base alla Privacy Policy.
                </label>
              </div>

              <button type="submit" className="w-full py-4 font-bold text-white transition-colors duration-300 rounded-lg shadow-md bg-primary hover:bg-secondary">
                Invia Messaggio
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contatti;