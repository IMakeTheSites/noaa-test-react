import { useEffect, useState } from "react";

const apiUrl = process.env.REACT_APP_POKEMON_URL;

const useFetchPokemon = (limit = 9, offset = 0) => {
  const [pokemonItems, setPokemonItems] = useState([]);
  const [pokemonDetailedItems, setPokemonDetailedItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isDetailsLoading, setIsDetailsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(`${apiUrl}/pokemon?limit=${limit}&offset=${offset}`)
      .then((res) => res.json())
      .then((res) => {
        setPokemonItems(res.results);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    setIsDetailsLoading(true);

    const promiseItems = pokemonItems.map(({ url }) =>
      fetch(url).then((res) => res.json())
    );

    Promise.all(promiseItems)
      .then((results) => {
        setPokemonDetailedItems(results);
      })
      .finally(() => {
        setIsDetailsLoading(false);
      });
  }, [pokemonItems]);

  return {
    isLoading,
    isDetailsLoading,
    pokemonDetailedItems,
  };
};

export default useFetchPokemon;
