import { Link as AnimatedLink } from 'Atoms/links/AnimatedLink';
import { Link } from 'Atoms/links/Link';
import { H1, P } from 'Atoms/text';
import React, { FC } from 'react';
import styled from 'styled-components/macro';
import { Post as PostInfo } from 'types/blog';

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 10px 0 rgba(43, 52, 59, 0.1);
`;

const Image = styled.img`
  max-width: 100%;
  max-height: 500px;
  transition: all 0.5s ease-in-out 0s;
  display: block;
  width: 100%;
  height: auto;
`;

const ImageBox = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;

  &:hover {
    ${Image} {
      transform: scale3d(1.05, 1.05, 1.05);
    }
  }
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 40px;
`;

const Title = styled(H1)`
  text-align: left;
  margin: 20px 0;
  font-size: 28px;
  margin: 10px 0 0;
  transition: all 0.2s ease-out;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  &:hover {
    ${Title} {
      color: ${props => props.theme.colors.accents.primary};
    }
  }
`;

const Description = styled(P)`
  margin: 15px 0;
  text-align: left;
  line-height: 26px;
`;

const StyledAnimatedLink = styled(AnimatedLink)`
  align-self: flex-start;
  margin-top: 20px;
  @media (max-width: ${props => props.theme.breakpoints.l}) {
    margin-top: 5px;
  }
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    align-self: center;
  }
`;

interface Props {
  className?: string;
  post: PostInfo;
}

export const Post: FC<Props> = ({ className, post }) => {
  return (
    <Container className={className}>
      <ImageBox>
        <Image src={post.image} />
      </ImageBox>
      <Info>
        <StyledLink to="/">
          <Title font="Prata" color="secondaryAccent">
            {post.title}
          </Title>
        </StyledLink>
        <Description font="Lato" color="light">
          {post.description}
        </Description>
        <StyledAnimatedLink to="#">Read more</StyledAnimatedLink>
      </Info>
    </Container>
  );
};
