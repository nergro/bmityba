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
`;

const BoxTitle = styled(P)`
  font-size: 28px;
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
`;

const Inputs = styled.div`
  display: flex;
  justify-content: center;
`;

const InputsLeft = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
`;

const InputsRight = styled.div``;

const StyledInput = styled(Input)`
  width: 240px;
  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;

const StyledTextArea = styled(TextArea)``;

const StyledButton = styled(PrimaryButton)`
  align-self: center;
  margin-top: 30px;
`;

interface Props {
  className?: string;
}

export const ContactForm: FC<Props> = () => {
  return (
    <Box>
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
