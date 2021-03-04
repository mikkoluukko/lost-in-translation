import TranslatorForm from '../forms/TranslatorForm';
import { getStorage, setStorage } from '../../utils/localStorage';
import { Redirect, Link, useHistory } from 'react-router-dom';

const SignText = (props) => {
  let originalText = '';
  if (props.display) {
    let { translations } = getStorage('react_app_session');
    // originalText = translations[translations.length - 1];
    originalText = 'sss'
  }

  return (
    <div>
      <h1>Sign text</h1>
      <h2>{originalText}</h2>
    </div>
  )
};

export default SignText;
