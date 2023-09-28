import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "@/app/providers/rtk-provider/";

export const login = createAsyncThunk<string, string, ThunkConfig<string>>(
  "login/login",
  async (loginData, thunkAPI): Promise<any> => {
    const { extra, rejectWithValue } = thunkAPI;

    try {
      const response = await extra.api.post("/login", loginData);

      if (!response.data) {
        return rejectWithValue("Invalid username");
      }

      return response.data;
    } catch (error) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      }
    }
  }
);
