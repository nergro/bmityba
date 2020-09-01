import { storeFactory } from 'store/storeFactory';
import { ActionWithPayload } from 'store/types';

import { reducer } from './reducer';

export type Action = ActionWithPayload<'Menu/Set', boolean>;

export type State = boolean;

export const initialState: State = false;

export const {
  dispatchContext: MobileMenuDispatchContext,
  stateContext: MobileMenuStateContext,
  provider: MobileMenuStoreProvider,
} = storeFactory(reducer, initialState);
