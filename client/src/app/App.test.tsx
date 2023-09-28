import { App } from "./App";
import { render, screen } from "@testing-library/react";
import { StoreProvider } from "./providers/rtk-provider";

test("text should be in the document", () => {
  render(
    <StoreProvider>
      <App />
    </StoreProvider>
  );
  expect(screen.getByText(123)).toBeInTheDocument();
});
