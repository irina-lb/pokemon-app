import { render, screen } from "@testing-library/react";
import TypesGrid from "../TypesGrid";
import { Type } from "@lib/types";

export const types = [
  { name: "normal", url: "https://pokeapi.co/api/v2/type/1/" },
  { name: "fighting", url: "https://pokeapi.co/api/v2/type/2/" },
  { name: "flying", url: "https://pokeapi.co/api/v2/type/3/" },
  { name: "poison", url: "https://pokeapi.co/api/v2/type/4/" },
  { name: "ground", url: "https://pokeapi.co/api/v2/type/5/" },
  { name: "rock", url: "https://pokeapi.co/api/v2/type/6/" },
  { name: "bug", url: "https://pokeapi.co/api/v2/type/7/" },
  { name: "ghost", url: "https://pokeapi.co/api/v2/type/8/" },
];

describe("TypesGrid.tsx", () => {
  it("renders TypesGrid component with provided types", () => {
    render(<TypesGrid types={types} />);

    expect(screen.getByTestId("types-grid")).toBeInTheDocument();
    types.forEach((type: Type) => {
      expect(screen.getByText(type.name.toUpperCase())).toBeInTheDocument();
    });
  });
});
