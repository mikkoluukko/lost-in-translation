import { getStorage } from '../../utils/localStorage';

const TranslatedBox = (props) => {
  let originalText = [];
  let signs = [];
  if (props.display) {
    let { translations } = getStorage('react_app_session');
    originalText = [...translations[translations.length - 1]];
    signs = originalText.map((letter, index) => {
      return letter !== ' ' ? (
        <figure className="figure sign" key={index}>
          <img
            className="figure-img"
            alt={letter}
            src={
              process.env.PUBLIC_URL + `/images/individial_signs/${letter}.png`
            }
          />
          <figcaption className="figure-caption">{letter.toUpperCase()}</figcaption>
        </figure>
      ) : (
        <div className="whitespace" key={index}></div>
      );
    });
  }

  return (
    <div>
      {signs.length > 0 && <div className="translatedBox my-4">{signs}</div>}
    </div>
  );
};

export default TranslatedBox;
