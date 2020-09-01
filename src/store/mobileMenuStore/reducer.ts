import { Action, State } from './provider';

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'Menu/Set': {
      return action.payload;
    }

    default: {
      const _ignore = action;
      return state;
    }
  }
};
