import { ServiceLayout } from 'layouts/ServiceLayout';
import React, { FC } from 'react';
import { RouteComponentProps } from 'react-router-dom';

export const Service: FC<RouteComponentProps<{ id: string }>> = ({ match }) => {
  const serviceId = match.params.id;

  return (
    <ServiceLayout title="Personalized Nutrition Program" serviceId={serviceId}>
      content
    </ServiceLayout>
  );
};
