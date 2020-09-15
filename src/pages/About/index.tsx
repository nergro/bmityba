import { PageLayout } from 'layouts/PageLayout';
import React, { FC } from 'react';
import styled from 'styled-components/macro';

const Container = styled.div``;

export const About: FC = () => {
  return (
    <PageLayout title="About">
      <Container>About</Container>
    </PageLayout>
  );
};
