 import { colors, brandColors, semanticColors } from './src/styles/colors.js'

/** @type {import('tailwindcss').Config} */
export default {
   content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
   theme: {
     extend: {
       colors: {
         ...colors,
         // Alias para colores de marca 
         primary: brandColors.primary,
         secondary: brandColors.secondary,
         accent: brandColors.accent,
         // Colores semánticos
     ...semanticColors,
   },
   fontFamily: {
     'pacifico': ['Pacifico', 'cursive'],
   },

 },
   },
   plugins: [],
 }