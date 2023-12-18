import { getTypeByName } from "@lib/api";
import PokemonsListByType from "@components/PokemonsList/PokemonsListByType";
import { Container } from "@mui/material";

const TypePage = async ({ params }: { params: { type: string } }) => {
  const { type } = params;
  const data = await getTypeByName(type);
  return (
    <Container component="div">
      <PokemonsListByType items={data} />
    </Container>
  );
};

export default TypePage;
