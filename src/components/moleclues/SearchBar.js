import SearchIcon from "@mui/icons-material/Search";
import {
  Box,
  Grid,
  Button,
  OutlinedInput,
  IconButton,
  InputAdornment,
} from "@mui/material";

const SearchBar = ({ pokemonName, setPokemonName, isBattle, setIsBattle }) => {
  return (
    <Box sx={{ py: 2 }}>
      <Grid container justifyContent="space-between">
        <OutlinedInput
          id="outlined-adornment-password"
          type="text"
          endAdornment={
            <InputAdornment position="end">
              <IconButton aria-label="toggle password visibility" edge="end">
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          }
          value={pokemonName}
          onChange={(e) => setPokemonName(e.target.value)}
          placeholder="Search Pokemon"
        />

        <Button
          variant="contained"
          disabled={isBattle}
          size="medium"
          onClick={() => {
            setIsBattle(!isBattle);
          }}
        >
          Battle
        </Button>
      </Grid>
    </Box>
  );
};

export default SearchBar;
