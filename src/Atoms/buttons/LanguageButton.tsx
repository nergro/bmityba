import React, { FC } from 'react';
import styled from 'styled-components/macro';

interface Props {
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  children: string;
}

const LanguageButtonBase: FC<Props> = ({ children, ...rest }) => {
  return <button {...rest}>{children}</button>;
};

export const LanguageButton = styled(LanguageButtonBase)`
  background: none;
  border: none;
  box-shadow: none;
  transition: all 0.1s ease-in;
  padding: 0;
  color: ${props => props.theme.colors.accents.secondary};
  font-size: 20px;
  cursor: pointer;
  font-family: ${props => props.theme.fontFamily.Main};
  font-weight: 600;
  &:hover {
    color: ${props => props.theme.colors.accents.primary};
  }

  &:disabled {
    color: ${props => props.theme.colors.text.disabled};
    cursor: unset;
  }
`;
