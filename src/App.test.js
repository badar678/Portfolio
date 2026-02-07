import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders the portfolio owner name", () => {
  render(<App />);
  const nameElement = screen.getByText(/badar ul islam/i);
  expect(nameElement).toBeInTheDocument();
});
