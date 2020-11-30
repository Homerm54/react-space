import { useContext, useEffect } from 'react';

import { context } from "context";
import { setError } from 'context/actions';
import useFecth from 'hooks/useFetch';
import createAPODURL from 'helpers/createAPODURL';

import ErrorMessage from './ErrorMessage';
import Navbar from './Navbar';
import MediaRender from './MediaRender';
// import Container from '@material-ui/core/Container';



export default function App() {

  const { state, dispatch } = useContext(context);
  // console.log('Global State', state); // For debug

  const data = useFecth(createAPODURL(state.date));
  
  
  useEffect(() => {
    // Error Handling here.

    if (data?.error) { 

      dispatch(setError({
        error: data.error,
        where: 'Fetch',
      }));

    } else if (data?.code) {

      dispatch(setError({
        error: {
          message: data.msg
        },
        where: 'Fetch',
      }));

      data.error = {
        message: data.msg
      }
    }
  }, [data, dispatch]);


  
  return (
    <>
      <ErrorMessage />
      <Navbar />
      <MediaRender data={data} />
    </>
  )
}