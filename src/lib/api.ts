import { Pokemon, Type, TypeByName } from "@lib/types";

const BASE_API = "https://pokeapi.co/api/v2/";

export async function getAllTypes(): Promise<Type[]> {
  const response = await fetch(BASE_API + "type");
  const data = await response.json();
  return data.results;
}

export async function getAllPokemonsNames(): Promise<string[]> {
  const response = await fetch(BASE_API + "pokemon?limit=1000&offset=0");
  const data = await response.json();
  const names = [];
  data.results.map((res) => {
    names.push(res.name);
  });
  return names;
}

export async function getTypeByName(typeName: string): Promise<TypeByName[]> {
  const response = await fetch(BASE_API + `type/${typeName}`);
  const data = await response.json();

  const info = data.pokemon.map(async (pokemon) => {
    const res = await fetch(pokemon.pokemon.url);
    const data = await res.json();

    return {
      name: data.name,
      image1: data.sprites.other.dream_world.front_default,
      image2: data.sprites.front_default,
    };
  });

  return await Promise.all(info);
}

export async function getPokemonByName(name: string): Promise<Pokemon> {
  const response = await fetch(BASE_API + `pokemon/${name}`);
  const data = await response.json();

  const abilities = data.stats.map((ability) => {
    return {
      name: ability.stat.name,
      value: ability.base_stat,
    };
  });
  const types = data.types.map((type) => {
    return {
      name: type.type.name,
    };
  });
  const powerObj = data.abilities.map(async (ability) => {
    const res = await fetch(ability.ability.url);
    const data = await res.json();
    return {
      name: data.name,
      effect: data.effect_entries[1].effect,
    };
  });
  const powers = await Promise.all(powerObj);
  return {
    name: data.name,
    image1: data.sprites.other.dream_world.front_default,
    image2: data.sprites.front_default,
    abilities,
    types,
    powers,
    weight: data.weight,
  };
}
