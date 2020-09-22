import { setLocale } from 'services/localStorage';

import { Action, State } from './provider';

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'Locale/Set': {
      setLocale(action.payload);
      return action.payload;
    }

    default: {
      const _ignore = action;
      return state;
    }
  }
};
