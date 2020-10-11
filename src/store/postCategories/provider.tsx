import { StoreError } from 'store/storeError';
import { storeFactory } from 'store/storeFactory';
import { Action as GenericAction, ActionWithPayload, Resource } from 'store/types';
import { PostCategory } from 'types/postCategory';

import { reducer } from './reducer';

export type Action =
  | GenericAction<'PostCategory/LoadInitiated'>
  | ActionWithPayload<'PostCategory/Loaded', PostCategory[]>
  | ActionWithPayload<'PostCategory/LoadFailed', StoreError>;

export type State = Resource<PostCategory[]> | null;

const initialState: State = null;

export const {
  dispatchContext: PostCategoryDispatchContext,
  stateContext: PostCategoryStateContext,
  provider: PostCategoryStoreProvider,
} = storeFactory(reducer, initialState);
