import { SearchInput } from 'Atoms/Input/SearchInput';
import { PageLayout } from 'layouts/PageLayout';
import { Categories } from 'Organisms/blogSections/Categories';
import { LatestNews } from 'Organisms/blogSections/LatestNews';
import React, { ChangeEvent, FC } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components/macro';

const Container = styled.div`
  display: flex;
`;

const Aside = styled.aside`
  width: 30%;
  background: ${props => props.theme.colors.aside};
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    display: none;
  }
`;

const AsideContent = styled.div`
  max-width: 350px;
  display: flex;
  flex-direction: column;
  padding: 20px 30px;
`;

const StyledSearchInput = styled(SearchInput)`
  width: 100%;
  max-width: 250px;
  min-width: 175px;
  height: 50px;
`;

const Content = styled.div`
  position: relative;
  width: 50%;
  margin: 0 50px 0 auto;
  padding: 80px 0;
  @media (max-width: ${props => props.theme.breakpoints.m}) {
    width: 60%;
  }
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    width: 90%;
    margin-right: auto;
  }
`;

interface Props {
  title?: string;
  onSearchChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const BlogLayout: FC<Props> = ({ children, title, onSearchChange }) => {
  const { t } = useTranslation();

  return (
    <PageLayout title={title || t('Blog')}>
      <Container>
        <Content>{children}</Content>
        <Aside>
          <AsideContent>
            {onSearchChange && <StyledSearchInput onChange={onSearchChange} />}
            <LatestNews />
            <Categories />
          </AsideContent>
        </Aside>
      </Container>
    </PageLayout>
  );
};
