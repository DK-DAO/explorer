import {
  Card,
  CardContent,
  CardMedia,
  makeStyles,
  Typography,
} from '@material-ui/core';

const useStyle = makeStyles((theme) => ({
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {},
  cardContent: {
    flexGrow: 1,
  },
}));

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
        <Typography variant="subtitle1">Description</Typography>
        <Typography variant="body1">Description</Typography>
      </CardContent>
    </Card>
  );
};

export default HeroCard;
