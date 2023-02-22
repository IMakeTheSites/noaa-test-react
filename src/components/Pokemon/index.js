import useFetchPokemon from "../../hooks/useFetchPokemon";
import SearchBar from "../moleclues/SearchBar";
import Panel from "./Panel";

const Pokemon = () => {
  const { pokemonDetailedItems, isLoading, isDetailsLoading } =
    useFetchPokemon();

  if (isLoading || isDetailsLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <SearchBar />

      <Panel pokemonItems={pokemonDetailedItems} />
    </div>
  );
};

export default Pokemon;
