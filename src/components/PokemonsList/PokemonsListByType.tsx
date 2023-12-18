"use client";
import { FC, useState } from "react";
import { Grid, Stack } from "@mui/material";
import PokemonCard from "./PokemonCard";
import AppPagination from "@components/PokemonsList/Pagination";
import PokemonModal from "@components/PokemonsList/PokemonModal";
import { getPokemonByName } from "@lib/api";
import { Pokemon, TypeByName } from "@lib/types";

const PokemonsListByType: FC<TypeByName> = ({ items }) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [cardsPerPage] = useState<number>(12);
  const [open, setOpen] = useState<boolean>(false);
  const [currentCard, setCurrentCard] = useState<Pokemon>(null);

  const lastIndex = currentPage * cardsPerPage;
  const firstIndex = lastIndex - cardsPerPage;
  const countPages = Math.ceil(items.length / cardsPerPage);

  const handleOpen = async (name: string) => {
    const response: Pokemon = await getPokemonByName(name);
    setCurrentCard(response);
    setOpen(!open);
  };

  const handleClose = () => {
    setOpen(!open);
  };
  return (
    <>
      <Stack my={4}>
        <AppPagination
          countPages={countPages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          countPage={countPages}
        />
        <Grid container spacing={4}>
          {items
            .map((item) => {
              const image = !!item.image1 ? item.image1 : item.image2;
              return (
                <Grid key={item.name} item xs={12} sm={6} md={4} lg={3}>
                  <PokemonCard name={item.name} image={image} handleClose={handleOpen} />
                </Grid>
              );
            })
            .slice(firstIndex, lastIndex)}
        </Grid>
      </Stack>
      <PokemonModal open={open} handleClose={handleClose} info={currentCard} />
    </>
  );
};

export default PokemonsListByType;
