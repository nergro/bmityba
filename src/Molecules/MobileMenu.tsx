import { Link } from 'Atoms/links/Link';
import React, { FC } from 'react';
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

const StyledLink = styled(Link)`
  text-decoration: none;
  padding: 2px 0;
  text-align: center;
  display: block;
  transition: all 0.3s;
  width: 100%;
`;

// const Link = styled.a`
//   background: ${props => props.theme.colors.background.primary};
//   color: #404040;
//   display: block;
//   font-size: 18px;
//   font-weight: 700;
//   padding: 12px 20px;
//   text-align: left;
//   width: 100%;
//   transition: all 0.3s;
//   &:hover {
//     color: coral;
//   }
// `;

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

const Menu = styled.ul<Props>`
  display: block;
  position: absolute;
  list-style-type: none;
  margin: 0;
  padding: 0;
  top: 60px;
  left: 0;
  width: 100%;

  &::before {
    background: rgba(0, 0, 0, 0.5);
    content: '';
    height: 100vh;
    left: 0;
    top: 0;
    position: absolute;
    opacity: 0;
    visibility: hidden;
    width: 100%;
    transition: all 0.3s;
  }

  ${props =>
    props.isOpen &&
    css`
      &::before {
        opacity: 1;
        visibility: visible;
      }
      ${Item} {
        opacity: 1;
        visibility: visible;
        transform: translateY(0);

        ${createMenuDelays()}
      }
    `};
`;

interface Props {
  className?: string;
  isOpen?: boolean;
}

export const MobileMenu: FC<Props> = ({ className, isOpen }) => {
  return (
    <Menu className={className} isOpen={isOpen}>
      <Item>
        <StyledLink to="#" size="big">
          Home
        </StyledLink>
      </Item>
      <Item>
        <StyledLink to="#" size="big">
          Services
        </StyledLink>
      </Item>
      <Item>
        <StyledLink to="#" size="big">
          Portfolio
        </StyledLink>
      </Item>
      <Item>
        <StyledLink to="#" size="big">
          Blog
        </StyledLink>
      </Item>
      <Item>
        <StyledLink to="#" size="big">
          Contacts
        </StyledLink>
      </Item>
    </Menu>
  );
};
