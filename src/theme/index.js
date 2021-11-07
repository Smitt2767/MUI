import { createTheme } from "@mui/material/styles";

import { darkPalette, lightPalette } from "./palette";
import shape from "./shape";
import typography from "./typography";
import { createComponentsTheme } from "./components";

const theme = (mode, primaryColor) => {
  const baseTheme = {
    palette:
      mode === "dark" ? darkPalette(primaryColor) : lightPalette(primaryColor),
    shape,
    typography,
  };

  return createTheme(
    {
      components: createComponentsTheme(baseTheme),
    },
    baseTheme
  );
};

export default theme;
