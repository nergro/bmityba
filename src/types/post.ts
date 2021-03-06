import { Id } from 'types/id';
import { Image } from 'types/image';

import { PostCategory } from './postCategory';

export interface Post {
  id: Id;
  category: PostCategory;
  titleLT: string;
  titleEN: string;
  shortDescriptionLT: string;
  shortDescriptionEN: string;
  date: string;
  contentLT: string;
  contentEN: string;
  image: Image;
}
