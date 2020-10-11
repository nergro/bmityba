import { ReactComponent as CalendarSvg } from 'assets/UI/calendar.svg';
import { Icon } from 'Atoms/Icon';
import { P } from 'Atoms/text';
import moment from 'moment';
import React, { FC } from 'react';
import { getLocale } from 'services/localStorage';
import styled from 'styled-components/macro';

const DateWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const StyledIcon = styled(Icon)`
  width: 15px;
  height: 15px;
  fill: ${props => props.theme.colors.accents.primary};
  margin-right: 10px;
`;

const Date = styled(P)`
  && {
    font-size: 14px;
  }
`;

interface Props {
  className?: string;
  date: string;
}

export const DateField: FC<Props> = ({ className, date }) => {
  const formatedDate = moment(date).format('DD MMMM, YYYY');

  const locale = getLocale();
  const isLT = locale === 'lt';
  isLT ? moment.locale('lt') : moment.locale('en');

  return (
    <DateWrapper className={className}>
      <StyledIcon svgComponent={CalendarSvg} />
      <Date>{formatedDate}</Date>
    </DateWrapper>
  );
};
