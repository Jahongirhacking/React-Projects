interface IPokemonLocal {
  pokemonName: string;
  imgUrl: string;
  abilities: string[];
  height: number;
  id?: number;
}

interface IPokemonGlobal {
  name: string;
  url: string;
}

export type { IPokemonLocal, IPokemonGlobal };
