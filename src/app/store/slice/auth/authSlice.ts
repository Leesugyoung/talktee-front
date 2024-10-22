import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthSliceState } from "./authTypes";

const initialState: AuthSliceState = {
  data: { name: "", img: "" },
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUpdate: (
      state,
      action: PayloadAction<{
        name: string;
        img: string;
      }>
    ) => {
      state.data = action.payload;
    },
  },
});

export const { setUpdate } = authSlice.actions;
export default authSlice.reducer;
