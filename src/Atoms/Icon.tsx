import React from 'react';
import styled, { css, DefaultTheme } from 'styled-components/macro';

const sizes = {
  small: {
    height: '20px',
    width: '20px',
  },
  full: {
    height: '100%',
    width: '100%',
  },
};

export type SvgComponent = React.FC<React.SVGProps<SVGSVGElement>>;
interface Props {
  className?: string;
  fill?: keyof DefaultTheme['colors']['text'];
  size?: keyof typeof sizes;
  svgComponent: SvgComponent;
}

const IconComp: React.FC<Props> = ({ className, svgComponent: SvgComponent }) => {
  return <SvgComponent className={className} data-testid="svg" />;
};

export const Icon = styled(IconComp)`
  ${props =>
    props.fill
      ? css`
          fill: ${props.theme.colors.text[props.fill]};
        `
      : ''}
  ${props => {
    const size = props.size || 'full';
    return css`
      height: ${sizes[size].height};
      width: ${sizes[size].width};
    `;
  }}
`;
