import { Icon, SvgComponent } from 'Atoms/Icon';
import { P } from 'Atoms/text';
import React, { FC } from 'react';
import styled from 'styled-components/macro';

const ContactWrapper = styled.div`
  display: flex;
  margin-right: 15px;
  width: 200px;
  @media (max-width: ${props => props.theme.breakpoints.m}) {
    width: 200px;
    margin: 5px 0 0 35px;
  }
  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    margin-left: 15px;
  }
`;

const ContactName = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledP = styled(P)`
  margin-bottom: 10px;
`;

const StyledIcon = styled(Icon)`
  width: 30px;
  height: 30px;
  margin-right: 20px;
  fill: ${props => props.theme.colors.accents.primary};
`;

interface Props {
  className?: string;
  icon: SvgComponent;
  name: string;
  value: string;
}

export const Contact: FC<Props> = ({ className, icon, name, value }) => {
  return (
    <ContactWrapper className={className}>
      <div>
        <StyledIcon svgComponent={icon} />
      </div>
      <ContactName>
        <StyledP weight="600" size="intermedium">
          {name}
        </StyledP>
        <P color="secondaryAccent">{value}</P>
      </ContactName>
    </ContactWrapper>
  );
};
