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
      validation: (Rule) =>
        Rule.regex(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/, {
          name: 'hexadecimal',
          invert: false,
        }).error("Merci d'entrer un code hexadécimal valide (e.g., #000000 or #FFF)."),
    }),
    defineField({
      name: 'billeterie',
      title: 'Lien de la billeterie',
      type: 'url',
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
