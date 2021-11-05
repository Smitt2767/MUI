export const createComponentsTheme = (theme) => ({
  MuiAvatar: {
    styleOverrides: {
      root: {
        backgroundColor: theme.palette.background.default,
      },
    },
  },
  MuiDrawer: {
    styleOverrides: {
      paper: {
        background: theme.palette.secondary.main,
        border: "none",
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
          backgroundColor: theme.palette.background.default,
        },
      },
    },
  },
  MuiToggleButtonGroup: {
    styleOverrides: {
      root: {
        background: theme.palette.background.default,
        width: "100%",
        padding: ".2rem",
      },
    },
  },

  MuiToggleButton: {
    styleOverrides: {
      root: {
        backgroundColor: "transparent",
        border: "none",
        borderRadius: "16px !important",
        padding: "0.7rem",
        width: "100%",
        textTransform: "none",
        color: theme.palette.text.secondary,
        "&.Mui-selected": {
          backgroundColor: theme.palette.secondary.main,
        },
      },
    },
  },
});
