import { Route, Switch, BrowserRouter } from 'react-router-dom';
import ViewAll from '../ViewHero/ViewAll';
import ViewHeroById from '../ViewHero/ViewHeroById';

const HomePage = () => {
  const routes = (
    <Switch>
      <Route path="/:id" component={ViewHeroById} />
      <Route path="/" component={ViewAll} />
    </Switch>
  );
  return <BrowserRouter>{routes}</BrowserRouter>;
};

export default HomePage;
