const palette = {
  grey: {
    50: "#ECEFF1",
    100: "#CFD8DC",
    200: "#B0BEC5",
    300: "#90A4AE",
    400: "#78909C",
    500: "#607D8B",
    600: "#546E7A",
    700: "#455A64",
    800: "#37474F",
    900: "#263238",
  },
};

export const darkPalette = (primaryColor) => ({
  ...palette,
  contrastThreshold: 4.5,
  mode: "dark",
  error: {
    main: "#FF8A65",
  },
  info: {
    main: "#4FC3F7",
  },
  primary: {
    main: primaryColor,
    contrastText: "#263238",
  },
  secondary: {
    main: palette.grey[900],
  },
  warning: {
    main: "#FFC400",
  },
  text: {
    primary: palette.grey[50],
    secondary: palette.grey[300],
    disabled: palette.grey[600],
  },
  divider: palette.grey[700],
  background: {
    paper: palette.grey[900],
    default: palette.grey[800],
  },
  action: {
    selectedOpacity: 0,
    selected: palette.grey[800],
  },
});

export const lightPalette = (primaryColor) => ({
  ...palette,
  contrastThreshold: 3,
  mode: "light",
  error: {
    main: "#FF3D00",
  },
  info: {
    main: "#00B0FF",
  },
  primary: {
    main: primaryColor,
    contrastText: "#FFF",
  },
  secondary: {
    main: "#FFF",
  },
  success: {
    main: "#00E676",
  },
  warning: {
    main: "#FFC400",
  },
  text: {
    primary: palette.grey[700],
    secondary: palette.grey[500],
    disabled: palette.grey[300],
  },
  divider: palette.grey[100],
  background: {
    paper: "#FFF",
    default: palette.grey[50],
  },
  action: {
    selectedOpacity: 0,
    selected: palette.grey[50],
  },
});
