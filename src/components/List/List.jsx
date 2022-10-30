import React, { useState } from 'react';
import PlaceDetails from '../PlaceDetails/PlaceDetails.jsx';


import { CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select } from '@material-ui/core';

import useStyles from './styles.js';

function List() {
  const classes = useStyles();
  const [type, setType] = useState('restaurant');
  const [rating, setRaiting] = useState('');

  const places = [
    { name: 'Cool Place' },
    { name: 'Best Natul Park' },
    { name: 'Best SwimPool' },
    { name: 'Natur Park Green' },
    { name: 'Flower Garden Japaniz' },
    { name: 'SuchiBAr and Coffee' }
  ]

  return (
    <div className={classes.container}>
      <Typography variant="h4">
           Restaurants, Hotels & Attractions around you
      </Typography>

      <FormControl className={classes.formControl}>
            <InputLabel id="type">Type</InputLabel>
            <Select id="type" value={type} onChange={(e) => setType(e.target.value)}>
              <MenuItem value="restaurants">Restaurants</MenuItem>
              <MenuItem value="hotels">Hotels</MenuItem>
              <MenuItem value="attractions">Attractions</MenuItem>
            </Select>
          </FormControl>


          <FormControl className={classes.formControl}>
            <InputLabel id="rating">Rating</InputLabel>
            <Select id="rating" value={rating} onChange={(e) => setRaiting(e.target.value)}>
              <MenuItem value="">All</MenuItem>
              <MenuItem value="3">Above 3.0</MenuItem>
              <MenuItem value="4">Above 4.0</MenuItem>
              <MenuItem value="4.5">Above 4.5</MenuItem>
            </Select>
          </FormControl>


      <Grid container spacing={3} className={classes.list}>
        {places?.map((place, i) => (
          <Grid item key={i} sx={12} >
            <PlaceDetails place={place}/>  
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default List