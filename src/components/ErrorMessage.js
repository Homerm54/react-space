import React, { useContext } from 'react';
import { context } from 'context';
import { clearError } from 'context/actions';

import Alert from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';
import Button from '@material-ui/core/Button';
// import { makeStyles } from '@material-ui/core/styles';



/**
 * This is an Error Message, this component will fetch an
 * error in the global state, and render a message if needed.
 */

export default function ErrorMessage() {

  const { state, dispatch } = useContext(context);


  function handleClose() {

    // console.log('Error Message Closed');
    dispatch(clearError()); // Should handle the error some way here
  }

  function handleReload() {

    // console.log('Reload fired!');
    document.location.reload();
  }


  return (
    <Snackbar open={state.error? true:false}>
      <Alert
        severity='error'
        onClose={handleClose}
        action={ // Render this conditionally - if fatal error
          state.error.fatal?
          <Button color="inherit" size="small" onClick={handleReload}>
            Reload
          </Button>
          :
          undefined // Show the X to close the Alert
        }
      >
        Oops, {state.error.message}
    </Alert>
    </Snackbar>
  )
}