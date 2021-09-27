import { Container, Grid, makeStyles } from '@material-ui/core';
import { useEffect, useState } from 'react';
import HeroCardList from './HeroCardList';
import TitlePage from '../../component/TitlePage';
import { IHeroCardList } from '../../config/type/hero';
import heroApi from '../../helper/axios/heroApi';

const useStyle = makeStyles((theme) => ({
  cardList: {
    padding: theme.spacing(2),
  },
}));

const ViewAll = () => {
  const classes = useStyle();
  const [heroList, setHeroList] = useState<IHeroCardList[]>([]);

  useEffect(() => {
    const getAllHero = async () => {
      const response = await heroApi.viewAllHero();
      setHeroList(response.result.records);
    };
    getAllHero();
  }, []);

  return (
    <>
      <TitlePage text="All Heroes" />
      <Container className={classes.cardList}>
        {heroList.map((hero) => (
          <Grid container spacing={4} key={hero.cardId}>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <HeroCardList hero={hero} />
            </Grid>
          </Grid>
        ))}
      </Container>
    </>
  );
};

export default ViewAll;