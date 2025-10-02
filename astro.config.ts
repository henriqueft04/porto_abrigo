import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import icon from 'astro-icon';
import astrowind from './vendor/integration';

export default defineConfig({
  output: 'static',
  site: 'https://henriqueft04.github.io',
  base: '/porto_abrigo',

  integrations: [
    tailwind(),
    sitemap(),
    mdx(),
    icon({
      include: {
        tabler: ['*'],
        'flat-color-icons': [
          'template',
          'gallery',
          'approval',
          'document',
          'advertising',
          'currency-exchange',
          'voice-presentation',
          'business-contact',
          'database',
        ],
      },
    }),
    astrowind({
      config: './src/config.yaml',
    }),
  ],

});
