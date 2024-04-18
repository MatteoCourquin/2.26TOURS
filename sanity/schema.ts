import { type SchemaTypeDefinition } from 'sanity';

import artists from './schemaTypes/artists';
import blockContent from './schemaTypes/blockContent';
import genres from './schemaTypes/genres';
import mixs from './schemaTypes/mixs';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [artists, mixs, genres],
};
