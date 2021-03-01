import { Link } from 'Atoms/links/AnimatedLink';
import { P, Span } from 'Atoms/text';
import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components/macro';

const Image = styled.img`
  width: 100%;
  height: 45%;
  @media (max-width: ${(props) => props.theme.breakpoints.s}) {
    width: 35%;
    height: 100%;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    width: 100%;
    height: 48%;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
  padding: 10%;
  @media (max-width: ${(props) => props.theme.breakpoints.l}) {
    padding: 6% 8%;
  }
`;

const Title = styled(P)`
  transition: all 0.2s ease-in-out;
  && {
    font-size: 28px;
    margin-bottom: 10px;

    @media (max-width: ${(props) => props.theme.breakpoints.l}) {
      font-size: 23px;
    }
    @media (max-width: ${(props) => props.theme.breakpoints.m}) {
      font-weight: 600;
      margin-bottom: 20px;
    }
  }
`;

const Subtitle = styled(P)`
  && {
    font-size: 24px;
    @media (max-width: ${(props) => props.theme.breakpoints.l}) {
      margin: 5px 0;
      font-size: 21px;
    }
  }
  @media (max-width: ${(props) => props.theme.breakpoints.m}) {
    display: none;
  }
`;

const Description = styled(P)`
  margin-top: 20px;
  line-height: 25px;
  flex-grow: 1;
  @media (max-width: ${(props) => props.theme.breakpoints.l}) {
    margin-top: 5px;
    line-height: 20px;
  }
`;

const StyledLink = styled(Link)`
  margin-top: 20px;
  @media (max-width: ${(props) => props.theme.breakpoints.l}) {
    margin-top: 5px;
  }
`;

const Container = styled.button`
  width: 400px;
  height: 100%;
  background: ${(props) => props.theme.colors.background.primary};
  box-shadow: 0px 0px 8px 1px rgba(0, 0, 0, 0.25);
  border: none;
  display: flex;
  flex-direction: column;
  padding: 0;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  outline: none;
  position: relative;
  padding-bottom: 55px;

  &:hover {
    ${Title} {
      color: ${(props) => props.theme.colors.text.primaryAccent};
    }
    ${StyledLink} {
      color: ${(props) => props.theme.colors.accents.primary};
    }
    ${StyledLink}:after {
      box-shadow: inset 160px 0 0 0 ${(props) => props.theme.colors.accents.primary};
    }
  }

  @media (max-width: ${(props) => props.theme.breakpoints.l}) {
    width: 300px;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.s}) {
    flex-direction: row;
    height: unset;
    width: 100%;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    flex-direction: column;
    height: 600px;
  }
`;

const From = styled(Span)`
  font-size: 40px;
  margin-right: 3px;

  @media (max-width: ${(props) => props.theme.breakpoints.s}) {
    font-size: 35px;
  }
`;

const Price = styled(P)`
  position: absolute;
  bottom: 0;
  text-align: center;
  width: 100%;
  font-size: 43px;
  padding: 18px 0 10px;
  @media (max-width: ${(props) => props.theme.breakpoints.s}) {
    font-size: 35px;
    width: 97%;
    text-align: right;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    width: 97%;
    text-align: center;
  }
`;

interface Props {
  className?: string;
  image: string;
  title: string;
  subtitle?: string;
  description: string;
  to: string;
  price: number;
}

export const Service: FC<Props> = ({
  className,
  description,
  image,
  subtitle,
  title,
  to,
  price,
}) => {
  const { push } = useHistory();
  const { t } = useTranslation();

  return (
    <Container className={className} onClick={() => push(to)}>
      <Image src={image} alt={title} />
      <Content>
        <Title color="inactive">{title}</Title>
        {subtitle && (
          <Subtitle font="Caveat" color="special">
            {subtitle}
          </Subtitle>
        )}
        <Description color="inactive">{description}</Description>
        <StyledLink to="#">{t('Learn more')}</StyledLink>
      </Content>
      <Price color="tertiaryAccent" font="Oregano">
        <From color="tertiaryAccent" font="Oregano">
          {t('From')}
        </From>{' '}
        €{price}
      </Price>
    </Container>
  );
};
