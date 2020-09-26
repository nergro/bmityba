import { Loading } from 'store/types';

import { Action, State } from './provider';

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'Services/LoadInitiated': {
      return Loading;
    }
    case 'Services/Loaded': {
      console.log(action.payload);
      const dict = action.payload.reduce((acc, value) => ({ ...acc, [value.id]: value }), {});
      return {
        list: action.payload,
        dict,
      };
    }
    case 'Services/LoadFailed': {
      return action.payload;
    }
    default: {
      const _ignore: never = action; // check if all cases are handled
      return state;
    }
  }
};
