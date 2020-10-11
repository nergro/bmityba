import { H4, P } from 'Atoms/text';
import React, { FC } from 'react';
import styled from 'styled-components/macro';

const BenefitWrapper = styled.div``;

const BenefitTitle = styled(H4)`
  text-align: left;
  margin: 10px 0;
  font-size: 21px;
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    font-size: 21px;
  }
`;

const BenefitDescription = styled(P)`
  line-height: 26px;
`;

interface Props {
  className?: string;
  name: string;
  description: string;
}

export const Benefit: FC<Props> = ({ className, name, description }) => {
  return (
    <BenefitWrapper className={className}>
      <BenefitTitle font="Spectral" color="primaryAccent" weight="600">
        {name}
      </BenefitTitle>
      <BenefitDescription color="inactive">{description}</BenefitDescription>
    </BenefitWrapper>
  );
};
