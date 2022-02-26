import sveltePreprocess from "svelte-preprocess"
import node from "@sveltejs/adapter-node"

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: sveltePreprocess(),
  kit: {
    // By default, `npm run build` will create a standard Node app.
    // You can create optimized builds for different platforms by
    // specifying a different adapter
    adapter: node({
      out: 'build'
    }),
    // adapter: static_adapter(),
    // Comment the paths if wants to run in dev mode.
    paths: {
      // base: '',
      // assets: './img/'
    },

    trailingSlash: "never"

    // hydrate the <div id="svelte"> element in src/app.html
  }
}

export default config
