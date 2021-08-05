import { FaHashtag as icon } from 'react-icons/gr';

export default {
  // Название
  name: 'category',
  // Title, который видят пользователи
  title: 'Категории',
  type: 'document',
  icon,
  fields: [
    {
      name: 'title',
      title: 'Название',
      type: 'string',
      description: '(Название категории)',
    },
    {
      name: 'europe',
      title: 'Europe',
      type: 'boolean',
      options: {
        layout: 'checkbox',
      },
    },
    {
      name: 'usa',
      title: 'United States',
      type: 'boolean',
      options: {
        layout: 'checkbox',
      },
    },
  ],
  preview: {
    select: {
      name: 'title',
      europe: 'europe',
    },
    prepare: ({ name, europe }) => ({
      title: `${name} ${europe ? `🇪🇺󠁵` : `🇺🇸`}`,
    }),
  },
};
