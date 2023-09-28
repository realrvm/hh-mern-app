import { FC, useEffect } from "react";
import { useAppDispatch } from "./providers/rtk-provider";
import { login } from "@/features/login/model/api/login";

type AppProps = Record<string, never>;

export const App: FC<AppProps> = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
      document.body.className = 'app_dark_theme'
    }, [])

  dispatch(login('roman'))
  return (
    <div className="app app_dark_theme">
      <h1>123</h1>
    </div>
  );
};
