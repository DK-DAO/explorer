import { Container, Grid } from '@material-ui/core';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import TitlePage from '../../component/TitlePage';
import { IHero } from '../../config/type/hero';
import heroApi from '../../helper/axios/heroApi';

interface IParams {
  nftTokenId: string;
}

const ViewHeroById = () => {
  const { nftTokenId } = useParams<IParams>();
  const [hero, setHero] = useState<IHero>();
  useEffect(() => {
    const getHeroInfo = async () => {
      const response = await heroApi.viewHeroById(nftTokenId);
    };
    getHeroInfo();
  }, [nftTokenId]);

  return (
    <>
      <TitlePage text="Hero Details" />
      <Container>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} sm={6} md={4}></Grid>
        </Grid>
      </Container>
    </>
  );
};

export default ViewHeroById;
