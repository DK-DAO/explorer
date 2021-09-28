import { AppBar, makeStyles, Toolbar, Typography } from '@material-ui/core';
import logoIcon from '../asset/image/logo.png';

const useStyle = makeStyles((theme) => ({
  logo: {
    marginRight: theme.spacing(1),
    width: '50px',
  },
}));

const Header = () => {
  const classes = useStyle();
  return (
    <>
      <AppBar position="sticky" color="primary">
        <Toolbar>
          <img src={logoIcon} alt="DKDAO Logo" className={classes.logo} />
          <Typography variant="h6">DKDAO</Typography>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
