import {
  ToggleButton as MuiToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import React from "react";

const ToggleButton = ({ children, buttons, ...control }) => {
  return (
    <ToggleButtonGroup {...control}>
      {buttons.map((button) => (
        <MuiToggleButton value={button.value} key={button.value}>
          {button.name}
        </MuiToggleButton>
      ))}
    </ToggleButtonGroup>
  );
};

export default ToggleButton;
