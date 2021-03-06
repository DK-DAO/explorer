import { Switch, Route, Redirect } from 'react-router-dom';
import ViewAll from '../ViewAllHero/ViewAll';
import ViewHeroById from '../ViewHeroById/ViewHeroById';

const HomePageRoute = () => {
  const routes = (
    <Switch>
      <Route path="/view/:nftTokenId" component={ViewHeroById} />
      <Route path="/view" component={ViewAll} />
      <Redirect to="/view" />
    </Switch>
  );
  return <Switch>{routes}</Switch>;
};

export default HomePageRoute;
