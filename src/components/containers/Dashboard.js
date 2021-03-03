import { getStorage } from '../../utils/localStorage';
import { Redirect, Link, useHistory } from 'react-router-dom';

const Dashboard = () => {
  const handleLogoutClick = (ev) => {
    localStorage.clear();
    history.replace('/dashboard');
  };

  const history = useHistory();
  const { user } = getStorage('react_app_session');
  return (
    <div>
      {!user && <Redirect to="/" />}
      <Link to="/profile">{user}'s profile page</Link>
      <h1>Welcome to the Dashboard</h1>
      <button type="button" onClick={handleLogoutClick}>
        Logout
      </button>
    </div>
  )
};

export default Dashboard;
