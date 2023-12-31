import { orange } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

export default createTheme({
    status: {
        danger: orange[500],
    },
    palette: {
        primary: {
            main: `#E74C1B`,
        },
        secondary: {
            main: `#000000`,
        },
    },

    typography: {
        fontFamily: [
            'Poppins',
            'sans-serif',
        ].join(',')
    },
    components: {
        // Name of the component
        MuiButton: {
            styleOverrides: {
                // Name of the slot
                root: {
                    // Some CSS
                    borderRadius: 50,
                },
            },
        },
        MuiCard: {
            styleOverrides: {
                // Name of the slot
                root: {
                    // Some CSS
                    boxShadow: ' 0px 2px 20px 0px #0000000D',
                },
            },
        },
        MuiPaper: {
            styleOverrides: {
                // Name of the slot
                root: {
                    // Some CSS
                    boxShadow: ' 0px 2px 20px 0px #0000000D',
                },
            },
        },
    },

});
