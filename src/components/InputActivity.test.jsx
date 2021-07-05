import { fireEvent, render, screen } from "../test-utils";
import InputActivity from "./InputActivity";
import Activities from "./Activities";

test("If the input is on screen", () => {
  render(<InputActivity />);
  const Input = screen.getByPlaceholderText(/Add an activity here/i);
  expect(Input).toBeInTheDocument();
});

test("Testing the input", async () => {
  render(<Activities />);
  const inputRender = screen.getByPlaceholderText(/Add an activity here/i);
  expect(inputRender).toBeInTheDocument();
  fireEvent.change(inputRender, { target: { value: "testing" } });
  expect(inputRender.value).toEqual("testing");
});
