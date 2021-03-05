import { useState } from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const TranslatorForm = (props) => {
  const [warningText, setWarningText] = useState('Input required.');
  const [originalText, setOriginalText] = useState('');
  const [validated, setValidated] = useState(false);

  const handleTranslateClick = () => {
    console.log(originalText.length);
    if (originalText.length === 0 || originalText.length > 40) {
      setValidated(true);
    } else {
      props.translate(originalText);
      setOriginalText('');
      setValidated(false);
    }
  };

  const handleTextChange = (ev) => {
    if (ev.target.value.trim().length > 40) {
      setWarningText('Maximum input length is 40 characters.');
    } else if (ev.target.value.trim().length === 0) {
      setWarningText('Input required.');
    }
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
      <Col md="5">
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <InputGroup>
            <FormControl
              pattern=".{0,40}"
              required
              placeholder="Enter text to translate"
              value={originalText}
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
