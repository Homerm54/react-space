import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
// import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';



const useStyle = makeStyles(theme => (
  {
    root: {
      margin: theme.spacing(4),
      height: '100%'
    },
  }
))



export default function Loading() {
  
  const classes = useStyle();
  
  
  return (
    <Grid container justify='center' alignContent='center' className={classes.root}>

      <Grid 
      item container xs={12} justify='center' 
      alignContent='center'
      >
        <CircularProgress color="secondary"/>
      </Grid>

      <Grid item>
        <Typography>Please, wait while we load everything</Typography>
      </Grid>

    </Grid>
  )
}