import { LoginSchema } from "@/features/login";
import { createReducerManager } from "./reducerManager";
import { EnhancedStore } from "@reduxjs/toolkit";
import { AxiosInstance } from "axios";

export type StateSchema = {
  login: LoginSchema;
};

export type StateSchemaKeys = keyof StateSchema;

type ReducerManager = ReturnType<typeof createReducerManager>;

export type StoreWithManager = {
  reducerManager: ReducerManager;
} & EnhancedStore<StateSchema>;

export type ThunkExtraArg = {
  api: AxiosInstance;
};

export type ThunkConfig<T> = {
  rejectValue: T;
  extra: ThunkExtraArg;
};
