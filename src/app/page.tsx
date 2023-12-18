import TypesGrid from "@components/PokemonTypes/TypesGrid";
import { getAllTypes } from "@lib/api";
import { Container } from "@mui/material";
import { Type } from "@lib/types";

const IndexPage = async () => {
  const types: Type[] = await getAllTypes();

  return (
    <Container component="div">
      <TypesGrid types={types} />
    </Container>
  );
};

export default IndexPage;
