import { createMuiTheme } from '@mui/material';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import blue from '@material-ui/core/colors/blue';

import HomePage from './page/HomePage/Home';

const App = () => {
  const theme = createMuiTheme({
    palette: {
      primary: blue,
    },
  });
  const routes = (
    <Switch>
      <Route path="/" component={HomePage} />
    </Switch>
  );

  return <BrowserRouter>{routes}</BrowserRouter>;
};

export default App;
