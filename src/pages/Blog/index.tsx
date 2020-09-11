import { BlogLayout } from 'layouts/BlogLayout';
import { Post } from 'Molecules/Post';
import React, { FC } from 'react';
import { latestPosts } from 'services/posts';
import styled from 'styled-components/macro';

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

export const Blog: FC = () => {
  return (
    <BlogLayout>
      <Posts>
        {latestPosts.map(x => (
          <StyledPost key={x.id} post={x} />
        ))}
      </Posts>
    </BlogLayout>
  );
};
