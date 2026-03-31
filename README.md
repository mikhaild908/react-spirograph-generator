# React Spirograph Generator

## Overview

This project is a React + TypeScript web app that renders spirograph curves on an HTML canvas.

Main goal:
- Provide an interactive UI where users can edit curve parameters and RGB color values.
- Render the resulting spirograph immediately after form submission.

How it works:
- The form in `src/App.tsx` stores user typing as text (`draft`) so inputs remain flexible.
- On submit, values are parsed into numbers, validated, and clamped when needed.
- Parsed values are stored in `params` and passed to `src/Spirograph.tsx`.
- `src/Spirograph.tsx` uses canvas math to draw the full curve point-by-point.

## Installation

### Prerequisites
- Node.js 20+ (Node 25 works as well)
- npm

### Steps

```bash
npm install
```

## Usage

### Run in development

```bash
npm run dev
```

Then open the local URL printed by Vite. In this project, because a GitHub Pages base path is configured, the local URL includes `/react-spirograph-generator`.

### Lint

```bash
npm run lint
```

### Build for production

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

### Deploy to GitHub Pages

```bash
npm run deploy
```

This runs:
- `predeploy` -> `npm run build`
- `deploy` -> publishes the `dist` directory via `gh-pages`

### Tests, examples, and demos
- There is currently no automated test suite in this repository.
- There are no separate example apps.
- The primary demo is the running app started with `npm run dev`.

## File Structure

Major files and directories:

- `src/`
  - `main.tsx`: Application entry point; mounts `App` in `StrictMode`.
  - `App.tsx`: Main UI and state flow; handles form input and parsing.
  - `Spirograph.tsx`: Canvas renderer and curve math helpers (`gcd`, angle conversion, color formatting).
  - `App.css`: Cyberpunk-themed layout and component styling used by the app.
  - `index.css`: Global base styles from the Vite starter.
  - `assets/`: Static image and SVG assets used by the frontend.
- `public/`
  - `favicon.svg`, `icons.svg`: Public static assets served directly.
- `index.html`: HTML shell containing the `#root` mount node.
- `package.json`: Project metadata, scripts, dependencies, and dev dependencies.
- `eslint.config.js`: ESLint configuration for TypeScript + React Hooks + Vite React Refresh.
- `tsconfig.json`: TypeScript project references.
- `tsconfig.app.json`: Strict TypeScript settings for application source (`src`).
- `tsconfig.node.json`: Strict TypeScript settings for Node-side config (`vite.config.ts`).
- `vite.config.ts`: Vite config, including React plugin and GitHub Pages `base` path.
- `.github/copilot-instructions.md`: Workspace AI coding guidance specific to this project.

Dependencies of note:
- Runtime: `react`, `react-dom`
- Tooling: `vite`, `typescript`, `eslint`, `typescript-eslint`, `@vitejs/plugin-react`, `gh-pages`

## Contributing

Contributions are welcome.

Recommended workflow:
1. Install dependencies with `npm install`.
2. Make changes in `src/`.
3. Run `npm run lint` and `npm run build` before opening a PR.
4. Keep naming and data-flow conventions aligned with current code:
   - Spirograph params use `R1`, `r2`, `l` and `red`, `green`, `blue`.
   - Keep the two-stage input pattern (`draft` text state -> parsed numeric `params`).

For major UI updates, preserve or intentionally evolve the existing cyberpunk visual direction in `src/App.css`.
