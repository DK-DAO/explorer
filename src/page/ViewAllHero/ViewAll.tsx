import { useEffect, useState } from 'react';
import { Container, Grid } from '@mui/material';
import HeroCardList from './HeroCardList';
import TitlePage from '../../component/TitlePage';
import { IHeroCardList } from '../../config/type/hero';
import heroApi from '../../helper/axios/heroApi';

const ViewAll = () => {
  const [heroList, setHeroList] = useState<IHeroCardList[]>([]);

  useEffect(() => {
    const getAllHero = async () => {
      const response = await heroApi.viewAllHero();
      setHeroList(response.data.result.records);
    };
    getAllHero();
  }, []);

  return (
    <>
      <TitlePage text="All Cards" />
      <Container sx={{ padding: 2 }}>
        <Grid container spacing={4}>
          {heroList.map((hero) => (
            <Grid item key={hero.cardId} xs={12} sm={6} md={4} lg={3}>
              <HeroCardList hero={hero} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default ViewAll;
