import { FC } from 'react';
import { makeStyles } from '@material-ui/core';
import { Container, Typography } from '@mui/material';

interface ITitlePage {
  text: string;
}

const useStyle = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(3, 1, 2, 1),
  },
}));

const TitlePage: FC<ITitlePage> = ({ text }) => {
  const classes = useStyle();
  return (
    <Container maxWidth="sm" className={classes.container}>
      <Typography variant="h3" align="center" color="textPrimary" gutterBottom>
        {text}
      </Typography>
    </Container>
  );
};

export default TitlePage;
