import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        /* Celular y pantallas medianas: más margen lateral */
        DEFAULT: "1.25rem",
        sm: "1.5rem",
        md: "1.75rem",
        /* Escritorio: se mantiene más contenido útil */
        lg: "0.25rem",
        xl: "0.25rem",
        "2xl": "0.5rem",
      },
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
export default config;


