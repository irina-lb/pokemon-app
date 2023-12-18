import { render, screen } from "@testing-library/react";
import PokemonDetailsPage from "../PokemonDetailsPage";

const mockInfo = {
  name: "Pokemon",
  image1: "https://raw.githubusercontent.com/pokemon.svg",
  powers: [
    { name: "Power 1", effect: "Effect 1" },
    { name: "Power 2", effect: "Effect 2" },
  ],
};

describe("PokemonDetailsPage.tsx", () => {
  it("renders PokemonDetailsPage component correctly ", () => {
    render(<PokemonDetailsPage info={mockInfo} />);

    expect(screen.getByText(mockInfo.name.toUpperCase())).toBeInTheDocument();

    mockInfo.powers.forEach((power, index) => {
      expect(screen.getByText(`${index + 1}.${power.name.toUpperCase()}`)).toBeInTheDocument();
      expect(screen.getByText(power.effect)).toBeInTheDocument();
    });
  });
});
