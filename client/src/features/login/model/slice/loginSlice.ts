import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { LoginSchema } from "../types";
import { login } from "../api/login";

const initialState: LoginSchema = {
  username: "",
  isLoading: false,
  error: undefined,
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setUsername(state, action: PayloadAction<string>) {
      state.username = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        if (typeof action.payload === "string") state.error = action.payload;
      });
  },
});

export const { reducer: loginReducer, actions: loginActions } = loginSlice;
