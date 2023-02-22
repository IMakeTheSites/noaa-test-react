import Card from "./Card";
import Grid from "@mui/material/Grid";

const Panel = ({ pokemonItems, isBattle }) => {
  return (
    <Grid container spacing={2}>
      {pokemonItems.map((item) => (
        <Grid
          item
          md={4}
          xs={12}
          key={`pokemon-${item.id}`}
          container
          justifyContent="center"
        >
          <Card {...item} isBattle={isBattle} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Panel;
