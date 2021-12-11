import React, { useState } from 'react';
import { Auth } from 'aws-amplify';
import Login from './Login';
import SignUp from './SignUp';
import ConfirmSignUp from './ConfirmSignUp';
import Box from '@mui/material/Box';
import { useHistory } from 'react-router';
const initialFormState = {
  username: '',
  password: '',
  email: '',
  confirmationCode: ''
};

async function signIn({ username, password }, setUser, history) {
  try {
    const user = await Auth.signIn(username, password);
    const userInfo = { username: user.username, ...user.attributes };
    setUser(userInfo);
    history.push({
      pathname: '/home'
    });
    history.go(0);
  } catch (err) {
    console.log('error signing up..', err);
  }
}
async function signUp({ username, password, email }, updateFormType) {
  try {
    await Auth.signUp({
      username,
      password,
      attributes: { email }
    });
    console.log('sign up success!');
    updateFormType('confirmSignUp');
  } catch (err) {
    console.log('error signing up..', err);
  }
}
async function confirmSignUp({ username, confirmationCode }, updateFormType) {
  try {
    await Auth.confirmSignUp(username, confirmationCode);
    updateFormType('signIn');
  } catch (err) {
    console.log('error signing up..', err);
  }
}
function Form(props) {
  const [formType, updateFormType] = useState('signIn');
  const [formState, updateFormState] = useState(initialFormState);
  const history = useHistory();
  function updateForm(event) {
    const newFormState = {
      ...formState,
      [event.target.name]: event.target.value
    };
    updateFormState(newFormState);
  }

  function renderForm() {
    switch (formType) {
      case 'signUp':
        return (
          <SignUp
            signUp={() => signUp(formState, updateFormType)}
            updateFormState={e => updateForm(e)}
          />
        );
      case 'confirmSignUp':
        return (
          <ConfirmSignUp
            confirmSignUp={() => confirmSignUp(formState, updateFormType)}
            updateFormState={e => updateForm(e)}
          />
        );
      case 'signIn':
        return (
          <Login
            signIn={() => signIn(formState, updateFormType, history)}
            updateFormState={e => updateForm(e)}
          />
        );
      default:
        return null;
    }
  }

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flex: '1 0 auto',
        flexDirection: 'column'
      }}
    >
      {renderForm()}
      {formType === 'signUp' && (
        <p style={styles.toggleForm}>
          Already have an account?{' '}
          <span style={styles.anchor} onClick={() => updateFormType('signIn')}>
            Sign In
          </span>
        </p>
      )}
      {formType === 'signIn' && (
        <>
          <p style={styles.toggleForm}>
            Need an account?{' '}
            <span style={styles.anchor} onClick={() => updateFormType('signUp')}>
              Sign Up
            </span>
          </p>
        </>
      )}
    </Box>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: 150,
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    height: 45,
    marginTop: 8,
    width: 300,
    maxWidth: 300,
    padding: '0px 8px',
    fontSize: 16,
    outline: 'none',
    border: 'none',
    borderBottom: '2px solid rgba(0, 0, 0, .3)'
  },
  toggleForm: {
    fontWeight: '600',
    padding: '0px 25px',
    marginTop: '15px',
    marginBottom: 0,
    textAlign: 'center',
    color: 'rgba(0, 0, 0, 0.6)'
  },
  resetPassword: {
    marginTop: '5px'
  },
  anchor: {
    color: '#006bfc',
    cursor: 'pointer'
  }
};

export { styles, Form as default };
