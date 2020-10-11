import { getPostCategories } from 'apiServices/postCategories/postCategories';
import React, { useEffect, useMemo } from 'react';
import { assetIsNotStoreError, newStoreError } from 'store/storeError';
import { Dispatch, isLoading, Loading } from 'store/types';
import { PostCategory } from 'types/postCategory';

import { Action, PostCategoryDispatchContext, PostCategoryStateContext, State } from './provider';

export const useState = (): State => {
  const state = React.useContext(PostCategoryStateContext);
  if (state === undefined) {
    throw new Error('Post category state is not initialized');
  }
  return state;
};

export const useDispatch = (): Dispatch<Action> => {
  const dispatch = React.useContext(PostCategoryDispatchContext);
  if (dispatch === undefined) {
    throw new Error('Post category state is not initialized');
  }
  return dispatch;
};

export const usePostCategoriesResource = (): 'Loading' | PostCategory[] => {
  const state = useState();
  const dispatch = useDispatch();
  useEffect(() => {
    if (!state) {
      dispatch({ type: 'PostCategory/LoadInitiated' });
      getPostCategories()
        .then(data => dispatch({ type: 'PostCategory/Loaded', payload: data }))
        .catch(err =>
          dispatch({
            type: 'PostCategory/LoadFailed',
            payload: newStoreError(err.message, err.code),
          })
        );
    }
  }, [state, dispatch]);

  assetIsNotStoreError(state);

  return state || Loading;
};

export const usePostCategories = (): PostCategory[] => {
  const Posts = usePostCategoriesResource();

  return useMemo(() => (isLoading(Posts) ? [] : Posts), [Posts]);
};
