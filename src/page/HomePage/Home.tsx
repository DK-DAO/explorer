import { CssBaseline } from '@mui/material';
import Header from '../../component/Header';
import HomePageRoute from './HomePageRoute';

const HomePage = () => {
  return (
    <>
      <CssBaseline />
      <Header />
      <main>
        <div>
          <HomePageRoute />
        </div>
      </main>
    </>
  );
};

export default HomePage;
