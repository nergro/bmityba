import { Link } from 'Atoms/links/Link';
import { MenuBurger } from 'Atoms/MenuBurger';
import { P } from 'Atoms/text';
import { MobileMenu } from 'Molecules/MobileMenu';
import React, { FC, useState } from 'react';
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

const StyledMobileMenu = styled(MobileMenu)`
  display: none;
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    display: block;
  }
`;

export const Header: FC = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  console.log(menuOpen);
  return (
    <Container>
      <StyledMenuBurger onClick={() => setMenuOpen(!menuOpen)} isOpen={menuOpen} />
      <StyledMobileMenu isOpen={menuOpen} />
      <LogoButton>
        <Logo size="big" font="Caveat" color="secondaryAccent">
          Brigita Meiglaitė
        </Logo>
      </LogoButton>
      <Links>
        <StyledLink to="/" isActive>
          Home
        </StyledLink>
        <StyledLink to="/">Services</StyledLink>
        <StyledLink to="/">Portfolio</StyledLink>
        <StyledLink to="/">Blog</StyledLink>
        <StyledLink to="/">Contacts</StyledLink>
      </Links>
    </Container>
  );
};
