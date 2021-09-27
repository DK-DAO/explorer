import {
  Card,
  CardContent,
  CardMedia,
  makeStyles,
  Typography,
} from '@material-ui/core';
import { IHero } from '../config/type/hero';

const useStyle = makeStyles(() => ({
  card: {
    height: '100%',
  },
  cardMedia: {},
  cardContent: {
    flexGrow: 1,
  },
}));

const dumm: IHero = {
  image: 'https://metadata.dkdao.network/static/verdict-of-god.png',
  cardId: 0,
  name: 'Verdict of God',
  description:
    'He brings the final verdict as the right hand of God - whether ',
  rareness: 6,
  rarenessName: 'Legendary',
  type: 'Monster',
  race: 'Angel',
  attribute: 'Light',
  attackRange: 'Mixed',
  rate: 5,
  role: 'Warrior',
};

const HeroCard = () => {
  const classes = useStyle();
  return (
    <Card className={classes.card}>
      <CardMedia
        image="https://metadata.dkdao.network/static/verdict-of-god.png"
        className={classes.cardMedia}
        component="img"
      />

      <CardContent className={classes.cardContent}>
        <Typography gutterBottom variant="h6">
          Verdict of God
        </Typography>
        {Object.keys(dumm)
          .filter((item) => item !== 'image')
          .map((item) => {
            return <Typography variant="body1">{dumm[item]}</Typography>;
          })}
        <Typography variant="body2">Description</Typography>
        <Typography variant="body1">Description</Typography>
      </CardContent>
    </Card>
  );
};

export default HeroCard;
