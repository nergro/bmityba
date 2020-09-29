import { PostImage } from 'Atoms/PostImage';
import { H1, P } from 'Atoms/text';
import { BlogLayout } from 'layouts/BlogLayout';
import React, { FC } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { latestPosts } from 'services/posts';
import { usePosts } from 'store/postsStore/hooks';
import styled from 'styled-components/macro';

const Title = styled(H1)`
  text-align: center;
  font-size: 35px;
  margin: 50px 0 30px;
  padding: 0 20px;
  @media (max-width: ${props => props.theme.breakpoints.l}) {
    font-size: 26px;
  }
  @media (max-width: ${props => props.theme.breakpoints.m}) {
    font-size: 22px;
  }
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 10px 0 rgba(43, 52, 59, 0.1);
  @media (max-width: ${props => props.theme.breakpoints.s}) {
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
`;

const Text = styled(P)`
  color: ${props => props.theme.colors.text.secondaryAccent};
  font-size: 18px;
  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;

export const Post: FC<RouteComponentProps<{ id: string }>> = ({ match }) => {
  const post = latestPosts.find(x => x.id === match.params.id);
  const posts = usePosts();

  console.log(posts);

  if (!post) {
    return (
      <BlogLayout>
        <p>Post not found</p>
      </BlogLayout>
    );
  }
  return (
    <BlogLayout>
      <Container>
        <StyledImage imageUrl={post.image} />
        <Title font="Spectral">{post.title}</Title>
        <Content>
          {posts.length > 0 && <div dangerouslySetInnerHTML={{ __html: posts[0].content }} />}
          {/* <Text>
            There are many variations of passages of Lorem Ipsum available, but the majority have
            suffered alteration in some form, by injected humour, or randomised words which don’t
            look even slightly believable. If you are going to use a passage.
          </Text>
          <Text>
            Donec ornare, est sed tincidunt placerat, sem mi suscipit mi, at varius enim Mauris
            ienim id purus ornare tincidunt. Aenean vel consequat riss. Proin viverra nisi at nisl
            imperdiet auctor. Donec ornare, esed tincidunt placerat sem mi suscipit mi, at varius
            enim sem at sem. Fuce tempus ex nibh, eget vlputate lgula ornare eget. Nunc facilisis
            erat at ligula blandit tempor. maecenas.
          </Text>
          <Text>
            Aenean vel consequat risus. Proin viverra nisiat nisllorem diet auctnec ornare, estsed
            tincunare tincidunt. dummy incidat, senibeget.t at ligula blandit tempor.
          </Text>
          <Text>
            Westsed tincidunare tincidunt. t risuAenean consequat risus. Proin viverra nisornare,
            tincidat, se.
          </Text>
          <Text>
            There are many variations of passages of Lorem Ipsum available, but the majority have
            suffered alteration in some form, by injected humour, or randomised words which don’t
            look even slightly believable. If you are going to use a passage.
          </Text>
          <Text>
            Donec ornare, est sed tincidunt placerat, sem mi suscipit mi, at varius enim Mauris
            ienim id purus ornare tincidunt. Aenean vel consequat riss. Proin viverra nisi at nisl
            imperdiet auctor. Donec ornare, esed tincidunt placerat sem mi suscipit mi, at varius
            enim sem at sem. Fuce tempus ex nibh, eget vlputate lgula ornare eget. Nunc facilisis
            erat at ligula blandit tempor. maecenas.
          </Text>
          <Text>
            Aenean vel consequat risus. Proin viverra nisiat nisllorem diet auctnec ornare, estsed
            tincunare tincidunt. dummy incidat, senibeget.t at ligula blandit tempor.
          </Text>
          <Text>
            Westsed tincidunare tincidunt. t risuAenean consequat risus. Proin viverra nisornare,
            tincidat, se.
          </Text>
          <Text>
            There are many variations of passages of Lorem Ipsum available, but the majority have
            suffered alteration in some form, by injected humour, or randomised words which don’t
            look even slightly believable. If you are going to use a passage.
          </Text>
          <Text>
            Donec ornare, est sed tincidunt placerat, sem mi suscipit mi, at varius enim Mauris
            ienim id purus ornare tincidunt. Aenean vel consequat riss. Proin viverra nisi at nisl
            imperdiet auctor. Donec ornare, esed tincidunt placerat sem mi suscipit mi, at varius
            enim sem at sem. Fuce tempus ex nibh, eget vlputate lgula ornare eget. Nunc facilisis
            erat at ligula blandit tempor. maecenas.
          </Text>
          <Text>
            Aenean vel consequat risus. Proin viverra nisiat nisllorem diet auctnec ornare, estsed
            tincunare tincidunt. dummy incidat, senibeget.t at ligula blandit tempor.
          </Text>
          <Text>
            Westsed tincidunare tincidunt. t risuAenean consequat risus. Proin viverra nisornare,
            tincidat, se.
          </Text> */}
        </Content>
      </Container>
    </BlogLayout>
  );
};
