import { makeStyles } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';

const useStyles = makeStyles({
  dividerContainer: {
     display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
  },
   divider: {
      background: '#557fb9',
      width: '85%',
   },
});

const NavDivider = () => {
   const classes = useStyles();
   return (
      <List className={classes.dividerContainer}>
         <Divider className={classes.divider} />
      </List>
   );
}

export default NavDivider;