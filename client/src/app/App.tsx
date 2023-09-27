import { FC } from "react";
import { useAppDispatch } from "./providers/rtk-provider";
import { login } from "@/features/login/model/api/login";

type AppProps = Record<string, never>;

export const App: FC<AppProps> = () => {
  const dispatch = useAppDispatch();

  dispatch(login())
  return (
    <>
      <h1>App component</h1>
    </>
  );
};
