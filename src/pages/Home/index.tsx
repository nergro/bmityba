import { AboutSection } from 'Organisms/sections/AboutSection';
import { ContactsSection } from 'Organisms/sections/ContactsSection';
import { FeaturedSection } from 'Organisms/sections/FeaturedSection';
import { MainSection } from 'Organisms/sections/MainSection';
import { ServicesSection } from 'Organisms/sections/ServicesSection';
import { SocialsSection } from 'Organisms/sections/SocialsSection';
import React, { FC } from 'react';
import { Helmet } from 'react-helmet';
import LazyLoad from 'react-lazyload';

const Home: FC = () => {
  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="Kvalifikuota mitybos specialistė ir antropometristė, atsidavusi išspręsti Jūsų sveikatos dėlionę kartu su jumis."
        />
      </Helmet>
      <MainSection />
      <FeaturedSection />
      <LazyLoad>
        <AboutSection />
      </LazyLoad>
      <LazyLoad>
        <ServicesSection />
      </LazyLoad>
      <LazyLoad>
        <ContactsSection />
      </LazyLoad>
      <LazyLoad>
        <SocialsSection />
      </LazyLoad>
    </>
  );
};

export default Home;
