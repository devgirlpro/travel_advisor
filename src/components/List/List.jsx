import React, { useState } from 'react';

import { CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select } from '@material-ui/core';

import useStyles from './styles.js';

function List() {
  const classes = useStyles();
  const [type, setType] = useState('restaurant');
  const [raiting, setRaiting] = useState('');

  return (
    <div className={classes.container}>
      <Typography variant="h4">
           Restaurants, Hotels & Attractions around you
      </Typography>

      <FormControl className={classes.FormControl} >
        <InputLabel>Type</InputLabel>
        <Select value={type} 
                onChange={(e) => setType(e.target.value)} >
          <MenuItem value="restaurants">Restaurants</MenuItem>
          <MenuItem value="hotels" >Hotels</MenuItem>
          <MenuItem value="attractions" >Attractions</MenuItem>
        </Select>
      </FormControl>


      <FormControl className={classes.FormControl} >
        <InputLabel>Raiting</InputLabel>
        <Select vlaue={raiting} 
                onChange={(e) => setRaiting(e.target.value)}>
           <MenuItem value={0} >All</MenuItem>
           <MenuItem value={3} >Above 3.0</MenuItem>
           <MenuItem value={4} >Above 4.0</MenuItem>
           <MenuItem value={4.5} >Above 4.5</MenuItem>
          </Select>
      </FormControl>

    </div>
  )
}

export default List