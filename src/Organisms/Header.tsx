import { LanguageButton } from 'Atoms/buttons/LanguageButton';
import { Link } from 'Atoms/links/Link';
import { MenuBurger } from 'Atoms/MenuBurger';
import { P } from 'Atoms/text';
import { MobileMenu } from 'Molecules/MobileMenu';
import React, { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory, useLocation } from 'react-router-dom';
import { getLocale, setLocale } from 'services/localStorage';
import {
  useDispatch as useMenuDispatch,
  useState as useMenuState,
} from 'store/mobileMenuStore/hooks';
import styled from 'styled-components/macro';

const Container = styled.div`
  position: fixed;
  height: 65px;
  width: 100%;
  background: #ffffff;
  display: flex;
  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.08);
  z-index: 10;
`;

const Logo = styled(P)`
  transition: color 0.1s ease-in-out;
`;

const LogoButton = styled.button`
  position: absolute;
  top: 12px;
  left: 3%;
  background: transparent;
  outline: none;
  border: none;
  cursor: pointer;
  padding: 0;
  &:hover {
    ${Logo} {
      color: ${props => props.theme.colors.accents.primary};
    }
  }

  @media (max-width: ${props => props.theme.breakpoints.m}) {
    display: none;
  }

  @media (max-width: ${props => props.theme.breakpoints.s}) {
    display: block;
    right: 20px;
    left: unset;
    top: 17px;
  }
`;

const Links = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  max-width: 500px;
  justify-content: space-around;
  margin: 0 auto;

  @media (max-width: ${props => props.theme.breakpoints.s}) {
    display: none;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  height: 100%;
  display: flex;
  align-items: center;
`;

const StyledMenuBurger = styled(MenuBurger)`
  display: none;
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    display: block;
    position: absolute;
    top: 18px;
    left: 30px;
  }
`;

const Languages = styled.div`
  display: flex;
  align-items: center;
  margin-right: 30px;
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    display: none;
  }
`;

const StyledLanguageButton = styled(LanguageButton)`
  &:not(:last-child) {
    margin-right: 15px;
  }
`;

export const Header: FC = () => {
  const { i18n, t } = useTranslation();
  const menuDispatch = useMenuDispatch();
  const menuState = useMenuState();
  const { push } = useHistory();
  const { pathname } = useLocation();
  const [language, setLanguage] = useState<string | null>(getLocale());

  return (
    <>
      <Container>
        <StyledMenuBurger
          onClick={() => menuDispatch({ type: 'Menu/Set', payload: !menuState })}
          isOpen={menuState}
        />
        <LogoButton onClick={() => push('/')}>
          <Logo size="big" font="Caveat" color="secondaryAccent">
            Brigita Meiglaitė
          </Logo>
        </LogoButton>
        <Links>
          <StyledLink to="/" isActive={pathname === '/'}>
            {t('Home')}
          </StyledLink>
          <StyledLink to="/about" isActive={pathname === '/about'}>
            {t('About')}
          </StyledLink>
          <StyledLink to="/services" isActive={pathname === '/services'}>
            {t('Services')}
          </StyledLink>
          <StyledLink to="/blog" isActive={pathname === '/blog'}>
            {t('Blog')}
          </StyledLink>
          <StyledLink to="/contacts" isActive={pathname === '/contacts'}>
            {t('Contact me')}
          </StyledLink>
        </Links>
        <Languages>
          <StyledLanguageButton
            onClick={() => {
              setLocale('lt');
              setLanguage('lt');
              i18n.changeLanguage('lt');
            }}
            disabled={language === 'lt'}
          >
            LT
          </StyledLanguageButton>
          <StyledLanguageButton
            onClick={() => {
              setLocale('en');
              setLanguage('en');
              i18n.changeLanguage('en');
            }}
            disabled={language === 'en'}
          >
            EN
          </StyledLanguageButton>
        </Languages>
      </Container>
      <MobileMenu
        isOpen={menuState}
        onClose={() => menuDispatch({ type: 'Menu/Set', payload: false })}
      />
    </>
  );
};
