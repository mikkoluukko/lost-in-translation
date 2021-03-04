import { getStorage } from '../../utils/localStorage';
import { Redirect, Link } from 'react-router-dom';

const Profile = () => {
  const { user } = getStorage('react_app_session');
  return (
    <div>
      {!user && <Redirect to="/" />}
      <Link to="/translator">Back to translator</Link>
      <h1>Welcome to the profile</h1>

    </div>
  )
};

export default Profile;