import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Login from './components/containers/Login';
import Translator from './components/containers/Translator';
import Profile from './components/containers/Profile';
import NotFound from './components/containers/NotFound';

function App() {
  return (
    <Router>
      <Container className="App">
        <main>
          <Switch>
            <Route exact path="/" component={ Login }/>
            <Route exact path="/translator" component={ Translator }/>
            <Route exact path="/profile" component={ Profile }/>
            <Route exact path="/*" component={ NotFound }/>
          </Switch>
        </main>
      </Container>
    </Router>
  );
}

export default App;
