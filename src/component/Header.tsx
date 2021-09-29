import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  styled,
  alpha,
  InputBase,
} from '@mui/material';
import { Link, useHistory } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import logoIcon from '../asset/image/logo.png';

const StyledImage = styled('img')(({ theme }) => ({
  marginRight: theme.spacing(1),
  width: '50px',
}));

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

const Header = () => {
  const [text, setText] = useState<string>('');
  const history = useHistory();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    history.push(`/view/${text}`);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setText(value);
  };

  return (
    <>
      <AppBar position="sticky" color="primary">
        <Toolbar>
          <Link to="/">
            <StyledImage src={logoIcon} />
          </Link>
          <Typography variant="h6" display="block" sx={{ mr: 2, flexGrow: 1 }}>
            DKDAO
          </Typography>
          <form id="searchCard" onSubmit={handleSubmit}>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search card …"
                inputProps={{ 'aria-label': 'search' }}
                name="searchField"
                onChange={handleChange}
              />
            </Search>
          </form>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
