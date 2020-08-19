import React, { FC, ReactNode } from 'react';
import styled, { DefaultTheme } from 'styled-components/macro';
import { FontSizeCollection } from 'types/fontSizeCollection';

type Size = 'small' | 'normal' | 'medium' | 'big' | 'veryBig';
const sizes: FontSizeCollection<Size> = {
  small: {
    desktop: '15px',
    mobile: '12px',
  },
  normal: {
    desktop: '16px',
    mobile: '14px',
  },
  medium: {
    desktop: '24px',
    mobile: '16px',
  },
  big: {
    desktop: '30px',
    mobile: '16px',
  },
  veryBig: {
    desktop: '25px',
    mobile: '16px',
  },
};

export interface Props {
  className?: string;
  children: ReactNode;
  size?: Size;
  color?: keyof DefaultTheme['colors']['text'];
  weight?: '400' | '500' | '600' | '700' | '900';
  textAlign?: 'center' | 'left';
  font?: keyof DefaultTheme['fontFamily'];
}

const PComp: FC<Props> = ({ className, children }) => <p className={className}>{children}</p>;

export const P = styled(PComp)`
  color: ${props => props.theme.colors.text[props.color || 'main']};
  font-family: ${props => props.theme.fontFamily[props.font || 'Roboto']};
  font-weight: ${props => props.weight || '400'};
  font-size: ${props => sizes[props.size || 'normal'].desktop};
  text-align: ${props => props.textAlign || 'unset'};
  margin: 0;
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    font-size: ${props => sizes[props.size || 'normal'].mobile};
  }
`;
