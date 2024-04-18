import { type SchemaTypeDefinition } from 'sanity';

import artists from './schemaTypes/artists';
import mixs from './schemaTypes/mixs';
import genres from './schemaTypes/genres';
import blockContent from './schemaTypes/blockContent';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [artists, mixs, genres, blockContent],
};
