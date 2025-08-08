import { render } from "@testing-library/react";
import GetAllByRole from "./04.GetAllByRoleTesting";

test("getAllByRole", () => {
  render(<GetAllByRole />);
  const btns = screen.getAllByRole("button");
  const options = screen.getAllByRole("option");

  for (let i = 0; i < btns.length; i++) {
    expect(btns[i]).toHaveTextContent("Click me");
  }

  for (let i = 0; i < options.length; i++) {
    expect(options[i]).toHaveTextContent(`Option${i + 1}`);
  }
  expect(btns.length).toBe(3);
});
