import { P } from 'Atoms/text';
import { DateField } from 'Molecules/DateField';
import React, { FC } from 'react';
import { useHistory } from 'react-router-dom';
import { getLocale } from 'services/localStorage';
import styled from 'styled-components/macro';
import { Post } from 'types/post';

const Wrapper = styled.button`
  display: flex;
  background: none;
  border: none;
  cursor: pointer;
  outline: none;
`;

const Image = styled.img`
  width: 70px;
  height: 70px;
  margin-right: 20px;
  object-fit: cover;
  @media (max-width: ${props => props.theme.breakpoints.m}) {
    display: none;
  }
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    display: block;
  }
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled(P)`
  margin-top: 10px;
  align-self: flex-start;
`;

interface Props {
  className?: string;
  post: Post;
}

export const LatestPost: FC<Props> = ({ className, post }) => {
  const { push } = useHistory();
  const locale = getLocale();
  const isLT = locale === 'lt';

  return (
    <Wrapper className={className} onClick={() => push(`/blog/${post.id}`)}>
      <Image src={post.image.imageUrl} />
      <Info>
        <DateField date={post.date} />
        <Title>{isLT ? post.titleLT : post.titleEN}</Title>
      </Info>
    </Wrapper>
  );
};
