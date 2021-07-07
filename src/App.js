import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'

import { Navigation } from './UIcomponents';
import {
  AuthenticationContainer,
  AboutContainer,
  IPCContainer,
  ProfileContainer
} from './Containers';
import { store } from './reducers';

import './App.css';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <AuthenticationContainer />
        <Router>
          <Navigation />
          <Switch>
            <Route path="/ipc">
              <IPCContainer /> 
            </Route>
            <Route path="/about">
              <AboutContainer />
            </Route>
            <Route path="/user">
              <ProfileContainer />
            </Route>
            <Redirect exact from="/" to="/ipc" />
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
