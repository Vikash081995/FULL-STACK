import { render, fireEvent, screen } from "@testing-library/react";
import TestClickEvent from "./03.TestClickEvent";

test("click event test case", () => {
  render(<TestClickEvent />);
  const button = screen.getByRole("button", { name: /update data/i });
  fireEvent.click(button);
  expect(screen.getByText(/hello/i)).toBeInTheDocument();
});
