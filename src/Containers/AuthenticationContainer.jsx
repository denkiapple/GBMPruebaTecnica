import { shape } from "prop-types";
import { AuthenticationForm } from '../Components';

const AuthenticationContainer = ({ firebase }) => {
  const handleSubmit = async (email, password) => {
    await firebase.auth().createUserWithEmailAndPassword(email, password);
  };

  return (
    <AuthenticationForm handleSubmit={handleSubmit} />
  );
}

AuthenticationContainer.propTypes = {
  firebase: shape({}),
};

AuthenticationContainer.defaultProps = {
  firebase: {},
};

export default AuthenticationContainer;
