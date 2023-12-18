import { render, screen, fireEvent } from "@testing-library/react";
import PokemonsListByType from "../PokemonsListByType";
import { getPokemonByName } from "@lib/api";

jest.mock("../../../lib/api", () => ({
  getPokemonByName: jest.fn(),
}));

const mockPokemonList = [
  {
    name: "pokemon1",
    image1: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/734.png",
    image2: null,
  },
];

const mockPokemon = getPokemonByName as jest.Mock;

describe("PokemonsListByType.tsx", () => {
  beforeEach(() => {
    mockPokemon.mockClear();
  });

  it("renders PokemonsListByType component correctly", async () => {
    const items = mockPokemonList;
    render(<PokemonsListByType items={items} />);

    const card = screen.getByTestId(`card-${items[0].name}`);
    expect(card).toBeInTheDocument();
    fireEvent.click(card);
    expect(mockPokemon).toHaveBeenCalledWith(items[0].name);
  });
});
