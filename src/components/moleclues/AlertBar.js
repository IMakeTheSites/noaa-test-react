import { useState } from "react";
import { Alert, Stack } from "@mui/material";
import { useEffect } from "react";
import { usePokemon } from "../../hooks/usePokemon";
import { getWinner } from "../../utils/pokemon";

const AlertBar = ({ pokemonItems, setIsBattle }) => {
  const { battleItems, resetBattleItems } = usePokemon();
  const [winnerMsg, setWinnerMsg] = useState("");

  useEffect(() => {
    if (battleItems.length !== 2) {
      return;
    }

    const winner = getWinner(battleItems, pokemonItems);
    setWinnerMsg(`${winner.name} wins!`);
  }, [battleItems, pokemonItems]);

  return (
    <Stack sx={{ width: "100%", py: 2 }} spacing={2}>
      {winnerMsg && (
        <Alert
          onClose={() => {
            setIsBattle(false);
            setWinnerMsg("");
            resetBattleItems();
          }}
        >
          {winnerMsg}
        </Alert>
      )}
    </Stack>
  );
};

export default AlertBar;
