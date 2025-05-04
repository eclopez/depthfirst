import type { SchemaTypeDefinition } from 'sanity';
import { authorType } from './author';
import { blockContentType } from './blockContent';
import { postType } from './post';
import { tagType } from './tag';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [authorType, blockContentType, postType, tagType],
};
