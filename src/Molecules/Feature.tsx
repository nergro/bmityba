import { Icon, SvgComponent } from 'Atoms/Icon';
import { P } from 'Atoms/text';
import React, { FC } from 'react';
import styled from 'styled-components/macro';

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 350px;
  height: 300px;
  box-shadow: 0 0 10px 0 rgba(43, 52, 59, 0.05);
  background: ${props => props.theme.colors.background.primary};
  padding: 25px 27px 20px;
`;

const StyledIcon = styled(Icon)`
  min-width: 50px;
  min-height: 50px;
  max-width: 50px;
  max-height: 50px;
  fill: ${props => props.theme.colors.accents.primary};
  margin-bottom: 20px;
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    min-width: 45px;
    min-height: 45px;
    max-width: 45px;
    max-height: 45px;
  }
`;

const Title = styled(P)`
  && {
    font-size: 22px;
    font-weight: 500;
  }
`;

const Description = styled(P)`
  margin: 15px 0;
  text-align: center;
`;

interface Props {
  className?: string;
  icon: SvgComponent;
  title: string;
  description: string;
}

export const Feature: FC<Props> = ({ className, icon, title, description }) => {
  return (
    <Box className={className}>
      <StyledIcon svgComponent={icon} />
      <Title font="Spectral" color="secondaryAccent">
        {title}
      </Title>
      <Description color="light">{description}</Description>
    </Box>
  );
};
