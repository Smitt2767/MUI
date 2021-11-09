import React from "react";
import { Radio } from "@mui/material";

const ColorPiker = ({ selectedColor, onChange, colors }) => {
  return colors.map((color) => (
    <Radio
      key={color}
      checked={selectedColor === color}
      onChange={(e) => {
        onChange(e.target.value);
      }}
      value={color}
      name="radio-buttons"
      sx={{
        color,
        "&.Mui-checked": {
          color,
        },
      }}
    />
  ));
};

export default ColorPiker;
