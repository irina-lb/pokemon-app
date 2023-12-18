import { Typography, Stack, Box } from "@mui/material";
import Image from "next/image";

const PokemonDetailsPage = ({ info }) => {
  return (
    <Stack spacing={1} align="center" mx="auto" my={4}>
      <Typography variant="h4">{info.name.toUpperCase()}</Typography>
      {(!!info?.image1 || !!info?.image2) && (
        <Image
          style={{ margin: "auto" }}
          src={info?.image1 ? info?.image1 : info?.image2}
          width={400}
          height={400}
          alt="Picture of the author"
        />
      )}
      <Stack align="left">
        <Typography variant="h4">Abilities: </Typography>
        {info?.powers?.map((power, index) => (
          <Box key={index}>
            <Typography>
              {index + 1}.{power?.name.toUpperCase()}
            </Typography>
            <Typography>{power?.effect}</Typography>
          </Box>
        ))}
      </Stack>
    </Stack>
  );
};

export default PokemonDetailsPage;
