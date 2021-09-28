import { Container, Grid } from '@material-ui/core';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import TitlePage from '../../component/TitlePage';
import { IHeroDetails, IHeroInfo } from '../../config/type/hero';
import heroApi from '../../helper/axios/heroApi';
import { underscoreToCamelCase } from '../../helper/ultil/textTransform';
import CardDetails from './CardDetails';

interface IParams {
  nftTokenId: string;
}

const ViewHeroById = () => {
  const { nftTokenId } = useParams<IParams>();
  const [hero, setHero] = useState<IHeroDetails>();

  const reFormObject = (data: {}) => {
    return Object.entries(data).reduce((acc, next) => {
      const key = underscoreToCamelCase(next[0]);
      const value = next[1];
      return { ...acc, [key]: value };
    }, {});
  };

  useEffect(() => {
    const getHeroInfo = async () => {
      const response = await heroApi.viewHeroById(nftTokenId);
      const heroRawData = response.data;
      const { attributes, ...raw } = heroRawData;
      const newAttributes = attributes.map((item) => reFormObject(item));
      const newRaw: IHeroInfo = reFormObject(raw);
      const newResponse: IHeroDetails = {
        ...newRaw,
        attributes: [...newAttributes],
      };
      setHero(newResponse);
    };
    getHeroInfo();
  }, [nftTokenId]);

  return (
    <>
      <TitlePage text="Card Details" />
      <Container>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} sm={6}>
            {hero && <CardDetails hero={hero} />}
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default ViewHeroById;
