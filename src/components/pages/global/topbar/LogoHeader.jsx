import { makeStyles } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';

import navbarLogo from '../../../../assets/UI_component/AeroSpec PNG-7@2x.png';
import MenuIcon from '../../../../assets/UI_component_svg/MenuIcon';

const useStyles = makeStyles((theme) => ({
   drawerHeader: {
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
      position: 'fixed',
      width: '15vw',
      height: '9vh',
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
      backgroundColor: 'white',
   },
   drawerHeaderImg: {
      display: 'block',
      paddingLeft: '1vw',
      maxWidth: '50%',
      maxHeight: 'auto',
   },
}));

const LogoHeader = (props) => {
   const classes = useStyles();
   return (
      <Box boxShadow={1} className={classes.drawerHeader}>
         <img src={navbarLogo} alt="AeroSpec Logo" className={classes.drawerHeaderImg} />
         <IconButton
            edge="start"
            color="relative"
            aria-label="menu"
            onClick={props.menuOpen ?
               () => props.setMenuOpen(false) : () => props.setMenuOpen(true)}
         >
            <MenuIcon />
         </IconButton>
      </Box>
   );
}

export default LogoHeader;