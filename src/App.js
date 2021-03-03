import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import './App.css';
import Login from './components/containers/Login';
import Dashboard from './components/containers/Dashboard';
import Profile from './components/containers/Profile';
import NotFound from './components/containers/NotFound';

function App() {
  return (
    <Router>
      <div className="App">
        <main>
          <Switch>
            <Route exact path="/" component={ Login }/>
            <Route exact path="/dashboard" component={ Dashboard }/>
            <Route exact path="/profile" component={ Profile }/>
            <Route exact path="/*" component={ NotFound }/>
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
