import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'

// Componentes
import { Navigation } from './UIcomponents';
import {
  AuthenticationContainer,
  AboutContainer,
  IPCContainer,
  ProfileContainer
} from './Containers';
import { store } from './reducers';

// Firebase
import 'firebase/auth';
import { useFirebaseApp, useUser } from 'reactfire';

// App CSS
import './App.css';

function App() {
  const firebase = useFirebaseApp();
  const user = useUser();

  const userInfo = user.data;
  console.warn(user, userInfo)

  return (
    <div className="App">
      {!userInfo ? (
        <AuthenticationContainer firebase={firebase} />
      ) : (
        <Provider store={store}>
          <Router>
            <Navigation user={user} />
            <Switch>
              <Route path="/ipc">
                <IPCContainer /> 
              </Route>
              <Route path="/about">
                <AboutContainer />
              </Route>
              <Route path="/user">
                <ProfileContainer userInfo={userInfo} firebase={firebase} />
              </Route>
              <Redirect exact from="/" to="/ipc" />
            </Switch>
          </Router>
        </Provider>
      )}
    </div>
  );
}

export default App;
