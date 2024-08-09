import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'genre',
  title: '🏷️ STYLES MUSICAUX',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
  ],
});
