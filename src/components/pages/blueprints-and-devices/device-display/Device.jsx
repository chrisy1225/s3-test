import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

import BinIcon from '../../../../assets/UI_component_svg/BinIcon';

const useStyles = makeStyles((theme) => ({
   cardContainer: {
      margin: theme.spacing(1),
      padding: '1vw',
      backgroundColor: '#f8fcff',
   },
   header: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
   },
   activeBtn: {
      backgroundColor: '#3e6eb0',
      color: '#ffffff',
      borderRadius: 20,
      height: '3vh',
   },
   text: {
      color: '#2E4765',
   },
   textSubtitle: {
      color: '#2E4765',
      opacity: '55%',
   }
}));

const Device = (props) => {
   const classes = useStyles();
   return (
      <Card className={classes.cardContainer}>
         <Typography variant="overline" className={classes.textSubtitle}>
            Device Name
         </Typography>
         <Box className={`${classes.header} ${classes.text}`}>
            <Typography variant="h5">AeroSpec 9</Typography>
            <Box>
               <IconButton>
                  <BinIcon />
               </IconButton>
               <Button className={classes.activeBtn}>
                  Active
               </Button>
            </Box>
         </Box>
         <Box>
            <Typography variant="body2">Serial Number: {props.serialNumber}</Typography>
            <Typography variant="body2">Battery: {props.battery}</Typography>
            <Typography variant="body2">Wifi Strength: {props.wifiStrength}</Typography>
         </Box>
      </Card>
   );
}

export default Device;