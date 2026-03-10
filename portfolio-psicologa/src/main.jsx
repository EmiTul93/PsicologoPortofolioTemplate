import { StrictMode, useEffect } from 'react' // Importiamo anche useEffect
import { createRoot } from 'react-dom/client'
import AOS from 'aos'; // Importiamo la libreria JS
import 'aos/dist/aos.css'; // Importiamo i CSS di AOS
import './index.css'
import App from './App.jsx'

// Creiamo un componente wrapper per gestire l'inizializzazione
const RootComponent = () => {
  // useEffect esegue il codice una volta sola quando l'app parte
  useEffect(() => {
    AOS.init({
      // Impostazioni globali per il template
      duration: 1000, // Durata dell'animazione in millisecondi (1 secondo)
      easing: 'ease-in-out', // Tipo di transizione (morbida)
      once: true, // L'animazione avviene SOLO la prima volta che si scrolla (consigliato per siti professionali)
      mirror: false, // Non ripete l'animazione se si scrolla verso l'alto
      offset: 100, // Inizia l'animazione quando l'elemento è a 100px dal fondo dello schermo
    });
  }, []); // Array vuoto = esegui solo all'avvio

  return (
    <StrictMode>
      <App />
    </StrictMode>
  );
};

createRoot(document.getElementById('root')).render(<RootComponent />);