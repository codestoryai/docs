// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://docs.aide.dev',
	integrations: [
		starlight({
			title: 'Aide',
			logo: {
				dark: '/src/assets/logo-dark.png',
				light: '/src/assets/logo-light.png',
				alt: 'Aide',
				replacesTitle: true,
			},
			favicon: '/favicon.png',
			social: {
				discord: 'https://discord.gg/mtgrhXM5Xf',
				"x.com": 'https://x.com/aide_dev',
				github: 'https://github.com/codestoryai/aide',
			},
			sidebar: [
				{
					label: 'Aide',
					autogenerate: { directory: 'aide' },
				},
				{
					label: 'LLM Configuration',
					autogenerate: { directory: 'model-configuration' },
				}
			],
			customCss: [
				'./src/styles/custom.css',
				'@fontsource/fira-sans/400.css',
				'@fontsource/fira-sans/600.css',
			],
			defaultLocale: 'root',
			locales: {
				root: {
					label: 'English',
					lang: 'en',
				},
			},
			disable404Route: true,
		}),
	],
	redirects: {
		'/': '/aide/setting-up',
	}
});
