import { useContext } from 'react';
import { context } from 'context';
import { clearError } from 'context/actions';

// import { makeStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';
// import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';



/**
 * This is an Error Message, this component will fetch an
 * error in the global state, and render a message if needed.
 */

export default function ErrorMessage() {

  const { state, dispatch } = useContext(context);


  function handleClose() {

    // console.log('Error Message Closed');
    dispatch(clearError());
  }

  // function handleReload() {

  //   console.log('Reload fired!');
  // }


  return (
    <Snackbar open={state.error? true:false}>
      <Alert
        severity='error'
        onClose={handleClose}
        // action={ // Render this conditionally - if fatal error
        //   state.error.fatal &&
        //   <Button color="inherit" size="small" onClick={handleReload}>
        //     Reload
        //   </Button>
        // }
      >
        Oops, {state.error.message}
    </Alert>
    </Snackbar>
  )
}