import Header from "./Header";
import { render, screen } from "@testing-library/react";

test("If a title is showing", () => {
  render(<Header />);
  const linkElement = screen.getByText(/To Do List/i);
  expect(linkElement).toBeInTheDocument();
});

test("Header has the title class", () => {
  render(<Header />);
  const linkElement = screen.getByText(/To Do List/i);
  expect(linkElement).toHaveClass("titulo");
});
