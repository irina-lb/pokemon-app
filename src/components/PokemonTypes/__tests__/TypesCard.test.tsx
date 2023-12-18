import React from "react";
import { render, screen } from "@testing-library/react";
import TypeCard from "../TypeCard"; // Adjust the path based on your project structure

describe("TypeCard.tsx", () => {
  it("renders TypeCard correctly", () => {
    const type = "exampleType";
    render(<TypeCard type={type} />);

    expect(screen.getByTestId("card")).toBeInTheDocument();
    expect(screen.getByText(type.toUpperCase())).toBeInTheDocument();

    const iconElement = screen.getByTestId("card-icon");
    expect(iconElement).toBeInTheDocument();
    expect(iconElement).toHaveAttribute("src", "/icons/exampleType.svg");
  });
});
