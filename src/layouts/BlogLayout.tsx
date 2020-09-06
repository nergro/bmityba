import { SearchInput } from 'Atoms/Input/SearchInput';
import { PageLayout } from 'layouts/PageLayout';
import { Categories } from 'Organisms/blogSections/Categories';
import { InstagramPosts } from 'Organisms/blogSections/InstagramPosts';
import { LatestNews } from 'Organisms/blogSections/LatestNews';
import React, { FC } from 'react';
import styled from 'styled-components/macro';

const Container = styled.div`
  display: flex;
`;

const Aside = styled.aside`
  width: 30%;
  background: #f8f9fa;
`;

const AsideContent = styled.div`
  max-width: 350px;
  display: flex;
  flex-direction: column;
  padding: 20px 30px;
`;

const StyledSearchInput = styled(SearchInput)`
  width: 250px;
  height: 50px;
`;

const Content = styled.div`
  width: 70%;
`;

export const BlogLayout: FC = ({ children }) => {
  return (
    <PageLayout title="Blog">
      <Container>
        <Content>{children}</Content>
        <Aside>
          <AsideContent>
            <StyledSearchInput />
            <LatestNews />
            <Categories />
            <InstagramPosts />
          </AsideContent>
        </Aside>
      </Container>
    </PageLayout>
  );
};
