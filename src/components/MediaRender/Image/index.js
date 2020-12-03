import React, { useState, useEffect, useContext, useRef } from 'react';
import { context } from 'context';
import { setError } from 'context/actions';

import cacheImage from './cacheImage';

import PropTypes from 'prop-types';
import Loading from 'components/Loading';

import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
// import CircularProgress from '@material-ui/core/CircularProgress';

import SpaceImage from 'assets/space-image.jpg';




const useStyle = makeStyles(theme => (
  {
    root: {
      display: 'flex',
      height: '100%',
    },
    img: {
      maxWidth: '100%',
      margin: 'auto',
    }
  }
));



export default function Image({ data }) {

  const { dispatch } = useContext(context);
  const [loading, setLoading] = useState(true);
  const isMounted = useRef(true);
  const classes = useStyle();


  useEffect(() => {
    return () => { isMounted.current = false }
  }, []);


  useEffect(() => {
    setLoading(true); // In case data has changed, reload

    if (!data.fetching && !data.error) { // Cache Image only if no error
      cacheImage(data.data?.url || SpaceImage)
        .then(() => {
          if (isMounted.current) {
            setLoading(false);
          }
        })
        .catch(e => {
          dispatch(setError({
            where: 'Image',
          }));

        });
    }

  }, [data, dispatch]);


  return (
    <Container className={classes.root} disableGutters>
      { !loading ?
        <img
          src={data.data?.url}
          alt="Cool Space Media"
          className={classes.img}
        />
        :
        <Loading />
      }
    </Container>
  )
}


Image.propTypes = {
  data: PropTypes.shape({
    data: PropTypes.shape({
      url: PropTypes.string
    }),
    fetching: PropTypes.bool,
    error: PropTypes.any,
  })
}