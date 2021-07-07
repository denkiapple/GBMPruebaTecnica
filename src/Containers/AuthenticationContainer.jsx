import 'firebase/auth';
import { useFirebaseApp } from 'reactfire';

import { AuthenticationForm } from '../Components';

const AuthenticationContainer = () => {
  const firebase = useFirebaseApp();

  const handleSubmit = async (email, password) => {
    await firebase.auth().createUserWithEmailandPassword(email, password);
  };

  return (
    <AuthenticationForm handleSubmit={handleSubmit} />
  );
}

export default AuthenticationContainer;
