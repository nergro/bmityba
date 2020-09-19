import { ReactComponent as LocationSvg } from 'assets/footer/location.svg';
import { ReactComponent as MailSvg } from 'assets/footer/mail.svg';
import { ReactComponent as PhoneSvg } from 'assets/footer/phone.svg';
import { Icon, SvgComponent } from 'Atoms/Icon';
import { P } from 'Atoms/text';
import { PageLayout } from 'layouts/PageLayout';
import { ContactForm } from 'Molecules/ContactForm';
import { Questions } from 'Molecules/Questions';
import { SocialsSection } from 'Organisms/sections/SocialsSection';
import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { allQuestions } from 'services/questions';
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

const LeftTitle = styled(P)``;

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

const IconWrapper = styled.div``;

const StyledIcon = styled(Icon)`
  width: 30px;
  height: 30px;
  margin-right: 20px;
  fill: ${props => props.theme.colors.accents.primary};
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

const QuestionsContainer = styled.div``;

const StyledQuestions = styled(Questions)`
  width: 100%;
`;

interface ContactProps {
  className?: string;
  icon: SvgComponent;
  name: string;
  value: string;
}

const Contact: FC<ContactProps> = ({ className, icon, name, value }) => {
  return (
    <ContactWrapper className={className}>
      <IconWrapper>
        <StyledIcon svgComponent={icon} />
      </IconWrapper>
      <ContactName>
        <StyledP weight="600" size="intermedium">
          {name}
        </StyledP>
        <P color="secondaryAccent">{value}</P>
      </ContactName>
    </ContactWrapper>
  );
};

export const Contacts: FC = () => {
  const { t } = useTranslation();
  return (
    <PageLayout title={t('Contacts')}>
      <Container>
        <LeftSection>
          <LeftTitle size="medium" weight="600">
            {t("I'd love to hear from you")}
          </LeftTitle>
          <Contact icon={PhoneSvg} name={t('Phone')} value="+370 662 38367" />
          <Contact icon={MailSvg} name={t('Email')} value="bmityba@outlook.com" />
          <Contact icon={LocationSvg} name={t('Location')} value={t('Kaunas, Lithuania')} />
        </LeftSection>
        <RightSection>
          <StyledContactForm />
        </RightSection>
      </Container>
      <QuestionsContainer>
        <StyledQuestions questions={allQuestions} />
      </QuestionsContainer>

      <SocialsSection />
    </PageLayout>
  );
};
