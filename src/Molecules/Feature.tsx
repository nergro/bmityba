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
  padding: 35px 27px 31px;
`;

const StyledIcon = styled(Icon)`
  width: 50px;
  height: 50px;
  fill: ${props => props.theme.colors.accents.primary};
  margin-bottom: 20px;
`;

const Title = styled(P)`
  && {
    font-size: 21px;
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
      <Title font="Prata" color="secondaryAccent">
        {title}
      </Title>
      <Description font="Lato" color="light">
        {description}
      </Description>
    </Box>
  );
};
