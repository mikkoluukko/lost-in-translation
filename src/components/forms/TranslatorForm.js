import { useState } from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const TranslatorForm = (props) => {
  const [originalText, setOriginalText] = useState('');
  const handleTranslateClick = (ev) => {
    props.translate(originalText);
  };

  const handleTextChange = (ev) =>
    setOriginalText(ev.target.value.trim().toLowerCase());

  return (
    <Row className="justify-content-md-center">
      <Col md="5">
        <InputGroup>
          <FormControl
            placeholder="Enter text to translate"
            onChange={handleTextChange}
          />
          <InputGroup.Append>
            <Button variant="outline-secondary" onClick={handleTranslateClick}>
              Translate
            </Button>
          </InputGroup.Append>
        </InputGroup>
      </Col>
    </Row>
  );
};

export default TranslatorForm;
