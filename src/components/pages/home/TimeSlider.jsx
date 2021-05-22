import { makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
   root: {
      width: '80%',
      margin: '3vh 3vh 5vh 3vh',
   },
   margin: {
      height: theme.spacing(3),
   },
   text: {
      color: 'black',
      opacity: '50%',
      textAlign: 'center',
   },
}));

const marks = () => {
   var marks = [];
   for (let i = 0; i <= 23; i++) {
      var label = '';
      if (i === 0) {
         label = <div><div>12</div><div class='apm'>AM</div></div>;
      }
      if (i > 0 && i < 10) {
         label = <div><div>{'0' + i}</div><div class='apm'>AM</div></div>;
      }
      if (i >= 10 && i < 12) {
         label = <div><div>{i}</div><div class='apm'>AM</div></div>;
      }
      if (i === 12) {
         label = <div><div>{i}</div><div class='apm'>PM</div></div>;
      }
      if (i > 12 && i < 22) {
         label = <div><div>{"0" + (i - 12)}</div><div class='apm'>PM</div></div>;
      }
      if (i >= 22) {
         label = <div><div>{(i - 12)}</div><div class='apm'>PM</div></div>;
      }
      marks.push({
         value: i,
         label: label
      })
   }
   return marks;
}

const TimeSlider = () => {
   const classes = useStyles();
   return (
      <div className={classes.root}>
         <Typography
            id="track-false-range-slider"
            gutterBottom
            className={classes.text}
         >
            Scroll to view sensor status throughout the day
         </Typography>
         <Slider
            defaultValue={30}
            aria-labelledby="slider-time"
            step={1}
            marks={marks()}
            valueLabelDisplay="off"
            min={0}
            max={23}
         />
      </div>
   );
}

export default TimeSlider;