import {
  Card,
  CardContent,
  CardMedia,
  makeStyles,
  Typography,
} from '@material-ui/core';
import { FC } from 'react';
import { IHeroDetails } from '../../config/type/hero';
import { camelCaseToPascalCaseWithSpace } from '../../helper/ultil/textTransform';

interface ICardDetailsProp {
  hero: IHeroDetails;
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

const CardDetails: FC<ICardDetailsProp> = ({ hero }) => {
  const classes = useStyle();
  const { name, image, attributes, ...heroDetails } = hero;
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
        {attributes.map((item) => {
          return (
            <Typography key={item.value}>
              <span className={classes.cardDetails}> {item.traitType}</span>:{' '}
              {item.value}
            </Typography>
          );
        })}
      </CardContent>
    </Card>
  );
};

export default CardDetails;
