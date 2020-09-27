import { ServiceButton } from 'Atoms/buttons/ServiceButton';
import React, { FC } from 'react';
import { useHistory } from 'react-router-dom';
import { dummyServices } from 'services/dummyServices';
import { getLocale } from 'services/localStorage';
import styled from 'styled-components/macro';
import { Service as ServiceInfo } from 'types/service';

const Container = styled.div``;

const StyledServiceButton = styled(ServiceButton)`
  border: 1px solid #eee;
  &:not(:first-child) {
    margin-top: -1px;
  }
`;

interface Props {
  className?: string;
  serviceId?: string;
  services?: ServiceInfo[];
}

export const ServicesNavSection: FC<Props> = ({ className, services, serviceId }) => {
  const { push } = useHistory();
  const locale = getLocale();
  return (
    <Container className={className}>
      {(services || dummyServices).map(x => (
        <StyledServiceButton
          key={x.id}
          onClick={() => push(`/services/${x.id}`)}
          active={x.id === serviceId}
        >
          {locale === 'lt' ? x.nameLT : x.nameEN}
        </StyledServiceButton>
      ))}
    </Container>
  );
};
