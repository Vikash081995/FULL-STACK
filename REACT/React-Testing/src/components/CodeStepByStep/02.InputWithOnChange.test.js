import { render,screen,fireEvent } from "@testing-library/react";
import InputWithOnChange from "./02.InputWithOnChange";
test("on Change Event Testing",()=>{
    render(<InputWithOnChange />);
    let input= screen.getByRole("textbox");
    fireEvent.change(input,{target:{value:'anil'}})
    expect(input.value).toBe("anil");
})