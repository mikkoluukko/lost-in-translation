import LoginForm from '../forms/LoginForm';
import { setStorage, getStorage } from '../../utils/localStorage';
import { Redirect, useHistory } from 'react-router-dom';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const Login = () => {
  const { user } = getStorage('react_app_session');
  const history = useHistory();

  const handleLoginComplete = (user) => {
    const translations = [];
    setStorage('react_app_session', { user, translations });
    history.replace('/translator');
  };

  return (
    <Row className="justify-content-md-center">
      <Col md="4">
        {user && <Redirect to="/translator" />}
        <h1 className="my-4">Login to translator</h1>
        <LoginForm className="my-4" loginComplete={handleLoginComplete} />
      </Col>
    </Row>
  );
};

export default Login;
