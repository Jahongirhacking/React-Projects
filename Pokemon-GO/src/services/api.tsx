import { IPokemonGlobal, IPokemonLocal } from '../components/Card/interface';

const BASE_URL = 'https://pokeapi.co/api/v2';
const IMAGE_URL = 'https://img.pokemondb.net/artwork/large';
const LIMIT = 90;

const fetchData = async (
  path: string,
  setIsError: (value: boolean) => void
) => {
  try {
    const data = await fetch(`${path}`);
    const result = await data.json();
    return result;
  } catch (err) {
    setIsError(true);
    console.error(err);
  }
};

type LimitedPokemons = {
  pokemons: IPokemonLocal[];
};

const fetchLimitedPokemons = async (
  offset: number,
  setIsError: (value: boolean) => void
): Promise<LimitedPokemons> => {
  const { results } = await fetchData(
    `${BASE_URL}/pokemon?limit=${LIMIT}&offset=${offset * LIMIT}`,
    setIsError
  );
  const pokemons = await Promise.all(
    results.map(async (pokemon: IPokemonGlobal) => {
      const id = Number.parseInt(pokemon.url.split('/')[6]); // Get ID from url
      const pokemonName = `${pokemon.name[0].toUpperCase()}${pokemon.name.slice(
        1
      )}`; // Capital Letter
      const imgUrl = `${IMAGE_URL}/${pokemon.name}.jpg`; // Dynamic Image URL
      const poke = await fetchData(`${BASE_URL}/pokemon/${id}`, setIsError);
      const abilities = poke.abilities.map(
        ({ ability }: { ability: { name: string } }) => ability.name
      );
      const height = poke.height;

      return { id, pokemonName, imgUrl, abilities, height };
    })
  );
  return { pokemons };
};

export { fetchLimitedPokemons, fetchData };
