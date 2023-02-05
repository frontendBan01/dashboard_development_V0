import { InputAdornment, TextField } from '@mui/material';
import React, { useState } from 'react';
import { Search as SearchIcons } from '@mui/icons-material';
import useMakeStyles from './style';

const Search = () => {
  const classes = useMakeStyles();
  const [query, setQuery] = useState('');
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      // dispatch(searchMovie(query));
    }
  };
  return (
    <div className={classes.searchContainer}>
      <TextField
        onKeyPress={handleKeyPress}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        variant='standard'
        InputProps={{
          className: classes.input,
          startAdornment: (
            <InputAdornment position='start'>
              <SearchIcons />
            </InputAdornment>
          ),
        }}
      />
    </div>
  );
};

export default Search;
