import { createTheme } from "@mui/material/styles";

import { darkPalette, lightPalette } from "./palette";
import { shape } from "@mui/system";
import { createComponentsTheme } from "./components";

const theme = (mode) => {
  const baseTheme = {
    palette: mode === "dark" ? darkPalette : lightPalette,
    shape,
  };

  return createTheme(
    {
      components: createComponentsTheme(baseTheme),
    },
    baseTheme
  );
};

export default theme;
