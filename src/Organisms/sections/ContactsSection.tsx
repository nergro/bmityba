import { ContactForm } from 'Molecules/ContactForm';
import { Questions } from 'Molecules/Questions';
import React, { FC } from 'react';
import styled from 'styled-components/macro';

const Container = styled.div`
  width: 82%;
  margin: 80px auto 0;
  display: flex;
  @media (max-width: ${props => props.theme.breakpoints.l}) {
    width: 100%;
    padding-left: 20px;
    padding-right: 20px;
  }
  @media (max-width: ${props => props.theme.breakpoints.m}) {
    flex-direction: column;
    padding: 0;
    margin-top: 20px;
  }
`;

const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  @media (max-width: ${props => props.theme.breakpoints.l}) {
    width: 40%;
    margin-right: 20px;
  }
  @media (max-width: ${props => props.theme.breakpoints.m}) {
    width: 100%;
    margin-bottom: 50px;
  }
`;

const RightSection = styled.div`
  display: flex;
  justify-content: center;
  width: 50%;
  @media (max-width: ${props => props.theme.breakpoints.l}) {
    width: 60%;
  }
  @media (max-width: ${props => props.theme.breakpoints.m}) {
    width: 100%;
  }
`;

const StyledContactForm = styled(ContactForm)`
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    margin: 0 20px;
  }
`;

export const ContactsSection: FC = () => {
  return (
    <Container>
      <LeftSection>
        <Questions count={4} />
      </LeftSection>
      <RightSection>
        <StyledContactForm />
      </RightSection>
    </Container>
  );
};
