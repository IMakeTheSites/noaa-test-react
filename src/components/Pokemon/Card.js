import { CardHeader, CardMedia, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

const PokemonCard = ({ name, sprites, types, abilities, height, weight }) => {
  return (
    <div>
      <Card variant="outlined" sx={{ maxWidth: 400 }}>
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
      </Card>
    </div>
  );
};

export default PokemonCard;
