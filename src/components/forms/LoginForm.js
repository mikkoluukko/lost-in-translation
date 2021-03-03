import { useState } from 'react';

const LoginForm = (props) => {
  const [username, setUsername] = useState('');
  const handleLoginClick = (ev) => {
    props.complete(username);
  };

  const handleUsernameChange = (ev) => setUsername(ev.target.value.trim());

  return (
    <form>
      <div>
        <label>Name: </label>
        <input
          type="text"
          placeholder="What's your name?"
          onChange={handleUsernameChange}
        />
      </div>
      <div>
        <button type="button" onClick={handleLoginClick}>
          Login
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
