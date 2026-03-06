import React from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import ChiSono from './sections/ChiSono';
import Qualifiche from './sections/Qualifiche';
import Ambiti from './sections/Ambiti';
import Contatti from './sections/Contatti';

function App() {
  return (
    <div className="min-h-screen font-sans bg-background text-textDark">

      <Navbar/>
      
      <main>
        
        <Hero/>

        <ChiSono/>

        <Qualifiche/>

        <Ambiti/>

        <Contatti/>
        
      </main>
    </div>
  );
}

export default App;