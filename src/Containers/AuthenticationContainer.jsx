import { useState } from "react";
import { shape } from "prop-types";
import { RegisterForm, LoginForm } from '../Components';

const AuthenticationContainer = ({ firebase }) => {
  const [form, setForm] = useState(1);

  const handleRegister = async (email, password) => {
    await firebase.auth().createUserWithEmailAndPassword(email, password);
  };

  const handleLogin = async (email, password) => {
    await firebase.auth().signInWithEmailAndPassword(email, password);
  };

  return form === 1 ? (
    <RegisterForm handleSubmit={handleRegister} setForm={setForm} />
  ) : (
    <LoginForm handleSubmit={handleLogin} setForm={setForm} />
  );
}

AuthenticationContainer.propTypes = {
  firebase: shape({}),
};

AuthenticationContainer.defaultProps = {
  firebase: {},
};

export default AuthenticationContainer;
