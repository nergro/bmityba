import { LatestPost } from 'Molecules/LatestPost';
import React, { FC } from 'react';
import { latestPosts } from 'services/posts';
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
  return (
    <SideSection title="Latest News">
      <Posts>
        {latestPosts.map(x => (
          <StyledLatestPost key={x.id} latestPost={x} />
        ))}
      </Posts>
    </SideSection>
  );
};
