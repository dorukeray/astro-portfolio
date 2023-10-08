import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";

import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";

import partytown from "@astrojs/partytown";


// https://astro.build/config
export default defineConfig({

  site: 'https://doruk.dorkodu.com',

  integrations: [mdx(), react(), sitemap(), partytown()],

  redirects: {
    // '/old': '/new',
  },

  //? Vite config
  vite: {
    ssr: {},
    plugins: [ vanillaExtractPlugin() ],
  },
});