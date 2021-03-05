import { getStorage, clearStorage } from '../../utils/localStorage';
import { Redirect, useHistory } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const Profile = (props) => {
  const history = useHistory();

  const handleLogoutClick = () => {
    clearStorage();
    history.replace('/translator');
  };

  const { user, translations } = getStorage('react_app_session');
  let translationHistory = [];
  if (translations.length !== 0) {
    translationHistory = translations.map((translation, index) => (
      <ListGroup.Item key={index}>{translation}</ListGroup.Item>
    ));
  }

  const redirect = () => {
    history.push('/translator');
  };

  return (
    <Row className="justify-content-md-center">
      <Col md="5">
        {!user && <Redirect to="/" />}
        <Button
          className="mt-4 mx-2"
          variant="outline-secondary"
          type="button"
          onClick={redirect}
        >
          Back to translator
        </Button>
        <Button
          className="mt-4 mx-2"
          variant="outline-secondary"
          type="button"
          onClick={handleLogoutClick}
        >
          Logout and clear history
        </Button>
        <h1 className="my-4">{user}'s translation history:</h1>
        <ListGroup>{translationHistory}</ListGroup>
      </Col>
    </Row>
  );
};

export default Profile;
