import { ReducersMapObject } from "@reduxjs/toolkit";

import { StateSchema } from "./StateSchema";

import { loginReducer } from "@/features/login";

export const reducers: ReducersMapObject<StateSchema> = {
  login: loginReducer,
};
