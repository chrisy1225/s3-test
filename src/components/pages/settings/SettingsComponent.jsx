import { useState } from 'react';

import { makeStyles, withStyles } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';

import Account from './pages/Account';
import Contact from './pages/Contact';
import Payment from './pages/Payment';
import User from './pages/User';

const useStyles = makeStyles((theme) => ({
   btn: {
      backgroundColor: "white",
      color: '#707070',
      padding: '12px 36px',
      borderRadius: '10em',
      fontSize: '16px',
      textTransform: 'none',
      "&.Mui-selected": {
         backgroundColor: '#3e6eb0',
         color: 'white',
      },
   },
}));

const StyledToggleButtonGroup = withStyles((theme) => ({
   grouped: {
      margin: theme.spacing(2),
      marginBottom: theme.spacing(8),
      border: '1px solid #E4EBF2',
      '&:not(:first-child)': {
         borderRadius: '10em',
      },
      '&:first-child': {
         borderRadius: '10em',
      },
   },
}))(ToggleButtonGroup);

const SettingComponent = () => {
   const classes = useStyles();
   const [page, setPage] = useState('account');
   const [content, setContent] = useState(<Account />)

   const handlePage = (event, newPage) => {
      setPage(newPage);
      switch (newPage) {
         case "account":
            setContent(<Account />);
            break;
         case "payment":
            setContent(<Payment />);
            break;
         case "contact":
            setContent(<Contact />);
            break;
         case "user":
            setContent(<User />);
            break;
         default:
            console.log('Invalid Settings');
      }
   };

   return (
      <Box display="flex" flexDirection="column" alignItems="center" margin="3vh 5vh 3vh 5vh">
         <StyledToggleButtonGroup
            value={page}
            exclusive
            onChange={handlePage}
            aria-label="settings page"
         >
            <ToggleButton value="account" className={classes.btn}>
               Account
            </ToggleButton>
            <ToggleButton value="payment" className={classes.btn}>
               Payment
            </ToggleButton>
            <ToggleButton value="contact" className={classes.btn}>
               Contact
            </ToggleButton>
            <ToggleButton value="user" className={classes.btn}>
               User
            </ToggleButton>
         </StyledToggleButtonGroup>
         <Box>
            {content}
         </Box>
      </Box>
   );
}

export default SettingComponent;