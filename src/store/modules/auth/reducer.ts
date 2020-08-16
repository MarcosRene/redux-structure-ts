import produce from 'immer';

import { AuthState, AuthAction } from './types';

const INITIAL_STATE: AuthState = {
  loading: false,
  signed: false
}

export default function auth(state = INITIAL_STATE, action: AuthAction) : AuthState {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@auth/SIGN_IN_REQUEST': {
        draft.loading = true;
        break;
      }

      case '@auth/SIGN_IN_SUCCESS': {
        draft.loading = false;
        draft.signed = true;
        break;
      }

      case '@auth/SIGN_FAILURE': {
        draft.loading = false;
        break;
      }
    
      default:
    }
  });
}