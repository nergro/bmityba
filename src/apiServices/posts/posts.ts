import axios from 'axios';
import { Post } from 'types/post';

export const getPosts = async (): Promise<Post[]> => {
  const posts = await axios.get<Post[]>('/post/all');

  return posts.data;
};
