import { AnimatedPlus, Circle, Horizontal, Vertical } from 'Atoms/AnimatedPlus';
import { P } from 'Atoms/text';
import React, { FC, useState } from 'react';
import styled, { css } from 'styled-components/macro';

const Container = styled.div`
  width: 100%;
`;

const StyledPlus = styled(AnimatedPlus)`
  margin-right: 20px;
`;

const Button = styled.button`
  text-align: left;
  border: 1px solid ${props => props.theme.colors.input.border};
  display: flex;
  align-items: center;
  width: 100%;
  background: none;
  outline: none;
  padding: 10px 15px;
  font-family: ${props => props.theme.fontFamily.Main};
  color: ${props => props.theme.colors.accents.secondary};
  font-size: 17px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover,
  &:focus {
    border-color: ${props => props.theme.colors.accents.primary};
    ${StyledPlus} {
      ${Circle} {
        transition: all 0.2s ease-in-out;
        border-color: ${props => props.theme.colors.accents.primary};
      }
      ${Horizontal} {
        transition: all 0.2s ease-in-out;
        background: ${props => props.theme.colors.accents.primary};
      }
      ${Vertical} {
        transition: all 0.2s ease-in-out;
        background: ${props => props.theme.colors.accents.primary};
      }
    }
  }
`;

const TextWrapper = styled.div<TextProps>`
  transition: all 0.2s ease-in-out;
  position: relative;
  ${props =>
    props.isOpen
      ? css`
          opacity: 1;
          height: 80px;
          margin-top: 20px;
          @media (max-width: ${props => props.theme.breakpoints.m}) {
            height: 120px;
          }
        `
      : css`
          opacity: 0;
          height: 0;
          z-index: -1;
        `}
`;

const Text = styled(P)``;

interface TextProps {
  isOpen: boolean;
}

interface Props {
  className?: string;
  question: string;
  answer: string;
  initiallyOpened?: boolean;
}

export const QuestionToggle: FC<Props> = ({
  className,
  question,
  answer,
  initiallyOpened = false,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(initiallyOpened);
  return (
    <Container className={className}>
      <Button onClick={() => setIsOpen(!isOpen)}>
        <StyledPlus isOpen={isOpen} /> {question}
      </Button>
      {isOpen}
      <TextWrapper isOpen={isOpen}>
        <Text color="inactive">{answer}</Text>
      </TextWrapper>
    </Container>
  );
};
