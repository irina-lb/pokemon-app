import { getPokemonByName } from "@lib/api";
import PokemonDetailsPage from "@components/PokemonsList/PokemonDetailsPage";
import { Container } from "@mui/material";

const PokemonPage = async ({ params }: { params: { name: string } }) => {
  const { name } = params;
  const data = await getPokemonByName(name);

  return (
    <Container component="div">
      <PokemonDetailsPage info={data} />
    </Container>
  );
};

export default PokemonPage;
