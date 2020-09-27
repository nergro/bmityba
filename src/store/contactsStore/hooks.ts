import { getContacts } from 'apiServices/contacts/contacts';
import React, { useEffect, useMemo } from 'react';
import { dummyContacts } from 'services/dummyData/dummyContacts';
import { assetIsNotStoreError, newStoreError } from 'store/storeError';
import { Dispatch, isLoading, Loading } from 'store/types';
import { Contacts } from 'types/contacts';

import { Action, ContactsDispatchContext, ContactsStateContext, State } from './provider';

export const useState = (): State => {
  const state = React.useContext(ContactsStateContext);
  if (state === undefined) {
    throw new Error('Contacts state is not initialized');
  }
  return state;
};

export const useDispatch = (): Dispatch<Action> => {
  const dispatch = React.useContext(ContactsDispatchContext);
  if (dispatch === undefined) {
    throw new Error('Contacts state is not initialized');
  }
  return dispatch;
};

export const useContactsResource = (): 'Loading' | Contacts => {
  const state = useState();
  const dispatch = useDispatch();
  useEffect(() => {
    if (!state) {
      dispatch({ type: 'Contacts/LoadInitiated' });
      getContacts()
        .then(data => dispatch({ type: 'Contacts/Loaded', payload: data }))
        .catch(err =>
          dispatch({
            type: 'Contacts/LoadFailed',
            payload: newStoreError(err.message, err.code),
          })
        );
    }
  }, [state, dispatch]);

  assetIsNotStoreError(state);

  return state || Loading;
};

export const useContacts = (): Contacts => {
  const contacts = useContactsResource();

  return useMemo(() => (isLoading(contacts) ? dummyContacts : contacts), [contacts]);
};
