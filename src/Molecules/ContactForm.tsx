import { PrimaryButton } from 'Atoms/buttons/ActionButton';
import { Input, TextArea } from 'Atoms/Input';
import { P } from 'Atoms/text';
import React, { FC } from 'react';
import styled from 'styled-components/macro';

const Box = styled.div`
  border: 5px solid #f0f0f0;
  width: 600px;
  height: 450px;
  padding: 35px 15px 0 15px;

  @media (max-width: ${props => props.theme.breakpoints.s}) {
    height: 100%;
    width: 100%;
  }
`;

const BoxTitle = styled(P)`
  font-size: 28px;
  text-align: center;
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    font-size: 24px;
  }
  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    font-size: 22px;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
`;

const Inputs = styled.div`
  display: flex;
  justify-content: center;
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    flex-direction: column;
  }
`;

const InputsLeft = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    width: 100%;
  }
`;

const InputsRight = styled.div`
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    margin-top: 20px;
  }
`;

const StyledInput = styled(Input)`
  width: 240px;
  &:not(:last-child) {
    margin-bottom: 20px;
  }
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    width: 100%;
  }
`;

const StyledTextArea = styled(TextArea)`
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    height: 150px;
  }
`;

const StyledButton = styled(PrimaryButton)`
  align-self: center;
  margin: 30px 0;
`;

interface Props {
  className?: string;
}

export const ContactForm: FC<Props> = ({ className }) => {
  return (
    <Box className={className}>
      <BoxTitle font="Roboto" weight="400" color="secondaryAccent">
        Make an Appointment
      </BoxTitle>
      <Form>
        <Inputs>
          <InputsLeft>
            <StyledInput placeholder="Name" required />
            <StyledInput placeholder="Email" type="email" required />
            <StyledInput placeholder="Subject" />
          </InputsLeft>
          <InputsRight>
            <StyledTextArea placeholder="Message" required />
          </InputsRight>
        </Inputs>

        <StyledButton type="submit">Submit</StyledButton>
      </Form>
    </Box>
  );
};
