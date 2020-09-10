import service1Image from 'assets/services/service1.jpg';
import service2Image from 'assets/services/service2.jpg';
import service3Image from 'assets/services/service3.jpg';
import { H1 } from 'Atoms/text';
import { Service } from 'Molecules/Service';
import React, { FC } from 'react';
import styled from 'styled-components/macro';

const Container = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  padding: 50px 0;
`;

const Title = styled(H1)`
  && {
    font-size: 38px;
  }
`;

const Services = styled.div`
  display: flex;
  justify-content: space-between;
  width: 70%;
  margin: 50px auto 0;
`;

interface Props {
  className?: string;
}

export const ServicesSection: FC<Props> = () => {
  return (
    <Container>
      <Title color="secondaryAccent" font="Prata">
        A Fresh Approach To Health &amp; Life
      </Title>
      <Services>
        <Service
          image={service1Image}
          title="1:1 Consultation"
          subtitle="What You Get.."
          description="Monthly sessions where we uncover the habits &amp; thoughts in the way of a healthy relationship with food &amp; your body."
          to="/services"
        />
        <Service
          image={service2Image}
          title="30 day Challenge"
          subtitle="Perfect for you if.."
          description="You want to curb your cravings and discover a healthier lifestyle during a fun + simple 30 day online challenge."
          to="/services"
        />
        <Service
          image={service3Image}
          title="Group Couching"
          subtitle="Get all the benefits"
          description="You're ready to explore a life that loves you as much as you love it through bi-weekly one on one coaching sessions."
          to="/services"
        />
      </Services>
    </Container>
  );
};
