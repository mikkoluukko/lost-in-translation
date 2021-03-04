import TranslatorForm from '../forms/TranslatorForm';
import TranslatedBox from './TranslatedBox';
import { useState } from 'react';
import { getStorage, setStorage } from '../../utils/localStorage';
import { Redirect, useHistory } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const Translator = () => {
  const [displayTranslation, setDisplayTranslation] = useState(false);

  const handleTranslate = (translation) => {
    let { user, translations } = getStorage('react_app_session');
    if (translations.length === 10) {
      translations.shift();
    }
    translations.push(translation);
    setStorage('react_app_session', { user, translations });
    history.replace('/translator');
    setDisplayTranslation(true);
  };

  const redirect = () => {
    history.push('/profile')
  }

  const history = useHistory();
  const { user } = getStorage('react_app_session');
  return (
    <div>
      {!user && <Redirect to="/" />}
      <Button className="mt-4" variant="outline-secondary" type="button" onClick={redirect}>
        {user}'s profile page
      </Button>
      <h1 className="my-4">Sign Language Translator</h1>
      <TranslatorForm translate={handleTranslate} />
      <TranslatedBox display={displayTranslation} />
    </div>
  );
};

export default Translator;
