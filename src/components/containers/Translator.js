import TranslatorForm from '../forms/TranslatorForm';
import SignText from './SignText'
import { getStorage, setStorage } from '../../utils/localStorage';
import { Redirect, Link, useHistory } from 'react-router-dom';

const Translator = () => {
  let displayTranslation = false;

  const handleTranslate = (translation) => {
    let { user, translations } = getStorage('react_app_session');
    if (translations.length === 10) {
      translations.shift();      
    }
    translations.push(translation);
    setStorage('react_app_session', { user, translations });
    history.replace('/translator');
  };

  const handleLogoutClick = (ev) => {
    localStorage.clear();
    history.replace('/translator');
  };

  const history = useHistory();
  const { user } = getStorage('react_app_session');
  return (
    <div>
      {!user && <Redirect to="/" />}
      <Link to="/profile">{user}'s profile page</Link>
      <h1>Welcome to the Translator</h1>
      <TranslatorForm translate={handleTranslate} />
      <SignText display={displayTranslation}/>
      <button type="button" onClick={handleLogoutClick}>
        Logout
      </button>
    </div>
  )
};

export default Translator;
