import { StoreError } from 'store/storeError';
import { storeFactory } from 'store/storeFactory';
import { Action as GenericAction, ActionWithPayload, Resource } from 'store/types';
import { Post } from 'types/post';

import { reducer } from './reducer';

export type Action =
  | GenericAction<'Posts/LoadInitiated'>
  | ActionWithPayload<'Posts/Loaded', Post[]>
  | ActionWithPayload<'Posts/LoadFailed', StoreError>;

export type State = Resource<Post[]> | null;

const initialState: State = null;

export const {
  dispatchContext: PostsDispatchContext,
  stateContext: PostsStateContext,
  provider: PostsStoreProvider,
} = storeFactory(reducer, initialState);
