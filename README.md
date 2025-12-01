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

Debugging module MIME errors:

- If you see an error like: "Failed to load module script: Expected a JavaScript-or-Wasm module script but the server responded with a MIME type of 'text/html'" it means your hosting is returning `index.html` instead of the requested JS file (usually because rewrites/catch-all are returning index.html for every request).
- Steps to debug:
	1. Open your deployed URL in the browser and check Network tab for the failing `*.js` request. Click it and view the Response; if it contains the content of `index.html` and `Content-Type: text/html`, the rewrite is happening for an asset.
	2. Ensure you deployed the contents of the `dist` (Vite build) directory, not the source `index.html` pointing at `/src/*`.
	3. Make sure your hosting config allows serving static files first (for example, see `vercel.json` below that includes a `handle: filesystem` route so existing files are served before the catch-all route).
	4. If deploying under a path prefix (e.g., GitHub Pages), set `base` in `vite.config.js` so script references are correctly formed in `dist/index.html`.

Quick check list:
	- Did you run `npm run build` and deploy the `dist` contents?
	- Are all hashed JS files present in your `dist` folder and the `index.html` references them?
	- Is the hosting provider serving those JS files directly (not rewriting the request to `index.html`)?

	Previewing the built output locally

	1. Run a build:

	```bash
	npm run build
	```

	2. Preview the static build (Vite's preview server):

	```bash
	npm run preview
	```

	3. Alternatively use a static server to test serving `dist` (install `serve` if needed):

	```bash
	npx serve dist
	# or
	npx http-server dist -p 8080
	```

	4. Inspect `dist/index.html`: confirm the `script` tag has a path like `/assets/index-<hash>.js` and that file exists in `dist/assets/`.



