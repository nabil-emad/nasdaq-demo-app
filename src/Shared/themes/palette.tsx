// material-ui
import { createTheme } from '@mui/material/styles';

// project import

// ==============================|| DEFAULT THEME - PALETTE  ||============================== //

const Palette = () => {
  return createTheme({
    palette: {
      common: {
        black: '#000',
        white: '#fff'
      },
      primary: {
        main: '#008EBC',
        light: '#E3F7FF'
      },
      secondary: {
        main: '#fdfdfd'
      },
      // error: {
      //   main: '#D6372F',
      //   light: '#FDF3F2'
      // },
      // warning: {
      //   main: '#CC7C1E',
      //   light: '#FCF6EB'
      // },
      // info: {
      //   main: '#E3F7FF',
      //   dark: '#71777D'
      // },
      // success: {
      //   main: '#499F68',
      //   dark: '#1C7C6A',
      //   light: '#DAF7F2'
      // },
      // text: {
      //   primary: '#001048',
      //   secondary: '#697599',
      //   disabled: '#001426'
      // },
      // action: {
      //   hover: '#F2F7FA',
      //   active: '#F2F7FA'
      // },
      //   divider: paletteColor.grey[200],
      background: {
        default: '#fff'
      },
      grey: {
        50: '#F8F9FA',
        100: '#F3F4F7',
        200: '#DFE2E6',
        300: '#AAB4BD',
        400: '#71777D',
        500: '#4A5057',
        600: '#22252A'
      }
    }
  });
};

export default Palette;
