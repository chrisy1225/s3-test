import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';

import Home from './pages/home/Home';
import Alerts from './pages/alerts/Alerts';
import BlueprintAndDevices from './pages/blueprints-and-devices/BlueprintsAndDevices';
import Settings from './pages/settings/Settings';

import '../styles/App.css';

import Amplify from 'aws-amplify';
import awsconfig from '../aws-exports';
Amplify.configure(awsconfig);


const defaultTheme = createMuiTheme({
   palette: {
      primary: {
         main: '#3E6EB0'
      },
      secondary: {
         main: '#65272C'
      },
   },
   typography: {
      fontFamily: [
        'Montserrat',
        'sans-serif',
      ].join(','),
      fontWeightRegular: 500,
      fontWeightBold: 700,
    },
})

function App() {
  return (
   <ThemeProvider theme={defaultTheme}>
   <Router>
   <Switch>

      <Route exact path="/">
         <Home />
      </Route>

      <Route exact path="/alerts">
         <Alerts />
      </Route>

      <Route exact path="/blueprints-and-devices">
         <BlueprintAndDevices />
      </Route>

      <Route exact path="/settings">
         <Settings />
      </Route>

   </Switch>
   </Router>
   </ThemeProvider>
  );
}

export default App;
