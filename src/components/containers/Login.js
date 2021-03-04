import LoginForm from '../forms/LoginForm';
import { setStorage, getStorage } from '../../utils/localStorage';
import { Redirect, useHistory } from 'react-router-dom';

const Login = () => {
  const { user } = getStorage('react_app_session');
  const history = useHistory();

  const handleLoginComplete = (user) => {
    const translations = [];
    setStorage('react_app_session', { user, translations });
    history.replace('/translator');
  };

  return (
    <div>
      {user && <Redirect to="/translator" />}
      <h1>Login to translator</h1>
      <LoginForm complete={handleLoginComplete} />
    </div>
  );
};

export default Login;
