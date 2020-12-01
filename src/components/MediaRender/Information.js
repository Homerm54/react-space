import React from 'react';
// import { useContext } from 'react';
// import { context } from 'context';

import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import PropTypes from 'prop-types';




export default function Information({ data }) {

  // const { state } = useContext(context);

  return (
    <Container style={{ height: '100%' }}>
      {
        !data.fetching && !data.error &&
        <>
          <Typography variant='h4' gutterBottom>
            Astronomic Picture of the Day
          </Typography>

          <Typography variant='h5' component='h2' gutterBottom>
            {data.data?.title}
          </Typography>

          <Typography color='textSecondary'>
            Copyright: {data.data?.copyright || 'Nasa Public Domain'}
          </Typography>
        </>
      }
    </Container>
  )
}


Information.propTypes = {
  data: PropTypes.object.isRequired,
}

