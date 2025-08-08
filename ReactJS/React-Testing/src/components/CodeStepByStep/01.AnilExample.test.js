import { render, screen } from "@testing-library/react";
import AnilSidhuExample from "./01.AnilExample";

test("renders AnilSidhuExample component", () => {
  render(<AnilSidhuExample />);

  const firstParagraph = screen.getByText(/First React App/i);
  const secondParagraph = screen.getByText(/Anil sidhu/i);

  expect(firstParagraph).toBeInTheDocument();
  expect(secondParagraph).toBeInTheDocument();
});

test("render input fields",()=>{
    render(<AnilSidhuExample />);
    let checkInput = screen.getByRole("textbox")
    let checkInputPlaceholder = screen.getByPlaceholderText("Enter your name");
    expect(checkInput).toBeInTheDocument();
    expect(checkInputPlaceholder).toBeInTheDocument();
    expect(checkInputPlaceholder).toHaveAttribute("name","username");
})
