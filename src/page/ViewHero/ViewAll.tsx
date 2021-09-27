import { Container, Grid, makeStyles } from '@material-ui/core';
import HeroCard from '../../component/HeroCard';
import TitlePage from '../../component/TitlePage';

const useStyle = makeStyles((theme) => ({
  cardList: {
    padding: theme.spacing(2),
  },
}));

const ViewAll = () => {
  const classes = useStyle();
  return (
    <>
      <TitlePage text="All Heroes" />
      <Container className={classes.cardList}>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <HeroCard />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default ViewAll;
