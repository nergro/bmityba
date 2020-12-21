import styled, { css } from 'styled-components/macro';

const InputCSS = css<Props>`
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

interface Props {
  className?: string;
  placeholder: string;
  hasError?: boolean;
  required?: boolean;
}

export const Input = styled.input`
  ${InputCSS};
  height: 55px;
  padding: 10px 10px 10px 20px;
`;

export const TextArea = styled.textarea`
  ${InputCSS};
  height: 100%;
  resize: none;
  padding: 20px 10px 10px 20px;
`;
