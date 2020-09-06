import { H3 } from 'Atoms/text';
import React, { FC } from 'react';
import styled from 'styled-components/macro';

const Container = styled.div`
  margin-top: 30px;
`;

const Title = styled(H3)`
  border-bottom: 2px solid #f1f1f1;
  display: block;
  padding-bottom: 5px;
  position: relative;
  margin-bottom: 32px;
  font-size: 21px;
  line-height: 31px;
  text-align: left;

  &:after {
    display: block;
    height: 2px;
    margin-top: 0;
    margin-bottom: -2px;
    content: '';
    position: absolute;
    bottom: 0;
    left: 1px;
    width: 60px;
    background: #9dca00;
  }
`;

const Content = styled.div``;

interface Props {
  className?: string;
  title: string;
}

export const SideSection: FC<Props> = ({ className, title, children }) => {
  return (
    <Container className={className}>
      <Title font="Prata">{title}</Title>
      <Content>{children}</Content>
    </Container>
  );
};
