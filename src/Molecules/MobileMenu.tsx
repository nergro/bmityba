import React, { FC } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import styled, { css, FlattenSimpleInterpolation } from 'styled-components/macro';

const Item = styled.li`
  border-top: 1px solid ${props => props.theme.colors.separator.light};
  opacity: 0;
  visibility: hidden;
  transform: translateY(-20px);
  transition: all 0.3s;
  padding: 12px 20px;
  background: ${props => props.theme.colors.background.primary};
  width: 100%;
`;

interface LinkProps {
  isActive?: boolean;
}

const StyledLink = styled.button<LinkProps>`
  text-decoration: none;
  padding: 2px 0;
  text-align: center;
  display: block;
  transition: all 0.3s;
  width: 100%;
  font-size: 20px;
  color: ${props => props.theme.colors.accents[props.isActive ? 'primary' : 'secondary']};
  background: none;
  border: none;
  font-family: ${props => props.theme.fontFamily.Lato};
  &:hover {
    color: ${props => props.theme.colors.accents.primary};
  }
`;

const createMenuDelays = (): FlattenSimpleInterpolation => {
  let styles = '';

  for (let i = 0; i < 6; i += 1) {
    styles += `
        &:nth-child(${i}) {
          transition-delay: ${(i - 1) / 10}s;
        }
      `;
  }

  return css`
    ${styles}
  `;
};

const Menu = styled.ul<MenuProps>`
  display: block;
  position: fixed;
  list-style-type: none;
  margin: 0;
  padding: 0;
  top: 60px;
  left: 0;
  width: 100%;
  z-index: -1;

  ${props =>
    props.isOpen &&
    css`
      z-index: 10;

      ${Item} {
        opacity: 1;
        visibility: visible;
        transform: translateY(0);

        ${createMenuDelays()}
      }
    `};
`;

interface MenuProps {
  className?: string;
  isOpen?: boolean;
}

interface Props extends MenuProps {
  onClose: () => void;
}

export const MobileMenu: FC<Props> = ({ className, isOpen, onClose }) => {
  const { push } = useHistory();
  const { pathname } = useLocation();

  const onLinkClick = (to: string): void => {
    push(to);
    onClose();
  };

  return (
    <>
      <Menu className={className} isOpen={isOpen}>
        <Item>
          <StyledLink onClick={() => onLinkClick('/')} isActive={pathname === '/'}>
            Home
          </StyledLink>
        </Item>
        <Item>
          <StyledLink onClick={() => onLinkClick('/')} isActive={pathname === '/services'}>
            Services
          </StyledLink>
        </Item>
        <Item>
          <StyledLink onClick={() => onLinkClick('/')} isActive={pathname === '/portfolio'}>
            Portfolio
          </StyledLink>
        </Item>
        <Item>
          <StyledLink onClick={() => onLinkClick('/blog')} isActive={pathname === '/blog'}>
            Blog
          </StyledLink>
        </Item>
        <Item>
          <StyledLink onClick={() => onLinkClick('/contacts')} isActive={pathname === '/contacts'}>
            Contacts
          </StyledLink>
        </Item>
      </Menu>
    </>
  );
};
