import { FC } from "React";
import { Card, CardContent, Typography, CardMedia } from "@mui/material";
import Icon from "@components/Icon";

type PokemonCardProps = {
  name: string;
  image: string;
  handleClose: (name: string) => void;
};

const PokemonCard: FC<PokemonCardProps> = ({ name, image, handleClose }) => {
  return (
    <Card
      align="center"
      data-testid={`card-${name}`}
      onClick={() => handleClose(name)}
      sx={{ cursor: "pointer" }}
    >
      <CardContent>
        {!!image ? (
          <CardMedia
            sx={{ objectFit: "fill", width: "200px", height: "200px" }}
            component="img"
            height="194"
            image={image}
            alt={`Pokemon ${name}`}
          />
        ) : (
          <Icon url="unknown" width="195" height="195" />
        )}
        <Typography sx={{ pt: 3 }}>{name.toUpperCase().substring(0, 20)}</Typography>
      </CardContent>
    </Card>
  );
};

export default PokemonCard;
