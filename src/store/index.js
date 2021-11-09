import { configureStore } from "@reduxjs/toolkit";
import calendarReducer from "../pages/Calender/store/calendarSlice";

export default configureStore({
  reducer: {
    calendar: calendarReducer,
  },
  middleware: (defaultMiddleware) =>
    defaultMiddleware({
      serializableCheck: false,
    }),
});
