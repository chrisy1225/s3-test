import { useState } from 'react';
import { makeStyles } from '@material-ui/core';

import NavBar from '../global/navbar/NavBar';
import TopBar from '../global/topbar/TopBar';
import LogoHeader from '../global/topbar/LogoHeader';

import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
   layoutContainer: {
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: '#f8fcff',
   },
   container: {
      display: 'flex',
      flexDirection: 'row',
   },
   navBar: {
      position: 'fixed',
   },
   contentContainerShift: {
      height: '100vh',
      width: '84.5vw',
      position: 'relative',
      marginLeft: '15vw',
      transition: theme.transitions.create('margin', {
         easing: theme.transitions.easing.easeOut,
         duration: theme.transitions.duration.enteringScreen,
      }),
   },
}));

const MainLayout = (props) => {
   const [menuOpen, setMenuOpen] = useState(true);
   const classes = useStyles();

   return (
      <Box className={classes.layoutContainer}>

         <Box className={classes.container}>
            <LogoHeader
               menuOpen={menuOpen}
               setMenuOpen={setMenuOpen}
            />
            <Box marginLeft="15.5vw" width="100vw">
               <TopBar
                  menuOpen={menuOpen}
                  setMenuOpen={setMenuOpen}
               />
            </Box>
         </Box>

         <Box className={classes.container}>
            <Box className={classes.navBar}>
               <NavBar
                  menuOpen={menuOpen}
                  setMenuOpen={setMenuOpen}
                  choice={props.choice}
               />
            </Box>
            <Box className={classes.contentContainerShift}>
               {props.content}
            </Box>
         </Box>

      </Box>
   );
}

export default MainLayout;