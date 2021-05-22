import Device from './Device';

import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
   listContainer: {
      height: '100%',
      padding: 5,
      margin: theme.spacing(3),
   },
   header: {
      display: 'flex',
      margin: theme.spacing(1),
      justifyContent: 'space-between',
      flexWrap: 'wrap',
   },
   text: {
      color: '#2E4765',
      opacity: '55%',
   }
}));

const DeviceList = () => {
   const classes = useStyles();
   return (
      <Paper variant="outlined" square className={classes.listContainer}>
         <Box className={classes.header}>
            <Typography display="inline" variant="h5">My Devices</Typography>
            <Button className={classes.text}>Add +</Button>
         </Box>
         <Box>
            <Device />
         </Box>
      </Paper>
   );
}

export default DeviceList;