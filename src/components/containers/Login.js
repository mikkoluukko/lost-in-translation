import LoginForm from '../forms/LoginForm';
import { setStorage, getStorage } from '../../utils/localStorage';
import { Redirect, useHistory } from 'react-router-dom';

const Login = () => {
  const { user } = getStorage('react_app_session');
  const history = useHistory();

  const handleLoginComplete = (user) => {
    setStorage('react_app_session', { user });
    history.replace('/dashboard');
  };

  return (
    <div>
      {user && <Redirect to="/dashboard" />}
      <h1>Login to translator</h1>
      <LoginForm complete={handleLoginComplete} />
    </div>
  );
};

export default Login;
