// svelte.config.cielo
// @type {import('@sveltejs/kit').Config}
var config;

import adapter from '@sveltejs/adapter-static';

config = {
  kit: {
    // hydrate the <div id="svelte"> element in src/app.html
    target: '#svelte',
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: null
    })
  }
};

export default config;
