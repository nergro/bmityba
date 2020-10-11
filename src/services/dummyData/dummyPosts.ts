import moment from 'moment';
import { Post } from 'types/post';

export const dummyPosts: Post[] = [
  {
    id: '00',
    category: { id: '00', nameEN: '', nameLT: '' },
    titleLT: 'Kraunasi...',
    titleEN: 'Loading...',
    shortDescriptionLT: 'Kraunasi...',
    shortDescriptionEN: 'Loading...',
    date: moment().toString(),
    contentLT: '',
    contentEN: '',
    image: {
      imageId: 'placeholder',
      imageUrl:
        'https://res.cloudinary.com/dve9vmjzv/image/upload/v1601223495/hodw7szs41mbj8yiabbe.png',
    },
  },
  {
    id: '000',
    category: { id: '000', nameEN: '', nameLT: '' },
    titleLT: 'Kraunasi...',
    titleEN: 'Loading...',
    shortDescriptionLT: 'Kraunasi...',
    shortDescriptionEN: 'Loading...',
    date: moment().toString(),
    contentLT: '',
    contentEN: '',
    image: {
      imageId: 'placeholder',
      imageUrl:
        'https://res.cloudinary.com/dve9vmjzv/image/upload/v1601223495/hodw7szs41mbj8yiabbe.png',
    },
  },
  {
    id: '0000',
    category: { id: '0000', nameEN: '', nameLT: '' },
    titleLT: 'Kraunasi...',
    titleEN: 'Loading...',
    shortDescriptionLT: 'Kraunasi...',
    shortDescriptionEN: 'Loading...',
    date: moment().format('DD MMMM, YYYY'),
    contentLT: '',
    contentEN: '',
    image: {
      imageId: 'placeholder',
      imageUrl:
        'https://res.cloudinary.com/dve9vmjzv/image/upload/v1601223495/hodw7szs41mbj8yiabbe.png',
    },
  },
  {
    id: '00000',
    category: { id: '00000', nameEN: '', nameLT: '' },
    titleLT: 'Kraunasi...',
    titleEN: 'Loading...',
    shortDescriptionLT: 'Kraunasi...',
    shortDescriptionEN: 'Loading...',
    date: moment().format('DD MMMM, YYYY'),
    contentLT: '',
    contentEN: '',
    image: {
      imageId: 'placeholder',
      imageUrl:
        'https://res.cloudinary.com/dve9vmjzv/image/upload/v1601223495/hodw7szs41mbj8yiabbe.png',
    },
  },
];
