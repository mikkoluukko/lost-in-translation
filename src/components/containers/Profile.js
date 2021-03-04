import { getStorage, clearStorage } from '../../utils/localStorage';
import { Redirect, useHistory } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

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
      <li key={index}>{translation}</li>
    ));
  }

  const redirect = () => {
    history.push('/translator')
  }
  
  return (
    <div>
      {!user && <Redirect to="/" />}
      <Button className="m-2" variant="info" type="button" onClick={redirect}>
        Back to translator
      </Button>
      <Button className="m-2" variant="info" type="button" onClick={handleLogoutClick}>
        Logout and clear history
      </Button>
      <h1>{user}'s translation history:</h1>
      <ul>{translationHistory}</ul>
    </div>
  );
};

export default Profile;
