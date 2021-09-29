import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  styled,
} from '@mui/material';
import { FC } from 'react';
import { IHeroDetails } from '../../config/type/hero';
import { camelCaseToPascalCaseWithSpace } from '../../helper/ultil/textTransform';

interface ICardDetailsProp {
  hero: IHeroDetails;
}

const Span = styled('span')({
  fontWeight: 'bold',
});

const CardDetails: FC<ICardDetailsProp> = ({ hero }) => {
  const { name, image, attributes, ...heroDetails } = hero;
  return (
    <Card>
      <CardMedia image={image} component="img" />

      <CardContent>
        <Typography gutterBottom variant="h6">
          {name}
        </Typography>
        {Object.entries(heroDetails).map((item) => {
          return (
            <Typography key={item[0]} variant="body2">
              <Span>{camelCaseToPascalCaseWithSpace(item[0])}</Span>: {item[1]}
            </Typography>
          );
        })}
        {attributes.map((item) => {
          return (
            <Typography key={item.value}>
              <Span> {item.traitType}</Span>: {item.value}
            </Typography>
          );
        })}
      </CardContent>
    </Card>
  );
};

export default CardDetails;
