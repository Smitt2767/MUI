export const createComponentsTheme = (theme) => ({
  MuiAvatar: {
    styleOverrides: {
      root: {
        backgroundColor: theme.palette.grey[800],
      },
    },
  },
  MuiIconButton: {
    defaultProps: {
      disableRipple: true,
    },
    styleOverrides: {
      root: {
        color: theme.palette.text.primary,
        "&:hover": {
          backgroundColor: theme.palette.grey[700],
        },
      },
    },
  },
  MuiListItem: {
    styleOverrides: {
      root: {
        borderRadius: 16,
        paddingTop: 12,
        paddingBottom: 12,
        "&.active": {
          backgroundColor: theme.palette.background.default,
        },
        "&:hover": {
          backgroundColor: theme.palette.grey[700],
        },
      },
    },
  },
});
