import { ActionButtonFilled } from 'Atoms/buttons/ActionButton';
import { P } from 'Atoms/text';
import React, { FC } from 'react';
import styled from 'styled-components/macro';

const Image = styled.img`
  width: 100%;
  height: 45%;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  padding: 10%;
`;

const Title = styled(P)`
  transition: all 0.2s ease-in-out;
`;

const Subtitle = styled(P)``;

const Description = styled(P)`
  margin-top: 20px;
  line-height: 25px;
`;

const StyledButton = styled(ActionButtonFilled)`
  width: 150px;
  height: 45px;
  font: ${props => props.theme.fonts.normalTextBold};
  margin-top: 20px;
`;

const Container = styled.button`
  width: 400px;
  height: 600px;
  background: ${props => props.theme.colors.background.primary};
  box-shadow: 0px 0px 8px 1px rgba(0, 0, 0, 0.45);
  border: none;
  display: flex;
  flex-direction: column;
  padding: 0;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    ${Title} {
      color: ${props => props.theme.colors.text.tertiary};
    }
    ${StyledButton} {
      color: ${props => props.theme.colors.button.filled.hover.textColor};
      background: ${props => props.theme.colors.button.filled.hover.backgroundColor};
    }
  }
`;

interface Props {
  className?: string;
  image: string;
  title: string;
  subtitle: string;
  description: string;
}

export const Service: FC<Props> = ({ className, description, image, subtitle, title }) => {
  return (
    <Container className={className}>
      <Image src={image} />
      <Content>
        <Title size="big" color="inactive">
          {title}
        </Title>
        <Subtitle size="medium" font="Caveat" color="special">
          {subtitle}
        </Subtitle>
        <Description color="inactive">{description}</Description>
        <StyledButton>Learn more</StyledButton>
      </Content>
    </Container>
  );
};
