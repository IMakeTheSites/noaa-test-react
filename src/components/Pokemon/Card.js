import {
  CardHeader,
  CardMedia,
  Typography,
  CardActionArea,
  Card,
  CardContent,
} from "@mui/material";
import { usePokemon } from "../../hooks/usePokemon";

const PokemonCard = ({
  id,
  name,
  sprites,
  types,
  abilities,
  height,
  weight,
  isBattle,
}) => {
  const { addBattleItem, battleItems } = usePokemon();

  const isClicked = battleItems.includes(id);

  const onBattleItemClick = (id) => {
    if (battleItems.length === 2) {
      return;
    }
    addBattleItem(id);
  };

  const CardContents = () => (
    <>
      <CardHeader title={name} />
      <CardMedia
        component="img"
        sx={{ height: 140, width: "auto" }}
        image={sprites.back_default}
        alt={name}
      />
      <CardContent>
        <Typography>Abilities: {abilities[0]?.ability.name}</Typography>
        <Typography>
          Height/Weight: {height}/{weight}
        </Typography>
        <Typography>Type: {types[0]?.type.name}</Typography>
      </CardContent>
    </>
  );
  return (
    <Card
      variant="outlined"
      sx={{
        width: "100%",
        maxWidth: 400,
        backgroundColor: isClicked ? "#ccc" : "#181A1B",
      }}
    >
      {isBattle ? (
        <CardActionArea onClick={() => onBattleItemClick(id)}>
          <CardContents />
        </CardActionArea>
      ) : (
        <CardContents />
      )}
    </Card>
  );
};

export default PokemonCard;
