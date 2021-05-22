import Box from '@material-ui/core/Box';

import SearchBar from './SearchBar';
import Alert from './Alert';

const AlertsComponent = () => {
   return (
      <Box padding="3vh 10vh 3vh 10vh">
         <SearchBar />
         <Alert />
         <Alert />
         <Alert />
      </Box>
    );
}

export default AlertsComponent;