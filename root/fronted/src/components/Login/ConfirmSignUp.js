import React from 'react';
import Button from '@mui/material/Button';

function ConfirmSignUp(props) {
  return (
    <div>
      <input
        name="confirmationCode"
        placeholder="Confirmation Code"
        onChange={e => {
          e.persist();
          props.updateFormState(e);
        }}
      />
      <Button onClick={props.confirmSignUp} title="Confirm Sign Up" />
    </div>
  );
}

export default ConfirmSignUp;
