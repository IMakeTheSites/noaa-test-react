import { useMemo, useState } from "react";
import useFetchPokemon from "../../hooks/useFetchPokemon";
import AlertBar from "../shared/AlertBar";
import SearchBar from "../shared/SearchBar";
import Panel from "./Panel";

const Pokemon = () => {
  const { pokemonDetailedItems } = useFetchPokemon();

  const [pokemonName, setPokemonName] = useState("");
  const [isBattle, setIsBattle] = useState(false);

  const filteredPokemonItems = useMemo(() => {
    if (!pokemonName) return pokemonDetailedItems;
    return pokemonDetailedItems.filter((item) =>
      item.name.includes(pokemonName)
    );
  }, [pokemonDetailedItems, pokemonName]);

  return (
    <div>
      <AlertBar pokemonItems={filteredPokemonItems} setIsBattle={setIsBattle} />

      <SearchBar
        pokemonName={pokemonName}
        setPokemonName={setPokemonName}
        isBattle={isBattle}
        setIsBattle={setIsBattle}
      />

      <Panel pokemonItems={filteredPokemonItems} isBattle={isBattle} />
    </div>
  );
};

export default Pokemon;
