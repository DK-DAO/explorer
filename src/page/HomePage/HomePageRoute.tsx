import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import ViewAll from '../ViewHero/ViewAll';
import ViewHeroById from '../ViewHero/ViewHeroById';

const HomePageRoute = () => {
  const routes = (
    <Switch>
      <Route path="/view/:id" component={ViewHeroById} />
      <Route path="/view" component={ViewAll} />
      <Redirect to="/view" />
    </Switch>
  );
  return <BrowserRouter>{routes}</BrowserRouter>;
};

export default HomePageRoute;
