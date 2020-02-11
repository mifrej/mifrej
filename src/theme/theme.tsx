import createMuiTheme, {
  ThemeOptions,
} from '@material-ui/core/styles/createMuiTheme';
import { darken, fade, responsiveFontSizes } from '@material-ui/core/styles';
import imports from './imports';
import './base.css';

import MontserratRegularWoff2 from '../../public/fonts/montserrat-v14-latin-regular.woff2';
import MontserratBoldWoff2 from '../../public/fonts/montserrat-v14-latin-600.woff2';
import RobotoRegularWoff2 from '../../public/fonts/roboto-v20-latin-regular.woff2';

const { customProperties: variables } = imports;

const initTheme = createMuiTheme({});

const options: ThemeOptions = {
  overrides: {
    MuiAppBar: {
      colorDefault: {
        backgroundColor: variables['--primary'],
        color: variables['--white'],
      },
      root: {
        boxShadow: variables['--box-shadow-default'],
        color: variables['--white'],
        padding: 0,
        zIndex: 1400,
      },
    },
    MuiBackdrop: {
      root: {
        backgroundColor: fade(variables['--white'], 0.5),
      },
    },
    MuiButton: {
      contained: {
        '&:hover': {
          background: `linear-gradient(${darken(
            variables['--light-grey'],
            0.03,
          )}, ${darken(variables['--light-grey'], 0.1)});`,
          boxShadow: `0 0 0.15em ${darken(variables['--light-grey'], 0.5)}
          ;`,
        },
        background: `linear-gradient(${darken(
          variables['--light-grey'],
          0.02,
        )}, ${darken(variables['--light-grey'], 0.08)});`,
        boxShadow: `0 0 0.15em ${darken(variables['--light-grey'], 0.5)}
        ;`,
        color: variables['--midnight'],
        fontSize: '1.1em',
        letterSpacing: '0.2em',
        minHeight: '3.5em',
      },
      containedPrimary: {
        '&:hover': {
          background: `linear-gradient(${darken(
            variables['--slate-blue'],
            0.1,
          )}, ${darken(variables['--slate-blue'], 0.3)});`,
        },
        background: `linear-gradient(${variables['--slate-blue']}, ${darken(
          variables['--slate-blue'],
          0.2,
        )});`,
        color: variables['--white'],
      },
      containedSecondary: {
        '&:hover': {
          background: `linear-gradient(${darken(
            variables['--cyan'],
            0.07,
          )}, ${darken(variables['--cyan'], 0.2)});`,
        },
        background: `linear-gradient(${darken(
          variables['--cyan'],
          0.05,
        )}, ${darken(variables['--cyan'], 0.15)});`,
        color: variables['--white'],
      },
      root: {
        borderRadius: '0.2em',
        fontWeight: 'bold',
        letterSpacing: '0.1em',
        [initTheme.breakpoints.up('xs')]: {
          fontSize: '1.2em',
        },
      },
    },
    MuiButtonGroup: {
      contained: {
        boxShadow: 'none',
      },
      root: {
        borderRadius: 0,
      },
    },
    MuiCssBaseline: {
      '@global': {
        '@font-face': [
          {
            fontDisplay: 'swap',
            fontFamily: 'Montserrat',
            fontStyle: 'normal',
            fontWeight: 400,
            src: `
              local('Montserrat'),
              local('Montserrat-Regular'),
              url(${MontserratRegularWoff2}) format('woff2')
            `,
          },
          {
            fontDisplay: 'swap',
            fontFamily: 'Montserrat',
            fontStyle: 'bold',
            fontWeight: 600,
            src: `
              local('Montserrat'),
              local('Montserrat-Bold'),
              url(${MontserratBoldWoff2}) format('woff2')
            `,
          },
          {
            fontDisplay: 'swap',
            fontFamily: 'Roboto',
            fontStyle: 'normal',
            fontWeight: 400,
            src: `
              local('Roboto'),
              local('Roboto-Regular'),
              url(${RobotoRegularWoff2}) format('woff2')

            `,
          },
        ],
        body: {
          fontSize: '1em',
          [initTheme.breakpoints.up('xs')]: {
            fontSize: '1em',
          },
        },
      },
    },
    MuiDrawer: {
      paper: {
        backgroundColor: darken(variables['--midnight'], 0.6),
        padding: '7em 3em 3em 3em',
      },
    },
    MuiFormControlLabel: {
      label: {
        fontSize: '1.1em',
        fontWeight: 'bold',
        letterSpacing: '0.1em',
        marginRight: '1em',
        textTransform: 'uppercase',
      },
    },
    MuiFormLabel: {
      root: {
        color: variables['--black'],
        fontWeight: 'bold',
      },
    },
    MuiIconButton: {
      root: {
        borderRadius: 0,
        color: variables['--white'],
        padding: '0.5em',
      },
    },
    MuiInput: {
      underline: {
        '&:hover:not($disabled):before': {
          borderBottom: 'initial',
        },
        '&:not($disabled):before': {
          borderBottom: 'initial',
        },
      },
    },
    MuiInputBase: {
      input: {
        backgroundColor: variables['--white'],
        border: `1px solid ${darken(variables['--white'], 0.2)}`,
        fontFamily: ['Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'].join(
          ',',
        ),
        fontSize: '1em',
        lineHeight: '1.2em',
        padding: '0.6em 0.8em',
      },
      inputMarginDense: {
        paddingBottom: '0.35em',
        paddingTop: '0.35em',
      },
    },
    MuiLink: {
      root: {
        color: variables['--white'],
      },
      underlineNone: {
        fontWeight: 700,
        margin: 0,
      },
    },
    MuiMenuItem: {
      root: {
        fontFamily: ['Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'].join(
          ',',
        ),
      },
    },
    MuiNativeSelect: {
      icon: {
        color: `${variables['--dark-grey']}`,
        right: '0.17em',
      },
      select: {
        '&&': {
          paddingRight: '1.8em',
        },
      },
    },
    MuiPaper: {
      elevation1: {
        boxShadow: `0 0 0.13em ${darken(variables['--light-grey'], 0.3)}
        ;`,
      },
      root: {
        backgroundColor: variables['--white'],
        marginBottom: '1.6em',
        padding: '1.6em',
      },
      rounded: {
        borderRadius: 0,
      },
    },
    MuiSelect: {
      root: {
        border: '0',
        padding: '0.6em 4em 0.6em 0.8em',
      },
      select: {
        borderRadius: '0.15em',
        fontSize: '1em',
      },
    },
    MuiTab: {
      root: {
        [initTheme.breakpoints.up('xs')]: {
          fontSize: '1.1em',
          minHeight: '3em',
        },
        '&$selected': {
          backgroundColor: variables['--secondary'],
          color: variables['--white'],
        },
        fontWeight: 'bold',
        letterSpacing: '0.15em',
      },
      textColorInherit: {
        opacity: 1,
      },
    },
    MuiTabs: {
      indicator: {
        display: 'none',
      },
      root: {
        justifyContent: 'center',
        minHeight: 0,
      },
      scroller: {
        flexGrow: 0,
      },
    },
    MuiToolbar: {
      regular: {
        minHeight: '5.6em',
        [`${initTheme.breakpoints.up('xs')} and (orientation: landscape)`]: {
          minHeight: '4.8em',
        },
        [initTheme.breakpoints.up('sm')]: {
          minHeight: '6.4em',
        },
      },
    },
  },
  palette: {
    background: {
      default: variables['--light-grey'],
    },
    primary: {
      contrastText: variables['--white'],
      main: variables['--primary'],
    },
    secondary: {
      contrastText: variables['--white'],
      main: variables['--secondary'],
    },
  },
  typography: {
    fontFamily: [
      'Montserrat',
      'Roboto',
      'Helvetica Neue',
      'Arial',
      'sans-serif',
    ].join(','),
    h1: {
      fontSize: '3.2rem',
      fontWeight: 700,
    },
    h2: {
      fontSize: '2.6rem',
      fontWeight: 700,
    },
    h3: {
      fontSize: '2.2rem',
      fontWeight: 700,
    },
    h4: {
      fontSize: '2rem',
      fontWeight: 700,
    },
    h5: {
      fontSize: '1.8rem',
    },
    h6: {
      fontSize: '1.6rem',
    },

    htmlFontSize: 10,
  },
};

const finalTheme = createMuiTheme(options);

const theme = responsiveFontSizes(finalTheme);

export { theme };
