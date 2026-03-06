import React from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';

function App() {
  return (
    <div className="min-h-screen font-sans bg-background text-textDark">

      <Navbar />
      
      <main>
        
        <Hero />

       
        <section id="chi-sono" className="h-screen flex items-center justify-center bg-white">
          <h2 className="text-3xl font-bold">Sezione Chi Sono</h2>
        </section>

        <section id="qualifiche" className="h-screen flex items-center justify-center bg-background">
          <h2 className="text-3xl font-bold">Sezione Qualifiche</h2>
        </section>

        <section id="ambiti" className="h-screen flex items-center justify-center bg-white">
          <h2 className="text-3xl font-bold">Ambiti di Intervento</h2>
        </section>

        <section id="contatti" className="h-screen flex items-center justify-center bg-primary text-white">
          <h2 className="text-3xl font-bold">Sezione Contatti</h2>
        </section>
      </main>
    </div>
  );
}

export default App;