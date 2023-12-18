import { render, fireEvent, screen } from "@testing-library/react";
import PokemonCard from "../PokemonCard";

describe("PokemonCard.tsx", () => {
  const name = "Pokemon";
  const image = "pokemon.png";
  const handleClose = jest.fn();

  it("renders PokemonCard component correctly with/without image", () => {
    const { rerender } = render(
      <PokemonCard name={name} image={image} handleClose={handleClose} />,
    );

    expect(screen.getByText(name.toUpperCase().substring(0, 20))).toBeInTheDocument();
    expect(screen.getByAltText(`Pokemon ${name}`)).toBeInTheDocument();

    rerender(<PokemonCard name={name} image={null} handleClose={handleClose} />);

    expect(screen.getByText(name.toUpperCase().substring(0, 20))).toBeInTheDocument();
    expect(screen.getByTestId("card-icon")).toBeInTheDocument();
  });

  it("handles click event correctly", () => {
    render(<PokemonCard name={name} image={image} handleClose={handleClose} />);

    fireEvent.click(screen.getByText(name.toUpperCase().substring(0, 20)));
    expect(handleClose).toHaveBeenCalledWith(name);
  });
});
