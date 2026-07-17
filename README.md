<h1 align="center">Shopping cart</h1> 
  
---

## 📝 Description
A modern, responsive, and dynamic E-commerce Shopping Cart web application. This project focuses on UI/UX precision, modular architecture, and seamless client-side data state management. 
The application provides a smooth, real-time checkout experience with fluid interactions and automated dynamic calculations.


---

## Screencast

https://github.com/user-attachments/assets/daba35a1-7930-4370-bfb2-1aa0815e4465


---
## 🛠️ Tech Stack & Tools

* **Core JavaScript (ES6+)** — Handles state tracking, DOM rendering, and real-time interaction logic.
* **HTML5 Semantic Markup** — Ensures highly structured document hierarchy and standard accessibility.
* **SCSS / SASS** — Advanced styling using modular mixins, custom utility variables, nested rules, and flexible layout systems.
* **BEM Methodology** — Block-Element-Modifier naming convention strictly followed for modular, scalable, and predictable CSS code architecture.
* **Vite / Webpack** *(or adjust if you use standard compilers)* — Frontend build asset pipelines optimized for speedy development.
  
---

## ✨ Features

* **Dynamic Cart Management** — Add, remove, and clear products instantly without page reloads.
* **Quantity Controls** — Increment or decrement individual item counts with automated real-time subtotal updates.
* **Live Price Calculations** — Dynamic estimation of total item counts, promo code discounts, and final order value.
* **Fully Responsive UI** — Tailored design layouts utilizing modern mobile-first principles for desktops, tablets, and smartphones.
* **Interactive Elements** — Accessible forms, interactive hover effects, and strict input validations.

---





# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is enabled on this template. See [this documentation](https://react.dev/learn/react-compiler) for more information.

Note: This will impact Vite dev & build performances.

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

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

export default defineConfig([
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
