import TranslatorForm from '../forms/TranslatorForm';
import { getStorage, setStorage } from '../../utils/localStorage';
import { Redirect, Link, useHistory } from 'react-router-dom';

const SignText = (props) => {
  let originalText = [];
  let signs = [];
  if (props.display) {
    let { translations } = getStorage('react_app_session');
    originalText = [...translations[translations.length - 1]];
    signs = originalText.map((letter) =>
      <img alt={letter} src={process.env.PUBLIC_URL + `/images/individial_signs/${letter}.png`}/>
    );
  }

  return (
    <div>
      <h1>Sign text</h1>
      <h2>{originalText}</h2>
      <div>{signs}</div>
    </div>
  )
};

export default SignText;
