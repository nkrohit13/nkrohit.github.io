import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    site: "https://nkrohit13.github.io",
    base: '/',
    integrations: [tailwind(), sitemap(), mdx()],
    output: 'static',
});