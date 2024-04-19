import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'events',
  title: 'Évenements',
  type: 'document',
  fields: [
    defineField({
      name: 'illustration',
      title: 'Illustration',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'date',
      title: 'Date',
      type: 'date',
      options: {
        dateFormat: 'DD.MM.YY',
      },
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
    }),
  ],
});
