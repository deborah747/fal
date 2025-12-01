# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Prevent 404 on page reload (SPA routing)

When using client-side routing (BrowserRouter), reloading a nested route may return a 404 from your host if the server is not configured to serve your app's `index.html` for unknown paths. There are two common approaches to prevent this:

1. Hosting rewrites (recommended for clean URLs):
	- For Vercel: add a `vercel.json` with a route that redirects all paths to `index.html` (this repo has a `vercel.json`).
	- For Firebase: add a `firebase.json` with a rewrite to `index.html` (this repo has a `firebase.json`).
	- For Netlify: add a `netlify.toml` with a redirect that rewrites `/*` to `/index.html`.

2. Use HashRouter (no hosting changes):
	- This keeps everything client-side by adding a hash (`#`) to your URLs (e.g., `https://example.com/#/dashboard`).
	- To enable: set `VITE_USE_HASH_ROUTER=true` in your environment or `.env` for local dev.

Both options are implemented in this repo:
- `vercel.json`, `firebase.json`, and `netlify.toml` are provided to configure your hosting to serve `index.html` for unknown paths.
- `App.jsx` checks `import.meta.env.VITE_USE_HASH_ROUTER` and will use `HashRouter` when set to `true`.

Example: enabling HashRouter locally

```bash
# create a local .env file
echo "VITE_USE_HASH_ROUTER=true" > .env
npm run dev
```

