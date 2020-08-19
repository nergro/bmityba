import React, { FC, MouseEvent, ReactNode, useCallback } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import styled, { DefaultTheme } from 'styled-components/macro';
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
    mobile: '14px',
  },
  big: {
    desktop: '20px',
    mobile: '16px',
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
  color?: keyof DefaultTheme['colors']['text'];
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
  color: ${props => props.theme.colors.text[props.color || 'darkLink']};
  font-family: ${props => props.theme.fontFamily.Roboto};
  font-weight: ${props => props.weight || '400'};
  font-size: ${props => sizes[props.size || 'normal'].desktop};
  margin: 0;
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    font-size: ${props => sizes[props.size || 'normal'].mobile};
  }
  ${props => (props.noUnderline ? 'text-decoration: none;' : '')}
`;
