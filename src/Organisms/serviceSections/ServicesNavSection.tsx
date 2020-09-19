import { ServiceButton } from 'Atoms/buttons/ServiceButton';
import React, { FC } from 'react';
import { useHistory } from 'react-router-dom';
import { services } from 'services/services';
import styled from 'styled-components/macro';

const Container = styled.div``;

const StyledServiceButton = styled(ServiceButton)`
  border: 1px solid #eee;
  &:not(:first-child) {
    margin-top: -1px;
  }
`;

interface Props {
  className?: string;
  serviceId: string;
}

export const ServicesNavSection: FC<Props> = ({ className, serviceId }) => {
  const { push } = useHistory();
  return (
    <Container className={className}>
      {services.map(x => (
        <StyledServiceButton
          key={x.id}
          onClick={() => push(`/services/${x.id}`)}
          active={x.id === serviceId}
        >
          {x.name}
        </StyledServiceButton>
      ))}
    </Container>
  );
};
