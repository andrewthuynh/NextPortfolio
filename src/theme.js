import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createMuiTheme({
    typography: {
        h1: {
            "fontFamily": "\"Merriweather\",serif",
            "fontWeightLight": 300,
            "fontWeightRegular": 400,
            "fontWeightMedium": 500,
           },
       h2: {
        "fontFamily": "\"Montserrat\",serif",
        "fontWeightLight": 300,
        "fontWeightRegular": 400,
        "fontWeightMedium": 500
       },
       h4: {
        "fontFamily": "\"Titillium Web\", sans-serif",
        "fontWeightLight": 300,
        "fontWeightRegular": 400,
        "fontWeightMedium": 500,
       }
    },
    palette: {
        primary: {
            main: '#556cd6',
        },
        secondary: {
            main: '#19857b',
        },
        error: {
            main: red.A400,
        },
        background: {
            default: '#fff',
        },
    },
});

export default theme;