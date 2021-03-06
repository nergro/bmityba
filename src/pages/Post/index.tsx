import { MainLoader } from 'Atoms/loaders/MainLoader';
import { PostImage } from 'Atoms/PostImage';
import { H1 } from 'Atoms/text';
import { BlogLayout } from 'layouts/BlogLayout';
import { DateField } from 'Molecules/DateField';
import moment from 'moment';
import React, { FC } from 'react';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import { RouteComponentProps } from 'react-router-dom';
import { getLocale } from 'services/localStorage';
import { usePostsResource } from 'store/postsStore/hooks';
import { isLoading } from 'store/types';
import styled from 'styled-components/macro';

const Title = styled(H1)`
  text-align: center;
  font-size: 35px;
  margin: 50px 0 30px;
  padding: 0 20px;
  @media (max-width: ${(props) => props.theme.breakpoints.l}) {
    font-size: 26px;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.m}) {
    font-size: 22px;
  }
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  @media (max-width: ${(props) => props.theme.breakpoints.s}) {
    margin-top: -50px;
  }
`;

const StyledImage = styled(PostImage)`
  max-height: 500px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 40px 50px;
  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    padding: 0 0 50px;
  }
`;

const StyledLoader = styled(MainLoader)`
  top: 100px;
`;

const StyledDateField = styled(DateField)`
  align-self: flex-end;
  margin: 0 20px 20px 0;
`;

const Post: FC<RouteComponentProps<{ id: string }>> = ({ match }) => {
  const { t } = useTranslation();

  const posts = usePostsResource();

  if (isLoading(posts)) {
    return (
      <BlogLayout title={`${t('Loading')}...`}>
        <StyledLoader />
      </BlogLayout>
    );
  }

  const post = posts.find((x) => x.id.pretty === match.params.id);

  if (!post) {
    return (
      <BlogLayout>
        <Title>{t('Post not found')}</Title>
      </BlogLayout>
    );
  }

  const locale = getLocale();
  const isLT = locale === 'lt';

  return (
    <BlogLayout>
      <Helmet>
        <meta name="description" content={post.shortDescriptionLT} />
        <title>{post.titleLT}</title>

        <script type="application/ld+json">{`
        {
          "@context": "https://schema.org/",
          "@type": "Post",
          "name": "${post.titleLT}",
          "author": {
            "@type": "Person",
            "name": "Brigita Meiglaitė"
          },
          "datePublished": "${moment(post.date).format('YYYY-MM-DD')}",
          "description": "${post.shortDescriptionLT}",
          "prepTime": "PT20M"
        }
    `}</script>
      </Helmet>
      <Container>
        <StyledImage imageUrl={post.image.imageUrl} alt={post.titleLT} />

        <Title font="Spectral">{isLT ? post.titleLT : post.titleEN}</Title>
        <Content>
          <div dangerouslySetInnerHTML={{ __html: isLT ? post.contentLT : post.contentEN }} />
        </Content>
        <StyledDateField date={post.date} />
      </Container>
    </BlogLayout>
  );
};

export default Post;
