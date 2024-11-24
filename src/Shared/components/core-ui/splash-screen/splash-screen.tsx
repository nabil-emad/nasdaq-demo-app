import Typography from '@mui/material/Typography';
import AnimatedNasdaqLogo from './animated-nasdaq-logo';
import { StyledSplashScreenContainer } from './splash-screen.styles';
import { Box } from '@mui/material';

const SplashScreen = () => {
  return (
    <>
      <StyledSplashScreenContainer>
        <AnimatedNasdaqLogo />
      </StyledSplashScreenContainer>

      <Box sx={{ display: 'flex', justifyContent: 'end' }}>
        <Typography variant="h6" color="text.secondary">
          Done by: Nabil Emad
        </Typography>
      </Box>
    </>
  );
};

export default SplashScreen;
