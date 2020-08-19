import { ReactComponent as fbSVG } from 'assets/logos/facebook.svg';
import { ReactComponent as instaSVG } from 'assets/logos/instagram.svg';
import { ReactComponent as linkedSVG } from 'assets/logos/linkedin.svg';
import { Icon } from 'Atoms/Icon';
import React, { FC } from 'react';
import styled from 'styled-components/macro';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledIcon = styled(Icon)`
  width: 30px;
  height: 30px;
  fill: ${props => props.theme.colors.text.secondary};
  margin: 20px 0;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;
  &:hover {
    transform: scale(1.2);
  }
`;

interface Props {
  className?: string;
}

export const Logos: FC<Props> = ({ className }) => {
  return (
    <Container className={className}>
      <StyledIcon svgComponent={fbSVG} />
      <StyledIcon svgComponent={instaSVG} />
      <StyledIcon svgComponent={linkedSVG} />
    </Container>
  );
};
