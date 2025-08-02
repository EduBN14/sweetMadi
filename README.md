# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:


# Sweet Madi 🍰

¡Bienvenido a Sweet Madi! Tu tienda online de postres caseros, kekes, galletas y dulces artesanales hechos con amor en Perú.

## 🚀 ¿Qué es Sweet Madi?
Sweet Madi es una tienda virtual donde puedes explorar, elegir y pedir los postres más deliciosos para cualquier ocasión. Nuestra misión es endulzar tu día con productos frescos, naturales y llenos de sabor.

## 🧁 Características principales
- Catálogo visual de productos con imágenes y nombres
- Carrito de compras interactivo
- Precios por unidad y por molde
- Resumen de pedido y total en tiempo real
- Envío de pedido directo a WhatsApp
- Diseño responsive y moderno con Tailwind CSS

## 📦 ¿Qué puedes encontrar?
- Kekes de chocolate, zanahoria, plátano, piña y más
- Galletas artesanales (chocochips, red velvet, full chocolate)
- Brownies, rollos de canela, pie de manzana y otros postres

## 🛒 ¿Cómo funciona?
1. Navega por el catálogo y agrega tus postres favoritos al carrito
2. Ajusta cantidades o elige por molde si lo deseas
3. Revisa tu pedido y haz clic en "Enviar Pedido" para contactarnos por WhatsApp
4. ¡Listo! Te confirmamos disponibilidad y coordinamos la entrega

## 🖼️ Demo
¡Visita la tienda en producción!
https://sweetmadi.netlify.app

## 🛠️ Tecnologías usadas
- React + TypeScript
- Vite
- Tailwind CSS
- Context API para manejo de carrito
- Netlify (deploy)

## 📲 Contacto
¿Tienes dudas o quieres hacer un pedido especial?
- WhatsApp: [+51 964 158 504](https://wa.me/51964158504)
- Instagram: @sweetmadi.pe

---

¡Gracias por visitar Sweet Madi! Comparte dulzura y apoya el emprendimiento local ❤️

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
