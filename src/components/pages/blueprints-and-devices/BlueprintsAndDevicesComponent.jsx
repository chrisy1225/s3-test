import { useState } from 'react';

import BlueprintCanvas from './blueprint-display/BlueprintCanvas';
import DeviceList from './device-display/DeviceList';

import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
    blueprintContainer: {
      margin: '3vh 0vh 0vh 5vh',
      width: '70vw',
    },
    deviceContainer: {
      width: '25vw',
    }
}))

const BlueprintsAndDevicesComponent = () => {
   const classes = useStyles();
   const [dotList, setDotList] = useState([]);

   return (
      <Box display="flex" style={{width: '100%'}}>
         <Box className={classes.blueprintContainer}>
            <BlueprintCanvas dotList={dotList} setDotList={setDotList} />
         </Box>
         <Box className={classes.deviceContainer}>
            <DeviceList />
         </Box>
      </Box>
    );
}

export default BlueprintsAndDevicesComponent;