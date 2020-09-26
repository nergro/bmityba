import { storeFactory } from 'store/storeFactory';
import { ActionWithPayload } from 'store/types';
import { Locale } from 'types/locale';

import { reducer } from './reducer';

export type Action = ActionWithPayload<'Locale/Set', Locale>;

export type State = Locale;

export const initialState: State = 'lt';

export const {
  dispatchContext: LocaleDispatchContext,
  stateContext: LocaleStateContext,
  provider: LocaleStoreProvider,
} = storeFactory(reducer, initialState);
