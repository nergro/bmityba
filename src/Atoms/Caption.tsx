import React, { FC } from 'react';
import styled from 'styled-components/macro';
import { P, Size } from 'Atoms/text/P';

const CaptionWrapper = styled.div`
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    display: none;
  }
`;

const Content = styled(P)`
  letter-spacing: 1px;
  @media (max-width: ${props => props.theme.breakpoints.m}) {
    font-size: 16px;
  }
`;

const Line = styled.hr<LineProps>`
  width: ${props => props.width || '40px'};
  margin: 0;
  border: 1px solid ${props => props.theme.colors.accents.primary};
`;

const LineLeft = styled(Line)`
  margin-right: 20px;
`;

const LineRight = styled(Line)`
  margin-left: 20px;
`;

type LineWidth = '20px' | '30px' | '40px';

interface LineProps {
  width?: LineWidth;
}

interface Props {
  className?: string;
  content: string;
  lineLeft?: boolean;
  lineright?: boolean;
  size?: Size;
  lineWidth?: LineWidth;
}

export const Caption: FC<Props> = ({
  className,
  content,
  lineLeft,
  lineright,
  size = 'intermedium',
  lineWidth,
}) => {
  return (
    <CaptionWrapper className={className}>
      {lineLeft && <LineLeft width={lineWidth} />}
      <Content color="primaryAccent" font="Lato" size={size} weight="600">
        {content}
      </Content>
      {lineright && <LineRight width={lineWidth} />}
    </CaptionWrapper>
  );
};
