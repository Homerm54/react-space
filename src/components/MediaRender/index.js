import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import PropTypes from 'prop-types';

import Information from './Information';
import Image from './Image';
import Controls from './Controls';

import Grid from '@material-ui/core/Grid';




const useStyles = makeStyles(theme => (
  {
    image_container: {
      minHeight: '50vh',
      [theme.breakpoints.up('md')]: {
        minHeight: '85vh',
      }
    },
    text_container: {
      minHeight: '25vh',
      marginTop: theme.spacing(3),
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(5),

      [theme.breakpoints.up('md')]: {
        minHeight: '60vh',
        paddingBottom: theme.spacing(8),
      },
    }
  }
));





export default function MediaRender({data}) {

  const classes = useStyles();

  return (
    <Grid container>

      <Grid item xs={12} md={7} className={classes.image_container}>
        <Image data={data} />
      </Grid>

      <Grid container item xs alignContent='center'>

        <Grid item className={classes.text_container}>
          <Information data={data} />
        </Grid>

        <Grid item xs>
          <Controls />
        </Grid>
      </Grid>

    </Grid>
  )
}


// Use this the right way
MediaRender.propTypes = {
  data: PropTypes.object.isRequired,
}