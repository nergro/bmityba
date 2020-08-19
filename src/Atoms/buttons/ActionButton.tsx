import React, { FC } from 'react';
import styled from 'styled-components/macro';

interface Props {
  className?: string;
}

const Button: FC<Props> = ({ className, children }) => {
  return <button className={className}>{children}</button>;
};

export const ActionButton = styled(Button)`
  width: 270px;
  height: 60px;
  color: ${props => props.theme.colors.button.default.textColor};
  background: ${props => props.theme.colors.button.default.backgroundColor};
  border: none;
  border-radius: 30px;
  font: ${props => props.theme.fonts.mediumTextBold};
  box-shadow: 0 20px 30px 0 rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    color: ${props => props.theme.colors.button.hover.textColor};
  }
`;
