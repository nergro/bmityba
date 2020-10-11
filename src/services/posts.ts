import { Post } from 'types/post';

export const sortPostsByDate = (posts: Post[], asc = true): Post[] =>
  posts.sort((a, b) => {
    if (a.date > b.date) return asc ? -1 : 1;
    if (a.date < b.date) return asc ? 1 : -1;
    return 0;
  });

export const filterPostsByName = (posts: Post[], input: string | undefined, isLT = true): Post[] =>
  input ? posts.filter(x => (isLT ? x.titleLT : x.titleEN).includes(input)) : posts;

export const filterPostsByCategory = (posts: Post[], categoryId: string): Post[] =>
  categoryId === 'all' ? posts : posts.filter(x => x.category.id === categoryId);
