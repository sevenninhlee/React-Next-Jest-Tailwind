import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import PinInput from "../components/PinInput";

describe("PinInput", () => {
  it("renders the correct number of input boxes", () => {
    render(<PinInput length={4} />);
    const inputs = screen.getAllByRole("textbox");
    expect(inputs).toHaveLength(4);
  });

  it("calls onComplete when all inputs are filled", () => {
    const onComplete = jest.fn();
    render(<PinInput length={4} onComplete={onComplete} />);
    const inputs = screen.getAllByRole("textbox");

    fireEvent.change(inputs[0], { target: { value: "1" } });
    fireEvent.change(inputs[1], { target: { value: "2" } });
    fireEvent.change(inputs[2], { target: { value: "3" } });
    fireEvent.change(inputs[3], { target: { value: "4" } });

    expect(onComplete).toHaveBeenCalledWith("1234");
  });

  it("prevents input of non-digit characters when regex is specified", () => {
    render(<PinInput length={4} boxRegex={/^\d+$/} />);
    const input = screen.getAllByRole("textbox");

    fireEvent.change(input[0], { target: { value: "1" } });
    fireEvent.change(input[0], { target: { value: "a" } });

    expect(input[0]).toHaveValue("1");
  });

  it("displays input in secret mode when enabled", () => {
    render(<PinInput length={4} />);
    const input = screen.getAllByRole("textbox");
    const toggleBtn = screen.getByText("Enable Secret Mode");

    fireEvent.change(input[0], { target: { value: "1" } });
    expect(input[0]).toHaveValue("1");

    fireEvent.click(toggleBtn);
    expect(input[0]).toHaveAttribute("type", "password");

    fireEvent.click(toggleBtn);
    expect(input[0]).toHaveAttribute("type", "text");
  });
});
