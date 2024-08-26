import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'events',
  title: '🎪 ÉVENEMENTS',
  type: 'document',
  fields: [
    defineField({
      name: 'illustration',
      title: 'Illustration',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'date',
      title: 'Date',
      type: 'date',
      options: {
        dateFormat: 'DD.MM.YY',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'genres',
      title: 'Genres',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'genre' }] }],
      validation: (Rule) => Rule.required().min(1).max(3),
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'color',
      title: 'Color Hexadecimal (#000000)',
      type: 'string',
      // validation: (Rule) => Rule.required(), // Regex hexadecimal
    }),
    defineField({
      name: 'billeterie', // À traduire
      title: 'Lien de la billeterie',
      type: 'url', // Link ?
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'date',
      media: 'illustration',
    },
  },
});
