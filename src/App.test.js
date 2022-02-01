import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

test("renders and snapshots the Home page", () => {
  const { container } = render(<App />);
  expect(container).toMatchSnapshot();
});

test("renders and snapshots who we are page.", () => {
  render(<App />);
  userEvent.click(screen.getByText("Who We Are."));
  expect(screen.container).toMatchSnapshot();
});

test("renders and snapshots what we do page.", () => {
  render(<App />);
  userEvent.click(screen.getByText("What We Do."));
  expect(screen.container).toMatchSnapshot();
});

test("renders and snapshots how we work page.", () => {
  render(<App />);
  userEvent.click(screen.getByText("How We Work."));
  expect(screen.container).toMatchSnapshot();
});

test("renders and snapshots careers page.", () => {
  render(<App />);
  userEvent.click(screen.getByText("Careers."));
  expect(screen.container).toMatchSnapshot();
});
