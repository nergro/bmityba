import React from 'react';
import { Dispatch } from 'store/types';
import { CustomError, ErrorCodes } from 'types/errorTypes';

import { Action, LocaleDispatchContext, LocaleStateContext, State } from './provider';

export const useState = (): State => {
  const state = React.useContext(LocaleStateContext);
  if (state === undefined) {
    throw new CustomError('LocaleStore', ErrorCodes.StoreNotInitialized);
  }
  return state;
};

export const useDispatch = (): Dispatch<Action> => {
  const dispatch = React.useContext(LocaleDispatchContext);
  if (dispatch === undefined) {
    throw new CustomError('LocaleStore', ErrorCodes.StoreNotInitialized);
  }
  return dispatch;
};

export const useLocale = (): string => {
  const state = useState();

  return state;
};
