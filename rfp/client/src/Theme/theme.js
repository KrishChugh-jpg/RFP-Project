import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: 'rgba(206,227,253,255)',
      light: '#fffafc',
      dark:"#DAE0E7"
    },
    secondary: {
      main: '#000',
      
    },
    pinki: {
      main: "rgba(210, 30, 102, 1)",
    
    },

  },
  typography: {
    fontFamily: [
     'PT Sans'
    ].join(','),
    lineHeight: 'normal',
letterSpacing: '1.44px',
  },
});

export default theme;