/** @format */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  eventName: "",
  category: "",
};
const eventSlice = createSlice({
  name: "event",
  initialState,
  reducers: {
    changeEventName: (state, action) => {
      return { ...state, eventName: action.payload };
    },
    changeEventCategory: (state, action) => {
      console.log(action.payload);
      return { ...state, category: action.payload };
    },
  },
});

export const { changeEventName, changeEventCategory } = eventSlice.actions;
export default eventSlice.reducer;
