import React, { FC, MouseEvent, ReactNode, useCallback } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import styled from 'styled-components/macro';
import { FontSizeCollection } from 'types/fontSizeCollection';

type Size = 'reference' | 'small' | 'normal' | 'big' | 'veryBig';
const sizes: FontSizeCollection<Size> = {
  reference: {
    desktop: '13px',
    mobile: '12px',
  },
  small: {
    desktop: '15px',
    mobile: '12px',
  },
  normal: {
    desktop: '16px',
    mobile: '16px',
  },
  big: {
    desktop: '20px',
    mobile: '20px',
  },
  veryBig: {
    desktop: '25px',
    mobile: '16px',
  },
};

interface Props {
  className?: string;
  children: ReactNode;
  to: string;
  isActive?: boolean;
  onClick?(): void;
  size?: Size;
  weight?: '400' | '500' | '600' | '700';
  noUnderline?: boolean;
  replace?: boolean;
  newTab?: boolean;
}

const BasicLink: FC<Props> = ({
  className,
  children,
  to,
  onClick,
  isActive = false,
  replace,
  newTab,
}: Props) => {
  const onClickHandler = useCallback(
    (e: MouseEvent) => {
      if (onClick) {
        e.preventDefault();
        onClick();
      }
    },
    [onClick]
  );

  return (
    <RouterLink
      className={className}
      to={to}
      onClick={onClickHandler}
      data-active={isActive}
      replace={replace}
      target={newTab ? '_blank' : undefined}
    >
      {children}
    </RouterLink>
  );
};

export const Link = styled(BasicLink)`
  color: ${props => props.theme.colors.accents[props.isActive ? 'primary' : 'secondary']};
  font-family: ${props => props.theme.fontFamily.Main};
  font-weight: ${props => props.weight || '700'};
  font-size: ${props => sizes[props.size || 'normal'].desktop};
  margin: 0;
  transition: all 0.2s ease-out;

  @media (max-width: ${props => props.theme.breakpoints.s}) {
    font-size: ${props => sizes[props.size || 'normal'].mobile};
  }

  position: relative;
  display: block;
  padding: 0.5em;
  text-decoration: none;
  &:before {
    width: 100%;
    content: '';
    position: absolute;
    bottom: -3px;
    left: auto;
    right: 0;
    height: 2px;
    background: #efefef;
    transition: all 0.3s ease 0s;
    box-shadow: inset 0 0 0 0 #efefef;
  }
  &:after {
    width: 100%;
    content: '';
    position: absolute;
    bottom: -3px;
    left: auto;
    right: 0;
    height: 2px;
    background: #efefef;
    transition: all 0.7s ease 0s;
    box-shadow: inset 0 0 0 0 #efefef;
  }

  &:hover:after {
    box-shadow: inset 160px 0 0 0 ${props => props.theme.colors.accents.primary};
  }

  &:hover {
    color: ${props => props.theme.colors.accents.primary};
  }
`;
