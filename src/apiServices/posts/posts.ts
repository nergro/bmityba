import { wordsOnlyReg } from 'apiServices/common/regExp';
import axios from 'axios';
import { Post } from 'types/post';

import { PostDTO } from './posts.dto';

export const getPosts = async (): Promise<Post[]> => {
  const posts = await axios.get<PostDTO[]>('/post/all');

  return posts.data.map(x => {
    const name = x.titleEN.toLocaleLowerCase().match(wordsOnlyReg);
    return {
      ...x,
      id: {
        original: x.id,
        pretty: name ? name.join('-') : x.id,
      },
    };
  });
};
