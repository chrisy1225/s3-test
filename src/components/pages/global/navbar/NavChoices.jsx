import clsx from 'clsx';

import { makeStyles } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { Link } from 'react-router-dom';

import ActiveTabIcon from '../../../../assets/UI_component_svg/ActiveTabIcon';

const useStyles = makeStyles((theme) => ({
   item: {
      paddingTop: theme.spacing(1),
      paddingBottom: theme.spacing(1),
      paddingLeft: '0px',
      color: 'rgba(255, 255, 255, 0.5)',
      "&.Mui-selected": {
         color: 'rgba(255, 255, 255, 1)',
         backgroundColor: '#3E6EB0',
      },
   },
   icon: {
      opacity: '0.5',
   },
   selectedIcon: {
      opacity: '1',
   },
   inactive: {
      visibility: 'hidden',
   },
   active: {
     visibility: 'visible',
   },
}));

const NavChoices = (props) => {
   const classes = useStyles();
   return (
      <ListItem
         button
         key={props.label}
         component={Link}
         to={props.link}
         selected={props.selectedChoice === props.choice}
         onClick={() => props.handleListItemClick(props.choice)}
         className={classes.item}
      >
         <ListItemIcon
            className={clsx(classes.inactive, {
               [classes.active]: props.selectedChoice === props.choice,
            })}
         >
            <ActiveTabIcon />
         </ListItemIcon>
         <Box display="flex" flexDirection="column">
            <ListItemIcon
               className={clsx(classes.icon, {
                  [classes.selectedIcon]: props.selectedChoice === props.choice,
               })}
            >
               {props.icon}
            </ListItemIcon>
            <ListItemText primary={props.label} />
         </Box>
      </ListItem>
   );
}

export default NavChoices;