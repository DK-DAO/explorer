import { makeStyles } from '@material-ui/core';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import { FC } from 'react';
import { IHeroCardList } from '../../config/type/hero';
import { camelCaseToPascalCaseWithSpace } from '../../helper/ultil/textTransform';

export interface IHeroCardProps {
  hero: IHeroCardList;
}

const useStyle = makeStyles(() => ({
  card: {
    height: '100%',
  },
  cardMedia: {},
  cardContent: {
    flexGrow: 1,
  },
  cardDetails: {
    fontWeight: 'bold',
  },
}));

const HeroCardList: FC<IHeroCardProps> = (props) => {
  const classes = useStyle();
  const { name, image, ...heroDetails } = props.hero;

  return (
    <Card className={classes.card}>
      <CardMedia image={image} className={classes.cardMedia} component="img" />

      <CardContent className={classes.cardContent}>
        <Typography gutterBottom variant="h6">
          {name}
        </Typography>
        {Object.entries(heroDetails).map((item) => {
          return (
            <Typography key={item[0]} variant="body2">
              <span className={classes.cardDetails}>
                {camelCaseToPascalCaseWithSpace(item[0])}
              </span>
              : {item[1]}
            </Typography>
          );
        })}
      </CardContent>
    </Card>
  );
};

export default HeroCardList;
