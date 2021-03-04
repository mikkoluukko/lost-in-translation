import { useState } from 'react';

const TranslatorForm = (props) => {
  const [originalText, setOriginalText] = useState('');
  const handleLoginClick = (ev) => {
    props.translate(originalText);
  };

  const handleTextChange = (ev) => setOriginalText(ev.target.value.trim());

  return (
    <form>
      <div>
        <label>Original text: </label>
        <input
          type="text"
          placeholder="Enter text to translate"
          onChange={handleTextChange}
        />
      </div>
      <div>
        <button type="button" onClick={handleLoginClick}>
          Translate
        </button>
      </div>
    </form>
  );
};

export default TranslatorForm;
