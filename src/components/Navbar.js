import React from 'react';

import { makeStyles } from "@material-ui/core/styles";
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton';
import ToolTip from '@material-ui/core/ToolTip';

// Images 
import { ReactComponent as GithubIcon } from 'assets/github.svg';
// import { ReactComponent as NasaIcon } from 'assets/NASA Logo.svg';



const useStyle = makeStyles(theme => ({

  root: {
    padding: theme.spacing(1.5),
    display: 'flex',
    backgroundColor: theme.palette.primary.main,
  },
  title: {
    flexGrow: 1,
    margin: 'auto',
  },
  githubIcon: {
    width: '10%',
    padding: 0,
    // paddingRight: theme.spacing(1),
    [theme.breakpoints.up('md')]: {
      width: '4%'
    }
  },
}));




export default function Navbar() {

  const classes = useStyle();

  return (

    <Container component='header' color="primary" className={classes.root}>

        <Typography
          className={classes.title}
          variant='h1'
        >
          React Space
        </Typography>

        <ToolTip title="Github Repo">
          <IconButton className={classes.githubIcon}>
            <a
              href='https://www.github.com'
              target="_blank" rel='noreferrer'
            >
              <GithubIcon />
            </a>
          </IconButton>
        </ToolTip>

    </Container>
  )
}