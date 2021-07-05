import { render, screen } from "@testing-library/react";
import ButtonAdd from "./ButtonAdd";

test("There should be an add button.", () => {
  render(<ButtonAdd />);
  const buttonRender = screen.getByText(/Add/i);
  expect(buttonRender).toBeInTheDocument();
});
