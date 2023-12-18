export type Type = {
  name: string;
  url?: string;
};

export type TypeByName = {
  name: string;
  image1?: string;
  image2?: string;
};

export type Ability = {
  name: string;
  value: string;
};

export type PokemonType = {
  name: string;
};

export type Powers = {
  name: string;
  effect: string;
};

export type Pokemon = {
  name: string;
  image1?: string;
  image2?: string;
  abilities: Ability[];
  types: PokemonType[];
  powers: Powers[];
  weight: number;
};
