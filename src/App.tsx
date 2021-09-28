import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@material-ui/styles';

import HomePage from './page/HomePage/Home';

const App = () => {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#110D12',
      },
    },
  });

  const routes = (
    <Switch>
      <Route path="/" component={HomePage} />
    </Switch>
  );

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>{routes}</ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
