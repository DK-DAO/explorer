import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  styled,
} from '@mui/material';
import { FC } from 'react';
import { IHeroCardList } from '../../config/type/hero';
import { camelCaseToPascalCaseWithSpace } from '../../helper/ultil/textTransform';

export interface IHeroCardProps {
  hero: IHeroCardList;
}

const Span = styled('span')({
  fontWeight: 'bold',
});

const HeroCardList: FC<IHeroCardProps> = (props) => {
  const { name, image, ...heroDetails } = props.hero;

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
      </CardContent>
    </Card>
  );
};

export default HeroCardList;
