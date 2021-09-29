import { AppBar, Toolbar, Typography, styled } from '@mui/material';
import logoIcon from '../asset/image/logo.png';

const StyledImage = styled('img')(({ theme }) => ({
  marginRight: theme.spacing(1),
  width: '50px',
}));

const Header = () => {
  return (
    <>
      <AppBar position="sticky" color="primary">
        <Toolbar>
          <StyledImage src={logoIcon} />
          <Typography variant="h6">DKDAO</Typography>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
