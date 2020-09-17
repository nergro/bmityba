import { P } from 'Atoms/text';
import { QuestionToggle } from 'Molecules/QuestionToggle';
import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { getLocale } from 'services/localStorage';
import styled from 'styled-components/macro';
import { Question } from 'types/question';

const Title = styled(P)`
  text-align: center;
  font-size: 36px;
  @media (max-width: ${props => props.theme.breakpoints.l}) {
    font-size: 30px;
  }
`;

const QuestionsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

const StyledQuestion = styled(QuestionToggle)`
  width: 80%;
  &:not(:last-child) {
    margin-bottom: 30px;
  }
`;

interface Props {
  className?: string;
  questions: Question[];
}

export const Questions: FC<Props> = ({ className, questions }) => {
  const locale = getLocale();
  const { t } = useTranslation();

  return (
    <>
      <Title font="Roboto" weight="400" color="secondaryAccent">
        {t('Frequently Asked Questions')}
      </Title>
      <QuestionsWrapper className={className}>
        {questions.map((x, i) => (
          <StyledQuestion
            key={i}
            question={locale === 'en' ? x.questionEN : x.questionLT}
            answer={locale === 'en' ? x.answerEN : x.answerLT}
          />
        ))}
      </QuestionsWrapper>
    </>
  );
};
