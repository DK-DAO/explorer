import { FC } from 'react';
import { Container, Typography, styled } from '@mui/material';

interface ITitlePage {
  text: string;
}

const StyledContainer = styled(Container)(({ theme }) => ({
  padding: theme.spacing(3, 1, 2, 1),
}));

const TitlePage: FC<ITitlePage> = ({ text }) => {
  return (
    <StyledContainer maxWidth="sm">
      <Typography variant="h3" align="center" color="textPrimary" gutterBottom>
        {text}
      </Typography>
    </StyledContainer>
  );
};

export default TitlePage;
