import { StoreError } from 'store/storeError';
import { storeFactory } from 'store/storeFactory';
import { Action as GenericAction, ActionWithPayload, Resource } from 'store/types';
import { Service, Services } from 'types/service';

import { reducer } from './reducer';

export type Action =
  | GenericAction<'Services/LoadInitiated'>
  | ActionWithPayload<'Services/Loaded', Service[]>
  | ActionWithPayload<'Services/LoadFailed', StoreError>;

export interface ServicesData {
  list: Service[];
  dict: Services;
}

export type State = Resource<ServicesData> | null;

const initialState: State = null;

export const {
  dispatchContext: ServicesDispatchContext,
  stateContext: ServicesStateContext,
  provider: ServicesStoreProvider,
} = storeFactory(reducer, initialState);
