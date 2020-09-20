import { Benefit } from 'Atoms/Benefit';
import { RoundButton } from 'Atoms/buttons/RoundButton';
import { H2, P } from 'Atoms/text';
import { ServiceLayout } from 'layouts/ServiceLayout';
import React, { FC } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { services } from 'services/services';
import styled from 'styled-components/macro';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Image = styled.img`
  width: 100%;
`;

const DescriptionSection = styled.div`
  margin-top: 20px;
  line-height: 30px;
  padding-bottom: 25px;
  border-bottom: 1px solid ${props => props.theme.colors.separator.light};
`;

const Title = styled(H2)`
  font-size: 32px;
  text-align: left;
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    font-size: 27px;
  }
`;

const Description = styled(P)`
  font-size: 18px;
  line-height: 30px;
`;

const BenefitsSection = styled.div``;

const Benefits = styled.div`
  margin-top: 10px;
  display: flex;
  flex-wrap: wrap;
`;

const StyledBenefit = styled(Benefit)`
  width: 300px;
  margin: 20px 15px 0 0;
  @media (max-width: ${props => props.theme.breakpoints.l}) {
    width: 270px;
  }
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    width: 300px;
  }
`;

const PriceSection = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: center;
`;

const PriceBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 1px solid ${props => props.theme.colors.separator.light};
  padding: 15px 0px 35px;
  width: 400px;
  height: 380px;
  align-items: center;
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    width: 320px;
  }
`;

const Price = styled(P)`
  text-align: center;
  font-size: 60px;
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    font-size: 50px;
  }
`;

const PriceDescription = styled.div`
  margin: 25px 0 35px;
`;

const StyledP = styled(P)`
  text-align: center;
  &:not(:first-child) {
    margin-top: 15px;
  }
  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    && {
      font-size: 16px;
    }
  }
`;

const StyledRoundButton = styled(RoundButton)``;

export const Service: FC<RouteComponentProps<{ id: string }>> = ({ match, history }) => {
  const serviceId = match.params.id;
  const service = services.find(x => x.id === match.params.id);

  if (!service) {
    return (
      <ServiceLayout title="Not Found" serviceId={serviceId}>
        <p>Service not found</p>
      </ServiceLayout>
    );
  }
  return (
    <ServiceLayout title={service.name} serviceId={serviceId}>
      <Container>
        <Image src={service.image} />
        <DescriptionSection>
          <Title font="Spectral" color="secondaryAccent">
            {service.name}
          </Title>
          <Description color="inactive">{service.description}</Description>
        </DescriptionSection>
        <BenefitsSection>
          <Title font="Spectral" color="secondaryAccent">
            {service.benefitsTitle}
          </Title>
          <Description color="inactive">{service.benefitsDescription}</Description>
          <Benefits>
            {service.benefits.map(x => (
              <StyledBenefit key={x.name} name={x.name} description={x.description} />
            ))}
          </Benefits>
        </BenefitsSection>
        <PriceSection>
          <PriceBox>
            <Price color="tertiaryAccent" font="Oregano">
              €{service.price}
            </Price>
            <PriceDescription>
              {service.priceDescription.split('/').map((x, i) => (
                <StyledP key={i} color="inactive" size="intermedium">
                  {x}
                </StyledP>
              ))}
            </PriceDescription>
            <StyledRoundButton onClick={() => history.push('/contacts')}>
              Book now
            </StyledRoundButton>
          </PriceBox>
        </PriceSection>
      </Container>
    </ServiceLayout>
  );
};
