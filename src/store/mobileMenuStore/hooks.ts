import React from 'react';
import { Dispatch } from 'store/types';
import { CustomError, ErrorCodes } from 'types/errorTypes';

import { Action, MobileMenuDispatchContext, MobileMenuStateContext, State } from './provider';

export const useState = (): State => {
  const state = React.useContext(MobileMenuStateContext);
  if (state === undefined) {
    throw new CustomError('MobileMenuStore', ErrorCodes.StoreNotInitialized);
  }
  return state;
};

export const useDispatch = (): Dispatch<Action> => {
  const dispatch = React.useContext(MobileMenuDispatchContext);
  if (dispatch === undefined) {
    throw new CustomError('MobileMenuStore', ErrorCodes.StoreNotInitialized);
  }
  return dispatch;
};

export const useMobileMenu = (): boolean => {
  const state = useState();

  return state;
};
