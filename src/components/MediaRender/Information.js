import React from 'react';
// import { useContext } from 'react';
// import { context } from 'context';

import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import PropTypes from 'prop-types';




export default function Information({ data }) {

  // const { state } = useContext(context);

  return (
    <Container style={{ height: '100%', width: '100%' }}>
      {
        !data.fetching && !data.error &&
        <>
          <Typography variant='h4' gutterBottom component='h2'>
            Astronomic Picture of the Day
          </Typography>

          <Typography variant='h5' component='h3' gutterBottom id='title'>
            {data.data?.title}
          </Typography>

          <Typography color='textSecondary' id='copyright'>
            Copyright: {data.data?.copyright || 'Nasa Public Domain'}
          </Typography>
        </>
      }
    </Container>
  )
}


Information.propTypes = {
  data: PropTypes.shape({
    data: PropTypes.shape({
      title: PropTypes.string,
      copyright: PropTypes.string
    }),
  fetching: PropTypes.bool,
  error: PropTypes.any,
  }),
}

