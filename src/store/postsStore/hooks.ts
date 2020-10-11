import { getPosts } from 'apiServices/posts/posts';
import React, { useEffect, useMemo } from 'react';
import { assetIsNotStoreError, newStoreError } from 'store/storeError';
import { Dispatch, isLoading, Loading } from 'store/types';
import { Post } from 'types/post';

import { Action, PostsDispatchContext, PostsStateContext, State } from './provider';

export const useState = (): State => {
  const state = React.useContext(PostsStateContext);
  if (state === undefined) {
    throw new Error('Posts state is not initialized');
  }
  return state;
};

export const useDispatch = (): Dispatch<Action> => {
  const dispatch = React.useContext(PostsDispatchContext);
  if (dispatch === undefined) {
    throw new Error('Posts state is not initialized');
  }
  return dispatch;
};

export const usePostsResource = (): 'Loading' | Post[] => {
  const state = useState();
  const dispatch = useDispatch();
  useEffect(() => {
    if (!state) {
      dispatch({ type: 'Posts/LoadInitiated' });
      getPosts()
        .then(data => dispatch({ type: 'Posts/Loaded', payload: data }))
        .catch(err =>
          dispatch({
            type: 'Posts/LoadFailed',
            payload: newStoreError(err.message, err.code),
          })
        );
    }
  }, [state, dispatch]);

  assetIsNotStoreError(state);

  return state || Loading;
};

export const usePosts = (): Post[] => {
  const Posts = usePostsResource();

  return useMemo(() => (isLoading(Posts) ? [] : Posts), [Posts]);
};
