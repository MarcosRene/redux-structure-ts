import { action } from 'typesafe-actions';

interface signInRequestProps {
  email: string;
  password: string;
}

interface signInSuccessProps {
  token: string;
}

export function signInRequest({ email, password }: signInRequestProps) {
  return action('@auth/SIGN_IN_REQUEST' , {
    email, password
  });
}

export function signInSuccess({ token }: signInSuccessProps) {
  return action('@auth/SIGN_IN_SUCCESS' , {
    token
  });
}

export function signFailure() {
  return action('@auth/SIGN_FAILURE');
}