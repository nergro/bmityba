import { ReactComponent as CalendarSvg } from 'assets/UI/calendar.svg';
import { Icon } from 'Atoms/Icon';
import { P } from 'Atoms/text';
import moment from 'moment';
import React, { FC } from 'react';
import styled from 'styled-components/macro';
import { LatestPost as LatestPostInfo } from 'types/blog';

const Wrapper = styled.div`
  display: flex;
`;

const Image = styled.img`
  width: 70px;
  height: 70px;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`;

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

const Title = styled(P)`
  margin-top: 10px;
`;

interface Props {
  className?: string;
  latestPost: LatestPostInfo;
}

export const LatestPost: FC<Props> = ({ className, latestPost: latestBlog }) => {
  const date = moment(latestBlog.date).format('DD MMMM, YYYY');
  return (
    <Wrapper className={className}>
      <Image src={latestBlog.image} />
      <Info>
        <DateWrapper>
          <StyledIcon svgComponent={CalendarSvg} />
          <Date>{date}</Date>
        </DateWrapper>
        <Title>{latestBlog.title}</Title>
      </Info>
    </Wrapper>
  );
};
