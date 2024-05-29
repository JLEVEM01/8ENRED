/** @type {import('tailwindcss').Config} */
export default {
	content: {
		relative: true,
		transform: (content) => content.replace(/taos:/g, ''),
		files: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	  },

	
	theme: {
		extend: {},
	},
	plugins: [
		require('tailwindcss-animated'),
		require('taos/plugin')
	],

	safelist: [
		'!duration-[0ms]',
		'!delay-[0ms]',
		'html.js :where([class*="taos:"]:not(.taos-init))'
	  ]
}
