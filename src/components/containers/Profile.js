import { getStorage } from '../../utils/localStorage';
import { Redirect } from 'react-router-dom';

const Profile = () => {
  const { user } = getStorage('react_app_session');
  return (
    <div>
      {!user && <Redirect to="/" />}
    
    <h1>Welcome to the profile</h1>

  </div>
  )
};

export default Profile;