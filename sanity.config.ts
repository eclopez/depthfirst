import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { schema } from '@/sanity/schemaTypes';

export default defineConfig({
  name: 'depth-first-dev',
  title: 'DepthFirst.dev',
  projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID ?? '',
  dataset: import.meta.env.PUBLIC_SANITY_DATASET ?? 'development',
  plugins: [structureTool()],
  schema,
});
