import { StoreError } from 'store/storeError';
import { storeFactory } from 'store/storeFactory';
import { Action as GenericAction, ActionWithPayload, Resource } from 'store/types';
import { Question } from 'types/question';

import { reducer } from './reducer';

export type Action =
  | GenericAction<'Questions/LoadInitiated'>
  | ActionWithPayload<'Questions/Loaded', Question[]>
  | ActionWithPayload<'Questions/LoadFailed', StoreError>;

export type State = Resource<Question[]> | null;

const initialState: State = null;

export const {
  dispatchContext: QuestionsDispatchContext,
  stateContext: QuestionsStateContext,
  provider: QuestionsStoreProvider,
} = storeFactory(reducer, initialState);
