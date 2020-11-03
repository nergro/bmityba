import { Image } from 'types/image';
import { PostCategory } from 'types/postCategory';

export interface PostDTO {
  id: string;
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
