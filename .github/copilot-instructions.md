# Project Guidelines

## Code Style
- Use TypeScript + React function components with hooks.
- Keep component props and state explicitly typed; this repo uses strict TypeScript settings.
- Prefer small, pure math/helper functions for drawing logic.
- Preserve the existing cyberpunk visual direction and CSS variable patterns in `src/App.css`.

## Architecture
- Entry point: `src/main.tsx` mounts `App` inside `StrictMode`.
- `src/App.tsx` owns UI state and input flow:
  - `draft` stores raw text input values.
  - `params` stores parsed numeric values used for rendering.
  - Form submit parses and validates values before updating render state.
- `src/Spirograph.tsx` owns canvas drawing:
  - Receives only render-ready numeric props.
  - Uses `useEffect` to clear and redraw when params change.
  - Keeps drawing math in local helpers (`gcd`, angle conversion, color formatting).

## Build and Test
- Install deps: `npm install`
- Dev server: `npm run dev`
- Lint: `npm run lint`
- Production build: `npm run build`
- Preview build: `npm run preview`
- Deploy to GitHub Pages: `npm run deploy`
- Note: no automated test suite is configured in this workspace.

## Conventions
- Maintain parameter naming used across the app: `R1`, `r2`, `l`, `red`, `green`, `blue`.
- Keep the two-stage input pattern: text input -> parse/validate on submit -> render props.
- Clamp RGB values to the `0..255` range before rendering.
- Keep `vite.config.ts` `base` aligned with GitHub Pages repo path (`/react-spirograph-generator`) unless deployment target changes.
- For generic Vite template guidance, link to `README.md` rather than duplicating it.