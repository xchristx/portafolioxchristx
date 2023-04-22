import { createTheme } from '@mui/material/styles'

// const theme = createTheme();

const theme = createTheme({
  status: {
    danger: '#e53e3e',
  },
  palette: {
    primary: {
      //verde menta
      main: '#66cb94',
      darker: '#374b35',
    },
    secondary: {
      //Analogo 1
      main: '#66CBC6',
      darker: '#374b35',
    },
    neutral: {
      main: '#64748B',
      contrastText: '#ECF9F2',
    },
  },
});

export default theme