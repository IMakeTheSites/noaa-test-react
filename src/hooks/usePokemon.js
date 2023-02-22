import React, { useContext, useState } from "react";

const PokemonContext = React.createContext({});

export const PokemonProvider = ({ children }) => {
  const [battleItems, setBattleItems] = useState([]);

  const resetBattleItems = () => {
    setBattleItems([]);
  };

  const addBattleItem = (id) => {
    if (battleItems.includes(id)) return;

    setBattleItems([...battleItems, id]);
  };

  return (
    <PokemonContext.Provider
      value={{
        battleItems,
        resetBattleItems,
        addBattleItem,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};

export const usePokemon = () => useContext(PokemonContext);
