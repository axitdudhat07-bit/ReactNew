# Project Structure

This document explains the structure of the `Funfact` React + TypeScript + Vite project.

```
Funfact/
├─ public/                # Static assets served directly (images, favicon, etc.)
├─ src/                   # Application source code
│  ├─ assets/             # Images and other imported static files
│  ├─ App.tsx             # Root React component
│  ├─ App.css             # Styles for App component
│  ├─ index.css           # Global CSS
│  └─ main.tsx            # Entry point that renders `<App />` into DOM
├─ tsconfig.app.json      # TS config used by the app build
├─ tsconfig.node.json     # TS config for Node scripts and tooling
├─ tsconfig.json          # Base TS configuration
├─ vite.config.ts         # Vite configuration for development and build
├─ package.json           # npm scripts and dependencies
├─ eslint.config.js       # ESLint configuration
├─ README.md              # Basic template README (this file)
```

## Key points

- **Vite** is the build tool providing fast dev server and optimized production builds.
- **React** is used with TypeScript (`.tsx` files) and Fast Refresh via the Vite React plugin.
- **ESLint** configuration is included to enforce coding standards and linting rules.
- The source code lives in `src/` while any public/static files are in `public/`.

> To learn more or customize the project, consult the README in this directory or the official Vite and React documentation.