import { render, screen, fireEvent } from "@testing-library/react";
import PokemonModal from "../PokemonModal";
import { Pokemon } from "@lib/types";

const mockPokemon: Pokemon = {
  name: "Pokemon",
  image1: "https://raw.githubusercontent.com/pokemon.svg",
  image2: "https://raw.githubusercontent.com/pokemon1.svg",
  abilities: [
    { name: "hp", value: 80 },
    { name: "attack", value: 60 },
  ],
  types: ["normal"],
  powers: [
    { name: "Power 1", effect: "Effect 1" },
    { name: "Power 2", effect: "Effect 2" },
  ],
  weight: 90,
};

describe("PokemonModal.tsx", () => {
  const handleClose = jest.fn();
  const open = true;
  it("renders PokemonModal component correctly", () => {
    render(<PokemonModal open={open} handleClose={handleClose} info={mockPokemon} />);

    expect(screen.getByText(mockPokemon.name.toUpperCase())).toBeInTheDocument();

    mockPokemon.abilities.forEach((ability) => {
      expect(screen.getByTestId(`progress-bar-${ability.name}`)).toBeInTheDocument();
    });
    const checkAbilitiesButton = screen.getByRole("button", { name: "Check Abilities" });
    expect(checkAbilitiesButton).toBeInTheDocument();
  });

  it("click on button works correctly", () => {
    render(<PokemonModal open={open} handleClose={handleClose} info={mockPokemon} />);

    const checkAbilitiesButton = screen.getByRole("button", { name: "Check Abilities" });
    fireEvent.click(checkAbilitiesButton);
    expect(handleClose).toHaveBeenCalledTimes(1);
  });
});
