import { GrDocumentText as icon } from 'react-icons/gr';

export default {
  name: 'post',
  title: 'Статьи',
  type: 'document',
  icon,
  fields: [
    {
      name: 'title',
      title: 'Название',
      type: 'string',
      description: 'Название статьи',
    },
    {
      name: 'slug',
      title: 'Слаг',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 100,
      },
    },
    {
      name: 'image',
      title: 'Фото',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'body',
      title: 'Текст',
      type: 'text',
      description: 'Текст статьи',
    },
    {
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'category' } }],
    },
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image',
      category0: 'category.0.title',
      category1: 'category.1.title',
      category2: 'category.2.title',
      category3: 'category.3.title',
    },
    prepare: ({ title, media, ...categories }) => {
      const catList = Object.values(categories).filter(
        (res) => res !== undefined
      );
      console.log(categories);
      return {
        title,
        media,
        subtitle: catList.join(', '),
      };
    },
  },
};
