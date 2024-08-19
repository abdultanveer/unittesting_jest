import { render,screen } from "@testing-library/react";
import { Greet } from "./greet";

test('testing greet ',()=>{
    render(<Greet/>)
    //check if Hello is there in the document
    const textElement = screen.getByText('Hello')
    expect(textElement).toBeInTheDocument()
})

test('testing greet ',()=>{
    render(<Greet/>)
    //check if Hello is there in the document
    const textElement = screen.getByText('Hello')
    expect(textElement).toBeInTheDocument()
})

test(' greet renders a name ',()=>{
    render(<Greet name='abdul'/>)
    //check if Hello is there in the document
    const textElement = screen.getByText('abdul')
    expect(textElement).toBeInTheDocument()
})