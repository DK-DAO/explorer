import { createTheme, ThemeProvider } from '@mui/material';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

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
    <ThemeProvider theme={theme}>
      <BrowserRouter>{routes}</BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
