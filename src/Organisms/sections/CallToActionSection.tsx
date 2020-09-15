import callActionImage from 'assets/callToAction.jpg';
import { PrimaryButton } from 'Atoms/buttons/ActionButton';
import { H1 } from 'Atoms/text';
import React, { FC } from 'react';
import styled from 'styled-components/macro';

const Container = styled.div`
  margin: 50px 0 100px;
  min-height: 190px;
  background: url(${callActionImage});
  background-size: cover;

  @media (max-width: ${props => props.theme.breakpoints.m}) {
    margin-top: 0;
  }
`;

const Content = styled.div`
  padding: 20px;
  height: 100%;
  width: 100%;
  background: rgba(17, 24, 30, 0.81);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: ${props => props.theme.breakpoints.m}) {
    flex-direction: row;
  }

  @media (max-width: ${props => props.theme.breakpoints.s}) {
    flex-direction: column;
  }
`;

const Title = styled(H1)`
  text-align: center;
  && {
    font-size: 36px;
    margin: 20px 0;
    @media (max-width: ${props => props.theme.breakpoints.m}) {
      margin-right: 20px;
      font-size: 25px;
    }
    @media (max-width: ${props => props.theme.breakpoints.s}) {
      margin-right: 0;
    }
  }
`;

export const CallToActionSection: FC = () => {
  return (
    <Container>
      <Content>
        <Title color="secondary" font="Prata">
          Ready to get started? Book a consultation
        </Title>
        <PrimaryButton onClick={() => console.log('Contact')}>Contact me</PrimaryButton>
      </Content>
    </Container>
  );
};
