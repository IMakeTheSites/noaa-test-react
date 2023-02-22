import Card from "./Card";
import Grid from "@mui/material/Grid";

const Panel = ({ pokemonItems }) => {
  return (
    <div className="panel">
      <Grid container spacing={2}>
        {pokemonItems.map((item) => (
          <Grid item md={4} xs={12} key={`pokemon-${item.id}`}>
            <Card {...item} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Panel;
