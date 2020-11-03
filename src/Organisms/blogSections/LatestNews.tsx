import { LatestPost } from 'Molecules/LatestPost';
import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { dummyPosts } from 'services/dummyData/dummyPosts';
import { sortPostsByDate } from 'services/posts';
import { usePostsResource } from 'store/postsStore/hooks';
import { isLoading } from 'store/types';
import styled from 'styled-components/macro';

import { SideSection } from './SideSection';

const Posts = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledLatestPost = styled(LatestPost)`
  &:not(:last-child) {
    margin-bottom: 15px;
  }
`;

export const LatestNews: FC = () => {
  const posts = usePostsResource();
  const { t } = useTranslation();

  return (
    <SideSection title={t('Latest Posts')}>
      <Posts>
        {(isLoading(posts) ? dummyPosts : sortPostsByDate(posts).slice(0, 4)).map(x => (
          <StyledLatestPost key={x.id.original} post={x} />
        ))}
      </Posts>
    </SideSection>
  );
};
