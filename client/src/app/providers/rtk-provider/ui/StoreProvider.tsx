import { FC, ReactNode } from "react";
import { Provider } from "react-redux";

import { StateSchema } from "../config/StateSchema";
import { createReduxStore } from "../config/root";

type StoreProviderProps = {
  children: ReactNode;
  initialState?: StateSchema;
};

export const StoreProvider: FC<StoreProviderProps> = ({
  children,
  initialState,
}) => {
  return <Provider store={createReduxStore(initialState)}>{children}</Provider>;
};
