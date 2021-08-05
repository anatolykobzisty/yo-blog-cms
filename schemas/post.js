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
  ],
};
