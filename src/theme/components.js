export const createComponentsTheme = (theme) => ({
  MuiAppBar: {
    styleOverrides: {
      root: {
        height: "3.5rem",
        boxShadow: "none",
        background: "none",
      },
    },
  },
  MuiAvatar: {
    styleOverrides: {
      root: {
        backgroundColor: theme.palette.background.default,
      },
    },
  },
  MuiButton: {
    styleOverrides: {
      root: {
        width: "100%",
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
        textTransform: "none",
      },
    },
  },
  MuiGrid: {
    styleOverrides: {
      root: {
        width: "100%",
      },
    },
  },
  MuiLinearProgress: {
    styleOverrides: {
      root: {
        height: 12,
        borderRadius: 6,
      },
    },
  },
  MuiPaper: {
    defaultProps: {
      elevation: 0,
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
        "&:hover": {
          backgroundColor: theme.palette.background.paper,
        },
      },
    },
  },
  MuiListItem: {
    styleOverrides: {
      root: {
        cursor: "pointer",
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
  MuiTableCell: {
    styleOverrides: {
      root: {
        borderBottom: `1px solid ${theme.palette.divider}`,
      },
      sizeSmall: {
        padding: "8px",
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
