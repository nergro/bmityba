import React, { FC } from 'react';
import styled from 'styled-components/macro';

import { SideSection } from './SideSection';

const Content = styled.div``;

const Post = styled.div`
  div iframe #document html {
    display: none !important;
  }
`;

export const InstagramPosts: FC = () => {
  return (
    <SideSection title="Latest Instagram Posts">
      <Content>
        <Post></Post>
      </Content>
    </SideSection>
  );
};
