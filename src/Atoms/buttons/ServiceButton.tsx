import { ReactComponent as ArrowSvg } from 'assets/UI/arrowRight.svg';
import { Icon } from 'Atoms/Icon';
import { Span } from 'Atoms/text';
import React, { FC } from 'react';
import styled, { css } from 'styled-components/macro';

const StyledSpan = styled(Span)`
  transition: all 0.25s linear;
  flex-grow: 1;
  text-align: left;
`;

const StyledIcon = styled(Icon)`
  transition: all 0.25s linear;
  width: 15px;
  height: 15px;
  fill: ${props => props.theme.colors.text.secondaryAccent};
`;

interface Props {
  className?: string;
  onClick?: () => void;
  children?: string;
  active?: boolean;
}

const ServiceButtonBase: FC<Props> = ({ children, ...rest }) => {
  return (
    <button {...rest}>
      <StyledSpan weight="600">{children}</StyledSpan>
      <StyledIcon svgComponent={ArrowSvg} />
    </button>
  );
};

export const ServiceButton = styled(ServiceButtonBase)`
  outline: none;
  transition: all 0.25s linear;
  cursor: pointer;
  width: 100%;
  max-width: 290px;
  display: flex;
  align-items: center;
  padding: 17px 15px 17px 23px;
  border: none;

  ${props =>
    props.active
      ? css`
          background: ${props.theme.colors.accents.primary};
          ${StyledSpan} {
            color: ${props.theme.colors.text.secondary};
          }
          ${StyledIcon} {
            fill: ${props.theme.colors.text.secondary};
          }
        `
      : css`
          background: ${props.theme.colors.background.primary};
          ${StyledSpan} {
            color: ${props.theme.colors.text.secondaryAccent};
          }
          ${StyledIcon} {
            fill: ${props.theme.colors.text.secondaryAccent};
          }
        `}

  &:hover, &:focus {
    background: ${props => props.theme.colors.accents.primary};
    ${StyledSpan} {
      color: ${props => props.theme.colors.text.secondary};
    }
    ${StyledIcon} {
      fill: ${props => props.theme.colors.text.secondary};
    }
  }

  @media (max-width: ${props => props.theme.breakpoints.m}) {
    padding: 10px 15px 10px 23px;

    ${StyledSpan} {
      font-size: 14px;
      margin-right: 10px;
    }
  }
`;
