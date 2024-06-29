import React from "react";
import { createRoot } from "react-dom/client";
import { act } from "react-dom/test-utils";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "./App";

let container: HTMLDivElement | null = null;
let root: ReturnType<typeof createRoot> | null = null;

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
  if (container) {
    root = createRoot(container);
  }
});

afterEach(() => {
  if (container) {
    document.body.removeChild(container);
    container = null;
  }
  root = null;
});

test("renders learn react link", () => {
  act(() => {
    if (root) {
      root.render(<App />);
    }
  });

  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
