import { BrowserRouter, Route, Switch } from 'react-router-dom';

import HomePage from './page/HomePage/Home';

const App = () => {
  const routes = (
    <Switch>
      <Route path="/" component={HomePage} />
    </Switch>
  );

  return <BrowserRouter>{routes}</BrowserRouter>;
};

export default App;
