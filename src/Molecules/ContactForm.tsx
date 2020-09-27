import { sendMail } from 'apiServices/mail/mail';
import { PrimaryButtonFilled } from 'Atoms/buttons/ActionButton';
import { Input, TextArea } from 'Atoms/Input/Input';
import { InlineLoader } from 'Atoms/loaders/InlineLoader';
import { P } from 'Atoms/text';
import React, { FC, MouseEvent, useState } from 'react';
import { useTranslation } from 'react-i18next';
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

const Error = styled(P)`
  align-self: center;
  margin: 10px 0 0;
`;

const ButtonWrapper = styled.div`
  align-self: center;
  margin: 30px 0;
`;

interface Props {
  className?: string;
}

type InputType = 'name' | 'email' | 'subject' | 'message';

type FormData = Record<InputType, string>;

export const ContactForm: FC<Props> = ({ className }) => {
  const { t } = useTranslation();
  const [loading, setLoading] = useState<boolean>(false);
  const [messageSent, setMessageSent] = useState<boolean>(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [hasError, setHasError] = useState<boolean>(false);

  const onChangeInput = (type: InputType, value?: string): void => {
    if (value) {
      setFormData({
        ...formData,
        [type]: value,
      });
    }
  };

  const onSubmit = async (e: MouseEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setHasError(true);
    }
    setLoading(true);
    try {
      await sendMail(formData.name, formData.email, formData.message, formData.subject);
      setLoading(false);
      setMessageSent(true);
    } catch (error) {
      setLoading(false);
      setMessageSent(false);
      setHasError(true);
    }
  };

  return (
    <Box className={className}>
      <BoxTitle font="Roboto" weight="400" color="secondaryAccent">
        {t('Make an Appointment')}
      </BoxTitle>
      <Form onSubmit={onSubmit}>
        <Inputs>
          <InputsLeft>
            <StyledInput
              placeholder={t('Name')}
              required
              onChange={event => onChangeInput('name', event.target.value)}
            />
            <StyledInput
              placeholder={t('Email')}
              type="email"
              required
              onChange={event => onChangeInput('email', event.target.value)}
            />
            <StyledInput
              placeholder={t('Subject')}
              onChange={event => onChangeInput('subject', event.target.value)}
            />
          </InputsLeft>
          <InputsRight>
            <StyledTextArea
              placeholder={t('Message')}
              required
              onChange={event => onChangeInput('message', event.target.value)}
            />
          </InputsRight>
        </Inputs>
        {hasError && (
          <Error color="error">{t('Error. Check if all fields were filled correctly.')}</Error>
        )}
        <ButtonWrapper>
          {loading ? (
            <InlineLoader />
          ) : messageSent ? (
            <P size="intermedium" weight="500">
              {t('Thank You!')}
            </P>
          ) : (
            <PrimaryButtonFilled type="submit">{t('Submit')}</PrimaryButtonFilled>
          )}
        </ButtonWrapper>
      </Form>
    </Box>
  );
};
