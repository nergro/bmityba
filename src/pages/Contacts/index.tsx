import { ReactComponent as LocationSvg } from 'assets/footer/location.svg';
import { ReactComponent as MailSvg } from 'assets/footer/mail.svg';
import { ReactComponent as PhoneSvg } from 'assets/footer/phone.svg';
import { P } from 'Atoms/text';
import { PageLayout } from 'layouts/PageLayout';
import { Contact } from 'Molecules/Contacts/Contact';
import { ContactForm } from 'Molecules/Contacts/ContactForm';
import { Questions } from 'Molecules/Questions';
import { SocialsSection } from 'Organisms/sections/SocialsSection';
import React, { FC } from 'react';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import { getLocale } from 'services/localStorage';
import { useContacts } from 'store/contactsStore/hooks';
import styled from 'styled-components/macro';

const Container = styled.div`
  width: 82%;
  margin: 60px auto 80px;
  display: flex;
  align-items: center;
  @media (max-width: ${props => props.theme.breakpoints.l}) {
    width: 100%;
    padding-left: 20px;
    padding-right: 20px;
  }
  @media (max-width: ${props => props.theme.breakpoints.m}) {
    flex-direction: column;
    padding: 0;
  }
`;
const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 50%;
  min-height: 350px;
  @media (max-width: ${props => props.theme.breakpoints.l}) {
    width: 40%;
    margin-right: 20px;
  }
  @media (max-width: ${props => props.theme.breakpoints.m}) {
    width: 100%;
    margin-bottom: 50px;
  }
`;

const RightSection = styled.div`
  display: flex;
  justify-content: center;
  width: 50%;
  @media (max-width: ${props => props.theme.breakpoints.l}) {
    width: 60%;
  }
  @media (max-width: ${props => props.theme.breakpoints.m}) {
    width: 100%;
  }
`;

const StyledContactForm = styled(ContactForm)`
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    margin: 0 20px;
  }
`;

const StyledQuestions = styled(Questions)`
  width: 100%;
`;

const Contacts: FC = () => {
  const contacts = useContacts();
  const { t } = useTranslation();

  const isLT = getLocale() === 'lt';
  return (
    <PageLayout title={t('Contacts')}>
      <Helmet>
        <meta
          name="description"
          content="Individuali konsultacija. Mitybos planas. Mitybos planas + sporto programa."
        />
      </Helmet>
      <Container>
        <LeftSection>
          <P size="medium" weight="600">
            {t("I'd love to hear from you")}
          </P>
          <Contact icon={PhoneSvg} name={t('Phone')} value={contacts.phone} />
          <Contact icon={MailSvg} name={t('Email')} value={contacts.email} />
          <Contact
            icon={LocationSvg}
            name={t('Location')}
            value={isLT ? contacts.locationLT : contacts.locationEN}
          />
        </LeftSection>
        <RightSection>
          <StyledContactForm />
        </RightSection>
      </Container>
      <div>
        <StyledQuestions />
      </div>

      <SocialsSection />
    </PageLayout>
  );
};

export default Contacts;
