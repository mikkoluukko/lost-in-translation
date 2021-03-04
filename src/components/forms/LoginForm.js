import { useState } from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

const LoginForm = (props) => {
  const [username, setUsername] = useState('');
  const handleLoginClick = (ev) => {
    props.loginComplete(username);
  };

  const handleUsernameChange = (ev) => setUsername(ev.target.value.trim());

  return (
    <div>
      <InputGroup className="mb-3">
        <FormControl
          placeholder="Enter username"
          onChange={handleUsernameChange}
        />
        <InputGroup.Append>
          <Button variant="outline-secondary" onClick={handleLoginClick}>
            Login
          </Button>
        </InputGroup.Append>
      </InputGroup>
    </div>
  );
};

export default LoginForm;
