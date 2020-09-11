import { Link } from 'Atoms/links/Link';
import React, { FC } from 'react';
import styled from 'styled-components/macro';

import { SideSection } from './SideSection';

const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: -10px;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid #e8e8e8;
`;

const Line = styled.hr`
  width: 10px;
  margin: 0 15px 0 0;
  border: 1px solid ${props => props.theme.colors.accents.secondary};
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

export const Categories: FC = () => {
  return (
    <SideSection title="Categories">
      <Content>
        <Row>
          <Line />
          <StyledLink to="#">Diet</StyledLink>
        </Row>
        <Row>
          <Line />
          <StyledLink to="#">Fitness</StyledLink>
        </Row>
        <Row>
          <Line />
          <StyledLink to="#">Health</StyledLink>
        </Row>
        <Row>
          <Line />
          <StyledLink to="#">Protein</StyledLink>
        </Row>
        <Row>
          <Line />
          <StyledLink to="#">Weight Loss</StyledLink>
        </Row>
      </Content>
    </SideSection>
  );
};
