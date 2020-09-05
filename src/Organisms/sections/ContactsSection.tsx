import { P } from 'Atoms/text';
import { ContactForm } from 'Molecules/ContactForm';
import { QuestionToggle } from 'Molecules/QuestionToggle';
import React, { FC } from 'react';
import styled from 'styled-components/macro';

const Container = styled.div`
  width: 82%;
  margin: 100px auto 0;
  display: flex;
  @media (max-width: ${props => props.theme.breakpoints.l}) {
    width: 100%;
    padding-left: 20px;
    padding-right: 20px;
  }
  @media (max-width: ${props => props.theme.breakpoints.m}) {
    flex-direction: column;
    padding: 0;
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

const Title = styled(P)`
  text-align: center;
  font-size: 36px;
  @media (max-width: ${props => props.theme.breakpoints.l}) {
    font-size: 30px;
  }
`;

const Questions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

const Question = styled(QuestionToggle)`
  width: 80%;
  &:not(:last-child) {
    margin-bottom: 30px;
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
        <Title font="Roboto" weight="400" color="secondaryAccent">
          Frequently Asked Questions
        </Title>
        <Questions>
          <Question
            question="How to start a food blog?"
            answer="We’ve been fortunate enough to run a food blog business for 3+ years fully employing two people. Even if self-employment isn’t your dream, we’ve learned a lot through our journey and think we can offer some killer advice to help you along the way, too."
          />
          <Question
            question="How to make a dynamic logo for your food blog"
            answer="Next, you need to make your site look good. Thankfully, adding a theme makes this a snap. A framework + child theme setup is ideal (for reasons of security, seo, efficiency, etc.) and how we have our site currently setup."
          />
          <Question
            question="How to start a food blog?"
            answer="We’ve been fortunate enough to run a food blog business for 3+ years fully employing two people. Even if self-employment isn’t your dream, we’ve learned a lot through our journey and think we can offer some killer advice to help you along the way, too."
          />
          <Question
            question="How to start a food blog?"
            answer="We’ve been fortunate enough to run a food blog business for 3+ years fully employing two people. Even if self-employment isn’t your dream, we’ve learned a lot through our journey and think we can offer some killer advice to help you along the way, too."
          />
        </Questions>
      </LeftSection>
      <RightSection>
        <StyledContactForm />
      </RightSection>
    </Container>
  );
};
