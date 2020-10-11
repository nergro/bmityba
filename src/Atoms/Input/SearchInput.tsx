import { ReactComponent as SearchSvg } from 'assets/UI/search.svg';
import { Icon } from 'Atoms/Icon';
import React, { ChangeEvent, FC } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components/macro';

const Wrapper = styled.div`
  position: relative;
`;

const Input = styled.input`
  width: 100%;
  outline: none;
  background: ${props => props.theme.colors.background.primary};
  color: ${props => props.theme.colors.input.text};
  font: ${props => props.theme.fonts.normalText};
  border: 1px solid ${props => props.theme.colors.input.border};
  transition: all linear 0.2s;
  box-shadow: 0 0 10px 0 rgba(3, 59, 74, 0.05);
  &::placeholder {
    color: ${props => props.theme.colors.input.placeholder};
  }
  &:focus {
    border: 1px solid ${props => props.theme.colors.accents.primary};
  }

  height: 55px;
  padding: 10px 40px 10px 20px;
`;

const StyledIcon = styled(Icon)`
  width: 20px;
  height: 20px;
  position: absolute;
  top: 17px;
  right: 15px;
  fill: ${props => props.theme.colors.text.inactive};
`;

interface Props {
  className?: string;
  onChange?(e: ChangeEvent<HTMLInputElement>): void;
}

export const SearchInput: FC<Props> = ({ className, onChange }) => {
  const { t } = useTranslation();

  return (
    <Wrapper className={className}>
      <Input onChange={onChange} placeholder={`${t('Search')} ...`} />
      <StyledIcon svgComponent={SearchSvg} />
    </Wrapper>
  );
};
