import React, { FC, ReactNode } from 'react';
import styled, { DefaultTheme } from 'styled-components/macro';
import { FontSizeCollection } from 'types/fontSizeCollection';

type Size = 'small' | 'smallStatic' | 'normal' | 'medium' | 'big' | 'veryBig' | 'huge';
const sizes: FontSizeCollection<Size> = {
  small: {
    desktop: '15px',
    mobile: '12px',
  },
  smallStatic: {
    desktop: '15px',
    mobile: '15px',
  },
  normal: {
    desktop: '16px',
    mobile: '14px',
  },
  medium: {
    desktop: '18px',
    mobile: '16px',
  },
  big: {
    desktop: '20px',
    mobile: '16px',
  },
  veryBig: {
    desktop: '25px',
    mobile: '16px',
  },
  huge: {
    desktop: '99px',
    mobile: '30px',
  },
};

interface Props {
  className?: string;
  children: ReactNode;
  size?: Size;
  color?: keyof DefaultTheme['colors']['text'];
  weight?: '400' | '500' | '600' | '700';
  fontStyle?: 'italic' | 'normal';
  font?: keyof DefaultTheme['fontFamily'];
}

const SpanComp: FC<Props> = ({ className, children }) => (
  <span className={className}>{children}</span>
);

export const Span = styled(SpanComp)`
  color: ${props => props.theme.colors.text[props.color || 'main']};
  font-family: ${props => props.theme.fontFamily[props.font || 'OpenSans']};
  font-weight: ${props => props.weight || '400'};
  font-size: ${props => sizes[props.size || 'normal'].desktop};
  font-style: ${props => props.fontStyle || 'normal'};
  margin: 0;
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    font-size: ${props => sizes[props.size || 'normal'].mobile};
  }
`;
