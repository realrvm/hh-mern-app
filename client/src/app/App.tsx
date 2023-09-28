import { FC } from "react";
import { useAppDispatch } from "./providers/rtk-provider";
import { login } from "@/features/login/model/api/login";

type AppProps = Record<string, never>;

export const App: FC<AppProps> = () => {
  const dispatch = useAppDispatch();

  dispatch(login('roman'))
  return (
    <>
      <h1>123</h1>
    </>
  );
};
