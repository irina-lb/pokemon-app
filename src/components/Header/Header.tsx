import Link from "next/link";
import Icon from "@components/Icon";
import { Typography, Stack, Container } from "@mui/material";
import SearchInput from "@components/Header/SearchInput";
import { getAllPokemonsNames } from "@lib/api";

const Header = async () => {
  const options = await getAllPokemonsNames();
  return (
    <Container component="div">
      <Stack
        spacing={2}
        sx={{
          my: 5,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <Link href="/" style={{ textDecoration: "none", color: "inherit" }}>
          <Typography variant="h4" sx={{ display: "flex", alignItems: "center" }}>
            <Icon url="unknown" width={50} height={50} />
            POKEMONS
          </Typography>
        </Link>
        <SearchInput options={options} />
      </Stack>
    </Container>
  );
};
export default Header;
