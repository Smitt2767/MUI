import { IconButton, Typography } from "@mui/material";
import { alpha, Box } from "@mui/system";
import React from "react";
import AddIcon from "@mui/icons-material/Add";
import {setAddEditModal} from '../store/calendarSlice';
import {useDispatch} from 'react-redux';

const CalendarToolbar = () => {
  const dispatch = useDispatch()
  return (
    <Box
      sx={{
        flexGrow: 1,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Typography variant="h2" fontWeight={900} color="textPrimary">
        Calendar
      </Typography>
      <IconButton
        size="large"
        sx={{
          bgcolor: "primary.main",
          ":hover": {
            bgcolor: theme =>  alpha(theme.palette.primary.main, 0.9),
          },
        }}
        onClick={() => {
          dispatch(setAddEditModal({
            isOpen: true
          }))
        }}
      >
        <AddIcon />
      </IconButton>
    </Box>
  );
};

export default CalendarToolbar;
