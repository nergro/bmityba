import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import { getLocale } from 'services/localStorage';
import { usePostCategories } from 'store/postCategories/hooks';
import { usePosts } from 'store/postsStore/hooks';
import styled from 'styled-components/macro';
import { Post } from 'types/post';
import { PostCategory } from 'types/postCategory';

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

const CategoryButton = styled.button`
  color: ${props => props.theme.colors.accents.secondary};
  font-family: ${props => props.theme.fontFamily.Main};
  &:hover,
  &:focus {
    color: ${props => props.theme.colors.accents.primary};
  }
  font-weight: 700;
  font-size: 16px;
  background: none;
  border: none;
  cursor: pointer;
`;

interface CategoryInfo {
  id: string;
  title: string;
  postsCount: number;
}

const getCategoryInfo = (category: PostCategory, posts: Post[], isLT: boolean): CategoryInfo => ({
  id: category.id,
  title: isLT ? category.nameLT : category.nameEN,
  postsCount:
    category.id === 'all' ? posts.length : posts.filter(x => x.category.id === category.id).length,
});

interface Props {
  className?: string;
}

export const Categories: FC<Props> = ({ className }) => {
  const { push } = useHistory();

  const { t } = useTranslation();
  const categories = usePostCategories();
  const posts = usePosts();

  if (categories.length === 0) {
    return null;
  }

  const locale = getLocale();
  const isLT = locale === 'lt';

  const mappedCategories = [...categories, { id: 'all', nameLT: 'Visi', nameEN: 'All' }]
    .map(x => getCategoryInfo(x, posts, isLT))
    .filter(x => x.postsCount !== 0);

  return (
    <SideSection title={t(`Categories`)} className={className}>
      <Content>
        {mappedCategories.map(x => (
          <Row key={x.id}>
            <Line />
            <CategoryButton
              onClick={() => push({ pathname: '/blog', state: { categoryId: x.id } })}
            >
              {x.title} ({x.postsCount})
            </CategoryButton>
          </Row>
        ))}
      </Content>
    </SideSection>
  );
};
