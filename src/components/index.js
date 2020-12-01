import React, { useContext, useEffect } from 'react';

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
  
  useEffect(() => {// Error Handling 

    if (data.error) { 

      dispatch(setError({
        error: data.error,
        where: 'Fetch',
      }));
      
    } else if (data.data?.code) {
      
      data.error = {
        message: data.msg
      }

      dispatch(setError({
        where: 'Fetch',
        error: {
          message: data.msg
        },
      }));

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