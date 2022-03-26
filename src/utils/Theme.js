import { createTheme } from '@mui/material';
import { blue, grey } from '@mui/material/colors';

export const theme = createTheme({
    overrides: {
        MuiButton: {
            label: {
                textTransform: 'capitalize'
            }
        },
        MuiPaper: {
            elevation24: {
                boxShadow: '0px 0px 1px 0px'
            }
        }
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
            main: grey[500],
            contrastText: '#FFF'
        }
    },
});