import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";

const SearchBar = () => {
  return (
    <div>
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
        label="Password"
        placeholder="Search Pokemon"
      />
    </div>
  );
};

export default SearchBar;
