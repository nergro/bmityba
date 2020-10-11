import axios from 'axios';
import { PostCategory } from 'types/postCategory';

export const getPostCategories = async (): Promise<PostCategory[]> => {
  const categories = await axios.get<PostCategory[]>('/post-category/all');

  return categories.data;
};
