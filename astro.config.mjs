import { defineConfig, fontProviders } from 'astro/config';
import { loadEnv } from 'vite';
import react from '@astrojs/react';
import sanity from '@sanity/astro';
import tailwindcss from '@tailwindcss/vite';

const {
  PUBLIC_SANITY_API_VERSION,
  PUBLIC_SANITY_DATASET,
  PUBLIC_SANITY_PROJECT_ID,
} = loadEnv(process.env, process.cwd(), '');

export default defineConfig({
  experimental: {
    fonts: [
      {
        provider: fontProviders.google(),
        name: 'Cal Sans',
        cssVariable: '--font-cal-sans',
      },
      {
        provider: fontProviders.google(),
        name: 'Inter',
        cssVariable: '--font-inter',
      },
    ],
  },
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    sanity({
      projectId: PUBLIC_SANITY_PROJECT_ID,
      dataset: PUBLIC_SANITY_DATASET ?? 'development',
      apiVersion: PUBLIC_SANITY_API_VERSION ?? '2025-04-27',
      studioBasePath: '/admin',
      useCdn: true,
    }),
    react(),
  ],
});
