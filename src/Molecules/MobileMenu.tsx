import React, { FC } from 'react';
import styled, { css, FlattenSimpleInterpolation } from 'styled-components/macro';

const Item = styled.li`
  border-bottom: 1px solid #ddd;
  opacity: 0;
  visibility: hidden;
  transform: translateY(-20px);
  transition: all 0.3s;
`;

const Link = styled.a`
  background: #fff;
  color: #404040;
  display: block;
  font-size: 18px;
  font-weight: 700;
  padding: 12px 20px;
  text-align: left;
  width: 100%;
  transition: all 0.3s;
  &:hover {
    color: coral;
  }
`;

const createMenuDelays = (): FlattenSimpleInterpolation => {
  let styles = '';

  for (let i = 0; i < 5; i += 1) {
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
        <Link href="#">About us</Link>
      </Item>
      <Item>
        <Link href="#">products</Link>
      </Item>
      <Item>
        <Link href="#">media</Link>
      </Item>
      <Item>
        <Link href="#">contact us</Link>
      </Item>
    </Menu>
  );
};
