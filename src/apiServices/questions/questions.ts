import axios from 'axios';
import { Question } from 'types/question';

export const getQuestions = async (): Promise<Question[]> => {
  const questions = await axios.get<Question[]>('/question/all');

  return questions.data;
};
