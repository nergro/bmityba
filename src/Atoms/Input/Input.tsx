import React, { FC } from 'react';
import styled, { css } from 'styled-components/macro';

const InputBase = css<Props>`
  width: 100%;
  outline: none;
  border: 1px solid
    ${props => (props.hasError ? props.theme.colors.input.error : props.theme.colors.input.border)};
  background: ${props => props.theme.colors.input.background};
  color: ${props => props.theme.colors.input.text};
  font: ${props => props.theme.fonts.normalText};

  &::placeholder {
    color: ${props => props.theme.colors.input.placeholder};
  }
  &:focus {
    border: 1px solid
      ${props =>
        props.hasError ? props.theme.colors.input.error : props.theme.colors.input.borderFocus};
  }
`;

const StyledInput = styled.input`
  ${InputBase};
  height: 55px;
  padding: 10px 10px 10px 20px;
`;

interface Props {
  className?: string;
  placeholder: string;
  onChange?: () => void;
  hasError?: boolean;
  required?: boolean;
}

interface InputProps extends Props {
  type?: 'text' | 'email';
}

export const Input: FC<InputProps> = ({ type = 'text', ...rest }) => {
  return <StyledInput type={type} {...rest} />;
};

const StyledTextArea = styled.textarea`
  ${InputBase};
  height: 100%;
  resize: none;
  padding: 20px 10px 10px 20px;
`;

export const TextArea: FC<Props> = ({ ...props }) => {
  return <StyledTextArea {...props} />;
};
