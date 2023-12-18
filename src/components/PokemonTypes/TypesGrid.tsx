import { FC } from "react";
import { Grid } from "@mui/material";
import TypeCard from "./TypeCard";
import { Type } from "@lib/types";

const TypesGrid: FC<Type[]> = ({ types }) => {
  return (
    <Grid container spacing={4} mb={5} data-testid="types-grid">
      {types.map((type, index) => (
        <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
          <TypeCard type={type.name} />
        </Grid>
      ))}
    </Grid>
  );
};

export default TypesGrid;
