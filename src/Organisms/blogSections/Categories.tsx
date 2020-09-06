import React, { FC } from 'react';
import styled from 'styled-components/macro';

import { SideSection } from './SideSection';

const Content = styled.div``;

export const Categories: FC = () => {
  return (
    <SideSection title="Categories">
      <Content>
        <p>caegory 1</p>
        <p>caegory 2</p>
        <p>caegory 3</p>
        <p>caegory 4</p>
      </Content>
    </SideSection>
  );
};
