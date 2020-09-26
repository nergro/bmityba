import { Link } from 'Atoms/links/AnimatedLink';
import { P } from 'Atoms/text';
import React, { FC } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components/macro';

const Image = styled.img`
  width: 100%;
  height: 45%;
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    width: 35%;
    height: 100%;
  }

  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    width: 100%;
    height: 48%;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  padding: 10%;
  @media (max-width: ${props => props.theme.breakpoints.l}) {
    padding: 6% 8%;
  }
`;

const Title = styled(P)`
  transition: all 0.2s ease-in-out;
  && {
    font-size: 30px;
    @media (max-width: ${props => props.theme.breakpoints.l}) {
      font-size: 22px;
    }
    @media (max-width: ${props => props.theme.breakpoints.m}) {
      margin-bottom: 10px;
      font-weight: 600;
    }
  }
`;

const Subtitle = styled(P)`
  && {
    font-size: 24px;
    @media (max-width: ${props => props.theme.breakpoints.l}) {
      margin: 5px 0;
      font-size: 19px;
    }
  }
  @media (max-width: ${props => props.theme.breakpoints.m}) {
    display: none;
  }
`;

const Description = styled(P)`
  margin-top: 20px;
  line-height: 25px;
  @media (max-width: ${props => props.theme.breakpoints.l}) {
    margin-top: 5px;
    line-height: 20px;
  }
`;

const StyledLink = styled(Link)`
  margin-top: 20px;
  @media (max-width: ${props => props.theme.breakpoints.l}) {
    margin-top: 5px;
  }
`;

const Container = styled.button`
  width: 400px;
  height: 600px;
  background: ${props => props.theme.colors.background.primary};
  box-shadow: 0px 0px 8px 1px rgba(0, 0, 0, 0.25);
  border: none;
  display: flex;
  flex-direction: column;
  padding: 0;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    ${Title} {
      color: ${props => props.theme.colors.text.primaryAccent};
    }
    ${StyledLink} {
      color: ${props => props.theme.colors.accents.primary};
    }
    ${StyledLink}:after {
      box-shadow: inset 100px 0 0 0 ${props => props.theme.colors.accents.primary};
    }
  }

  @media (max-width: ${props => props.theme.breakpoints.l}) {
    width: 300px;
    height: 400px;
  }

  @media (max-width: ${props => props.theme.breakpoints.s}) {
    flex-direction: row;
    height: unset;
    width: 100%;
  }

  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    flex-direction: column;
    height: 380px;
  }
`;

interface Props {
  className?: string;
  image: string;
  title: string;
  subtitle?: string;
  description: string;
  to: string;
}

export const Service: FC<Props> = ({ className, description, image, subtitle, title, to }) => {
  const { push } = useHistory();

  return (
    <Container className={className} onClick={() => push(to)}>
      <Image src={image} />
      <Content>
        <Title color="inactive">{title}</Title>
        {subtitle && (
          <Subtitle font="Caveat" color="special">
            {subtitle}
          </Subtitle>
        )}
        <Description color="inactive">{description}</Description>
        <StyledLink to="#">Learn more</StyledLink>
      </Content>
    </Container>
  );
};
