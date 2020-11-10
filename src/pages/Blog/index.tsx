import { P } from 'Atoms/text';
import { BlogLayout } from 'layouts/BlogLayout';
import { Post } from 'Molecules/Post';
import React, { FC, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import { dummyPosts } from 'services/dummyData/dummyPosts';
import { getLocale } from 'services/localStorage';
import { filterPostsByCategory, filterPostsByName, sortPostsByDate } from 'services/posts';
import { usePostsResource } from 'store/postsStore/hooks';
import { isLoading } from 'store/types';
import styled from 'styled-components/macro';
import { Post as PostInfo } from 'types/post';

const Posts = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledPost = styled(Post)`
  max-width: 800px;
  &:not(:last-child) {
    margin-bottom: 70px;
  }
`;

const getPosts = (
  posts: PostInfo[] | 'Loading',
  categoryId: string | undefined,
  searchInput: string | undefined,
  isLT: boolean
): PostInfo[] =>
  isLoading(posts)
    ? dummyPosts
    : sortPostsByDate(
        filterPostsByName(
          categoryId ? filterPostsByCategory(posts, categoryId) : posts,
          searchInput,
          isLT
        )
      );

const Blog: FC = () => {
  const { t } = useTranslation();

  const [searchInput, setSearchInput] = useState<string>();
  const posts = usePostsResource();
  const location = useLocation();

  const categoryId = location.state ? location.state.categoryId : undefined;

  const locale = getLocale();
  const isLT = locale === 'lt';

  const filteredPosts = getPosts(posts, categoryId, searchInput, isLT);

  return (
    <BlogLayout onSearchChange={event => setSearchInput(event.target.value)}>
      <Helmet>
        <meta
          name="description"
          content="Profesionalūs straipsniai ir patarimai kaip jaustis puikiai kiekvieną dieną. Mitybos planai ir konsultacijos visiems."
        />
        <title>
          Brigita Meiglaitė - mitybos specialistė. Mitybos planai, patarimai, sporto programa.
        </title>
      </Helmet>
      {filteredPosts.length > 0 ? (
        <Posts>
          {filteredPosts.map(x => (
            <StyledPost key={x.id.original} post={x} />
          ))}
        </Posts>
      ) : (
        <P size="big">{t('No records')}</P>
      )}
    </BlogLayout>
  );
};

export default Blog;
