import { Link as AnimatedLink } from 'Atoms/links/AnimatedLink';
import { Link } from 'Atoms/links/Link';
import { PostImage } from 'Atoms/PostImage';
import { H1, P } from 'Atoms/text';
import { DateField } from 'Molecules/DateField';
import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { getLocale } from 'services/localStorage';
import styled from 'styled-components/macro';
import { Post as PostInfo } from 'types/post';

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 10px 0 rgba(43, 52, 59, 0.1);
`;

const StyledImage = styled(PostImage)`
  max-height: 500px;
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
      color: ${(props) => props.theme.colors.accents.primary};
    }
  }
`;

const Description = styled(P)`
  margin: 15px 0;
  text-align: left;
  line-height: 26px;
`;

const StyledAnimatedLink = styled(AnimatedLink)`
  align-self: flex-end;
  margin-top: 20px;
  @media (max-width: ${(props) => props.theme.breakpoints.l}) {
    margin-top: 5px;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.s}) {
    align-self: center;
  }
`;

const StyledDateField = styled(DateField)`
  align-self: flex-end;
`;

interface Props {
  className?: string;
  post: PostInfo;
}

export const Post: FC<Props> = ({ className, post }) => {
  const { t } = useTranslation();

  const locale = getLocale();
  const isLT = locale === 'lt';

  return (
    <Container className={className}>
      <StyledImage imageUrl={post.image.imageUrl} alt={post.titleLT} />
      <Info>
        <StyledDateField date={post.date} />
        <StyledLink to={`/blogas/${post.id.pretty}`}>
          <Title font="Spectral" color="secondaryAccent">
            {isLT ? post.titleLT : post.titleEN}
          </Title>
        </StyledLink>
        <Description color="light">
          {isLT ? post.shortDescriptionLT : post.shortDescriptionEN}
        </Description>
        <StyledAnimatedLink to={`/blogas/${post.id.pretty}`}>{t('Read more')}</StyledAnimatedLink>
      </Info>
    </Container>
  );
};
