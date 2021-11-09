import { createSlice } from "@reduxjs/toolkit";
import { ADD } from "../../../constants/calendar";

const initialState = {
  modal: {
    isOpen: false,
    mode: ADD,
    data: null,
  },
  events: []
};

const calendarSlice = createSlice({
  name: "calendar",
  initialState,
  reducers: {
    setAddEditModal: (state, action) => {
      state.modal.isOpen = action.payload.isOpen;
      state.modal.mode = action.payload.mode || ADD;
      state.modal.data = action.payload.data || null;
    },
    closeModal : (state) => {
        state.modal = initialState.modal
    },
    addEvent: (state, action) => {
        state.events = [...state.events, action.payload]
    }
  },
});

export const { setAddEditModal, closeModal, addEvent } = calendarSlice.actions;
export default calendarSlice.reducer;
