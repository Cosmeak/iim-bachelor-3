// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	app: {
		head: {
			link: [
				{
					rel: 'icon',
					type: 'image/png',
					href: '/logo-black.png',
				}
			]
		}
	},
	modules: ["@nuxtjs/strapi", '@nuxtjs/tailwindcss'],
	strapi: {
		url: process.env.STRAPI_URL || 'http://localhost:1337',
		prefix: "/api",
		version: "v4",
	},
	tailwindcss: {
		config: {
			theme: {
				extend: {
					colors: {
						'primary': {
							'lighten': '#FFF0D6',
							'light': '#FFDEA3',
							DEFAULT: '#FDBC13',
							'dark': '#5D4200',
							'darken': '#261900',
						},
						'secondary': {
							'lighten': '#D6E3FF',
							'light': '#A9C7FF',
							DEFAULT: '#2277DD',
							'dark': '#00468C',
							'darken': '#003063',
						},
						'light': '#F0F8FF',
						'dark': '#24231E',
						'danger': '#F91F23',
						'warning': {
							'light': '#F6C652',
							DEFAULT: '#F97026',
						},
						'success': '#75CC33',
						'info': '#C280B6',
					},
				}
			}
		}
	}
});