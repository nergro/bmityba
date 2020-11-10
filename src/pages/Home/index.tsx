import { AboutSection } from 'Organisms/sections/AboutSection';
import { ContactsSection } from 'Organisms/sections/ContactsSection';
import { FeaturedSection } from 'Organisms/sections/FeaturedSection';
import { MainSection } from 'Organisms/sections/MainSection';
import { ServicesSection } from 'Organisms/sections/ServicesSection';
import { SocialsSection } from 'Organisms/sections/SocialsSection';
import React, { FC } from 'react';
import { Helmet } from 'react-helmet';

const Home: FC = () => {
  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="Kvalifikuota mitybos specialistė ir antropometristė, atsidavusi išspręsti Jūsų sveikatos dėlionę kartu su jumis."
        />
        <title>
          Brigita Meiglaitė - mitybos specialistė. Mitybos planai, patarimai, sporto programa.
        </title>
      </Helmet>
      <MainSection />
      <FeaturedSection />
      <AboutSection />
      <ServicesSection />
      <ContactsSection />
      <SocialsSection />
    </>
  );
};

export default Home;
