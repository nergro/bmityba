import React, { FC } from 'react';
import styled from 'styled-components/macro';

interface Props {
  className?: string;
}

const Button: FC<Props> = ({ className, children }) => {
  return <button className={className}>{children}</button>;
};

const ButtonBase = styled(Button)`
  width: 160px;
  height: 50px;
  border: none;
  border-radius: 30px;
  font-size: 16px;
  font-weight: 700;
  font-family: ${props => props.theme.fontFamily.Lato}
  box-shadow: 0 20px 30px 0 rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: all 0.3s ease-in-out;
`;

export const ActionButton = styled(ButtonBase)`
  color: ${props => props.theme.colors.button.main.default.textColor};
  background: ${props => props.theme.colors.button.main.default.backgroundColor};

  &:hover {
    color: ${props => props.theme.colors.button.main.hover.textColor};
  }
`;

export const PrimaryButton = styled(ButtonBase)`
  color: ${props => props.theme.colors.button.filled.default.textColor};
  background: ${props => props.theme.colors.button.filled.default.backgroundColor};

  &:hover {
    color: ${props => props.theme.colors.button.filled.hover.textColor};
    background: ${props => props.theme.colors.button.filled.hover.backgroundColor};
  }
`;

export const SecondaryButton = styled(ButtonBase)`
  color: ${props => props.theme.colors.button.filled.hover.textColor};
  background: ${props => props.theme.colors.button.filled.hover.backgroundColor};

  &:hover {
    color: ${props => props.theme.colors.button.filled.default.textColor};
    background: ${props => props.theme.colors.button.filled.default.backgroundColor};
  }
`;
