import { getServices } from 'apiServices/services/services';
import React, { useEffect } from 'react';
import { assetIsNotStoreError, newStoreError } from 'store/storeError';
import { Dispatch, Loading } from 'store/types';

import {
  Action,
  ServicesData,
  ServicesDispatchContext,
  ServicesStateContext,
  State,
} from './provider';

export const useState = (): State => {
  const state = React.useContext(ServicesStateContext);
  if (state === undefined) {
    throw new Error('services state is not initialized');
  }
  return state;
};

export const useDispatch = (): Dispatch<Action> => {
  const dispatch = React.useContext(ServicesDispatchContext);
  if (dispatch === undefined) {
    throw new Error('services state is not initialized');
  }
  return dispatch;
};

export const useServicesResource = (): 'Loading' | ServicesData => {
  const state = useState();
  const dispatch = useDispatch();
  useEffect(() => {
    if (!state) {
      dispatch({ type: 'Services/LoadInitiated' });
      getServices()
        .then(data => dispatch({ type: 'Services/Loaded', payload: data }))
        .catch(err =>
          dispatch({
            type: 'Services/LoadFailed',
            payload: newStoreError(err.message, err.code),
          })
        );
    }
  }, [state, dispatch]);

  assetIsNotStoreError(state);

  return state || Loading;
};
