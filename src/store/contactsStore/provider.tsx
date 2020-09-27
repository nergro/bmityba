import { StoreError } from 'store/storeError';
import { storeFactory } from 'store/storeFactory';
import { Action as GenericAction, ActionWithPayload, Resource } from 'store/types';
import { Contacts } from 'types/contacts';

import { reducer } from './reducer';

export type Action =
  | GenericAction<'Contacts/LoadInitiated'>
  | ActionWithPayload<'Contacts/Loaded', Contacts>
  | ActionWithPayload<'Contacts/LoadFailed', StoreError>;

export type State = Resource<Contacts> | null;

const initialState: State = null;

export const {
  dispatchContext: ContactsDispatchContext,
  stateContext: ContactsStateContext,
  provider: ContactsStoreProvider,
} = storeFactory(reducer, initialState);
