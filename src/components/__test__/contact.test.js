import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom"

describe("contact us page text cases", () => {
    test("should load contact component", () =>{
        render(<Contact />);
    
        const heading = screen.getByRole("heading")
        expect(heading).toBeInTheDocument();
    });
    test("should load button inside the contact component", () =>{
        render(<Contact />);
    
        const button = screen.getByRole("button");
        expect(button).toBeInTheDocument();
    });
    test("should load name input inside the contact component", () =>{
        render(<Contact />);
    
        const inputName = screen.getByPlaceholderText("name");
        expect(inputName).toBeInTheDocument();
    });
    test("should load message input inside the contact component", () =>{
        render(<Contact />);
    
        const inputMessage = screen.getByPlaceholderText("message");
        expect(inputMessage).toBeInTheDocument();
    });
    test("should load 2 input box inside the contact component", () =>{
        render(<Contact />);
        // Querying
        const inputBoxes = screen.getAllByRole("textbox");
        console.log(inputBoxes.length);
        // Assertion
        expect(inputBoxes.length).toBe(2)
    });
});