import { getQuestions } from 'apiServices/questions/questions';
import React, { useEffect } from 'react';
import { assetIsNotStoreError, newStoreError } from 'store/storeError';
import { Dispatch, Loading } from 'store/types';
import { Question } from 'types/question';

import { Action, QuestionsDispatchContext, QuestionsStateContext, State } from './provider';

export const useState = (): State => {
  const state = React.useContext(QuestionsStateContext);
  if (state === undefined) {
    throw new Error('Questions state is not initialized');
  }
  return state;
};

export const useDispatch = (): Dispatch<Action> => {
  const dispatch = React.useContext(QuestionsDispatchContext);
  if (dispatch === undefined) {
    throw new Error('Questions state is not initialized');
  }
  return dispatch;
};

export const useQuestionsResource = (): 'Loading' | Question[] => {
  const state = useState();
  const dispatch = useDispatch();
  useEffect(() => {
    if (!state) {
      dispatch({ type: 'Questions/LoadInitiated' });
      getQuestions()
        .then(data => dispatch({ type: 'Questions/Loaded', payload: data }))
        .catch(err =>
          dispatch({
            type: 'Questions/LoadFailed',
            payload: newStoreError(err.message, err.code),
          })
        );
    }
  }, [state, dispatch]);

  assetIsNotStoreError(state);

  return state || Loading;
};
