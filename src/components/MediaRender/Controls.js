import { useContext } from 'react';
import { context } from "context";
import { goDayAfter, goDayBefore, setDate } from "context/actions";

import stringifyDate from 'helpers/stringifyDate';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';

import Next from '@material-ui/icons/NavigateNext';
import Before from '@material-ui/icons/NavigateBefore';




const useStyles = makeStyles(theme => (
  {
    button: {
      padding: 0,
      [theme.breakpoints.up('md')]: {
        padding: '8px 11px',
      }
    }
  }
));





export default function Controls() {

  // const [today, setDate] = useState(new Date());

  const { state, dispatch } = useContext(context);
  const today = state.date;

  const classes = useStyles();
  // console.log(today);

  function handleDayBefore() {

    dispatch(goDayBefore(today));
  }

  function dayAfter() {

    dispatch(goDayAfter(today));
  }

  function handleNewDate({ target }){

    const newDate = new Date(target.value);
    // console.log(newDate);
    
    dispatch(setDate(newDate));
  }



  return (
    <Container>
      <ButtonGroup variant="text" size="large">
        <Button onClick={handleDayBefore} className={classes.button}>
          <Before /> Past Day
        </Button>
        <Button>
          <TextField
            name='datePicker'
            value={stringifyDate(today)}
            onChange={handleNewDate}
            type='date'
            label=''
            InputLabelProps={{
              shrink: true,
            }}
            required
          />
        </Button>
        <Button onClick={dayAfter} className={classes.button}>
          Next Day <Next />
        </Button>
      </ButtonGroup>
    </Container>
  )
}