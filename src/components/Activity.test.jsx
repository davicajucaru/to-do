import { render, screen } from "../test-utils";
import Activity from "./Activity";
import { v4 as uuidv4 } from "uuid";

const uuid = uuidv4();

const mockTodo = {
  title: "testing",
  isCompleted: false,
  id: uuid,
};

test("There should be a finished task button", () => {
  render(<Activity todo={mockTodo} />);
  const ButtonDone = screen.getByAltText("done");
  expect(ButtonDone).toBeInTheDocument();
});

test("There should be a delete button", () => {
  render(<Activity todo={mockTodo} />);
  const ButtonDelete = screen.getByAltText("delete");
  expect(ButtonDelete).toBeInTheDocument();
});
