import React, { FC } from 'react';
import styled from 'styled-components/macro';

import { SideSection } from './SideSection';

const Content = styled.div``;

export const InstagramPosts: FC = () => {
  return (
    <SideSection title="Latest Instagram Posts">
      <Content>
        <p>post 1</p>
        <p>post 2</p>
        <p>post 3</p>
        <p>post 4</p>
      </Content>
    </SideSection>
  );
};
