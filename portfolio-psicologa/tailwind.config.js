/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4F6F52",    // Verde salvia scuro (eleganza, stabilità)
        secondary: "#739072",  // Verde salvia chiaro (calma, natura)
        background: "#F5F5F5", // Grigio chiarissimo per lo sfondo (non affatica gli occhi)
        textDark: "#333333",   // Testo scuro, ma non nero assoluto (miglior contrasto)
      }
    },
  },
  plugins: [],
}