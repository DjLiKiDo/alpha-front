import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders the main title", () => {
  render(<App />);
  const titleElement = screen.getByText("Alpha Blockchain & AI Solutions");
  expect(titleElement).toBeInTheDocument();
});
