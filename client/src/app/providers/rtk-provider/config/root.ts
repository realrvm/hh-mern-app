import { configureStore } from "@reduxjs/toolkit";

import { createReducerManager } from "./reducerManager";
import { reducers } from "./reducers";

import { StateSchema, StoreWithManager, ThunkExtraArg } from "./StateSchema";
import { IS_DEV } from "@/shared/lib/constants";
import { $api } from "@/shared/api/api";

const reducer = createReducerManager(reducers);

export function createReduxStore(initialState?: StateSchema) {
  const extraArgument: ThunkExtraArg = {
    api: $api,
  };

  const store = configureStore({
    reducer: reducer.reduce,
    devTools: IS_DEV,
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        thunk: {
          extraArgument,
        },
      }),
  }) as StoreWithManager;

  store.reducerManager = reducer;

  return store;
}
