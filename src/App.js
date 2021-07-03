import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import { Navigation } from './UIcomponents';
import { AboutContainer, IPCContainer } from './Containers';

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <Route path="/ipc">
            <IPCContainer /> 
          </Route>
          <Route path="/about">
            <AboutContainer />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
