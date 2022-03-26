import { createTheme } from '@mui/material';
import { blue } from '@mui/material/colors';

export const theme = createTheme({
    typography: {
        fontFamily: `"MontSerrat", "sans-serif"`,
        fontWeightLight: 300,
        fontWeightRegular: 500,
        fontWeightMedium: 700,
        fontWeightBold: 900,
       },
    palette: {
        mode: 'dark',
        primary: {
            main: '#fff',
            contrastText: '#FFF'
        },
        secondary: {
            main: blue[600],
            contrastText: '#FFF'
        },
        background: {
            main: "#000",
            contrastText: '#FFF'
        }
    },
});