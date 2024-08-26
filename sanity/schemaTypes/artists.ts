import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'artists',
  title: '🎛️ DJs',
  type: 'document',
  fields: [
    defineField({
      name: 'portrait',
      title: 'Portrait',
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
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'genres',
      title: 'Genres',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'genre' }] }],
      validation: (Rule) => Rule.required().min(1).max(4),
    }),
    defineField({
      name: 'events',
      title: 'Évenements',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'events' }] }],
    }),
    defineField({
      name: 'soundcloud',
      title: 'Soundcloud',
      type: 'url',
    }),
    defineField({
      name: 'instagram',
      title: 'Instagram',
      type: 'url',
    }),
    defineField({
      name: 'facebook',
      title: 'Facebook',
      type: 'url',
    }),
    defineField({
      name: 'gallery',
      title: 'Gallery',
      type: 'array',
      of: [{ type: 'image' }],
    }),
  ],
});
