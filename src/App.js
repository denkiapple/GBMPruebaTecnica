import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import { Navigation } from './UIcomponents';
import { AboutContainer, IPCContainer } from './Containers';
import { store } from './reducers';

import './App.css';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
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
      </Provider>
    </div>
  );
}

export default App;
