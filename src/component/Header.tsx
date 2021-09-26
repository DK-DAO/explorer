import { AppBar, makeStyles, Toolbar, Typography } from '@material-ui/core';
import { PhotoCamera } from '@mui/icons-material';

const useStyle = makeStyles((theme) => ({
  logo: {
    marginRight: theme.spacing(1),
  },
}));

const Header = () => {
  const classes = useStyle();
  return (
    <>
      <AppBar position="sticky">
        <Toolbar>
          <PhotoCamera className={classes.logo} />
          <Typography variant="h6">DKDAO</Typography>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
