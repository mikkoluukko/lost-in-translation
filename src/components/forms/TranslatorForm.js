import { useState } from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

// Input field's value is bound to variable inputText. Separate variable
// originalText is used as the argument for the translate function. This is to
// allow entering of whitespace and uppercase characters in input field (even
// though leading and trailing whitespace are trimmed off and all characters
// are converted to lowercase in translation).
const TranslatorForm = (props) => {
  const [warningText, setWarningText] = useState('Input required.');
  const [inputText, setInputText] = useState('');
  const [originalText, setOriginalText] = useState('');
  const [validated, setValidated] = useState(false);

  const handleTranslateClick = () => {
    if (
      originalText.length === 0 ||
      originalText.length > 40 ||
      !originalText.match(/^[A-Za-z ]+$/)
    ) {
      setValidated(true);
    } else {
      props.translate(originalText);
      setOriginalText('');
      setInputText('');
      setValidated(false);
    }
  };

  const handleTextChange = (ev) => {
    if (ev.target.value.trim().length > 40) {
      setWarningText('Maximum input length is 40 characters.');
    } else if (ev.target.value.trim().length === 0) {
      setWarningText('Input required.');
    } else if (!ev.target.value.match(/^[A-Za-z ]+$/)) {
      setWarningText('Only letters from a to z and whitespace allowed.');
    }
    setInputText(ev.target.value);
    setOriginalText(ev.target.value.trim().toLowerCase());
  };

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    if (form.checkValidity() === false) {
      event.stopPropagation();
    }
    handleTranslateClick();
  };

  return (
    <Row className="justify-content-md-center">
      <Col lg="6" md="8">
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <InputGroup>
            <FormControl
              pattern="[A-Za-z ]+.{0,40}"
              required
              placeholder="Enter text to translate"
              value={inputText}
              onChange={handleTextChange}
            />
            <InputGroup.Append>
              <Button variant="outline-secondary" type="submit">
                Translate
              </Button>
            </InputGroup.Append>
            <Form.Control.Feedback type="invalid">
              {warningText}
            </Form.Control.Feedback>
          </InputGroup>
        </Form>
      </Col>
    </Row>
  );
};

export default TranslatorForm;
