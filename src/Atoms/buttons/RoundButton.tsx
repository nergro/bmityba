import React, { FC } from 'react';
import styled from 'styled-components/macro';

interface Props {
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  children: string;
}

const RoundButtonBase: FC<Props> = ({ children, ...rest }) => {
  return <button {...rest}>{children}</button>;
};

export const RoundButton = styled(RoundButtonBase)`
  width: 160px;
  height: 50px;
  border: none;
  border-radius: 99px;
  font-size: 16px;
  font-weight: 700;
  font-family: ${props => props.theme.fontFamily.Main};
  box-shadow: 0 20px 30px 0 rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  color: ${props => props.theme.colors.accents.tertiary};
  background: ${props => props.theme.colors.background.primary};
  border: 3px solid ${props => props.theme.colors.accents.tertiary};

  &:hover {
    color: ${props => props.theme.colors.button.filled.hover.textColor};
    background: ${props => props.theme.colors.accents.tertiary};
  }
`;
