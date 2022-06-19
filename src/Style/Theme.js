import { createTheme } from '@mui/material/styles';
import { green, purple } from '@mui/material/colors';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#66332B',
    },
    secondary: {
      main: '#66332B',
    },
  },
  typography: {
    fontFamily: [
      "helveticaneue",
    ].join(','),
    body1:{
      fontSize: '16px',
      lineHeight: '16px',
      /* identical to box height, or 100% */
      
      
      color: '#8894A0',
    },
    body2:{
    fontSize: '14px',
    lineHeight: '14px',
    /* identical to box height, or 100% */
    
    
    color: '#8894A0',
  },
  subtitle1:{
    fontSize: '14px',
    lineHeight: '17px',
    /* identical to box height, or 100% */
    
    
    color: '#8894A0',
  },
  subtitle2:{
    fontSize: '12px',
    lineHeight: '14px',
    /* identical to box height, or 100% */
  
  },
  h2:{
    fontSize:'32px',
  },
  h4:{
    fontSize: '20px',
lineHeight: '26px',
/* identical to box height, or 130% */


/* Dark gray */

color: '#2A292A',
  },
  h5:{
    fontSize: '16px',
lineHeight: '19px',
// fontWeight:400,
/* identical to box height, or 130% */


/* Dark gray */


  },
  h6:{
fontSize:'14px',
lineHeight: '16px',
/* identical to box height */



/* Medium Gray */

color: '#34495E',
  }
    // fontSize:'12px',
  },
 


});