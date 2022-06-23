import { defineNuxtConfig } from "nuxt";

export default defineNuxtConfig({
   typescript: {
      shim: false,
   },
   css: ["~/assets/css/tailwind.css"],
   modules:["@nuxt/content"],
   content: {
		markdown: {
			toc: {
				depth: 3,
				searchDepth: 3,
			},
		},
		highlight: {
			theme: "dracula-soft",
		},
	},
   build: {
      postcss: {
         postcssOptions: {
            plugins: {
               tailwindcss: {},
               autoprefixer: {},
            },
         },
      },
   },
});
