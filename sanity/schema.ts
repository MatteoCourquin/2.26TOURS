import { type SchemaTypeDefinition } from 'sanity';

import artists from './schemaTypes/artists';
import genres from './schemaTypes/genres';
import mixs from './schemaTypes/mixs';
import events from './schemaTypes/events';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [artists, mixs, genres, events],
};
