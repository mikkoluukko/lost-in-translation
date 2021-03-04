import { getStorage } from '../../utils/localStorage';

const TranslatedBox = (props) => {
  let originalText = [];
  let signs = [];
  if (props.display) {
    let { translations } = getStorage('react_app_session');
    originalText = [...translations[translations.length - 1]];
    signs = originalText.map((letter, index) => (
      <img class="sign"
        key={index}
        alt={letter}
        src={process.env.PUBLIC_URL + `/images/individial_signs/${letter}.png`}
      />
    ));
  }

  return (
    <div>
      <div className="my-4">{signs}</div>
    </div>
  );
};

export default TranslatedBox;
