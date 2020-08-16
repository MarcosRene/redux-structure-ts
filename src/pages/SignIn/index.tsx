import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { StoreState } from '../../store/createStore';
import { signInRequest } from '../../store/modules/auth/actions';

// import { Container } from './styles';

const SignIn: React.FC = () => {
  const { loading } = useSelector((state: StoreState) => state.auth);
  const dispatch = useDispatch();

  console.log(loading);
  
  const handleDispatch = useCallback(() => {
    dispatch(signInRequest({ email: 'renemoura@gmail.com', password: '123123' }));
  }, [dispatch])

  return (
    <div>
      <input type="text" defaultValue="renemoura@gmail.com" />
      <input type="password" defaultValue="123123" />
      <button onClick={handleDispatch}>Entrar</button>
    </div>
  );
}

export default SignIn;