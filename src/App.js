import { Navigation } from './UIcomponents';
import { AboutContainer, IPCContainer } from './Containers';

import './App.css';

function App() {
  return (
    <div className="App">
      <Navigation />
      <AboutContainer />
      <IPCContainer />   
    </div>
  );
}

export default App;
