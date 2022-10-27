import React from 'react';
import { CssBaseline, Grid } from '@material-ui/core';

import Header from './components/Header/Header';
import List from './components/List/List';
import Map from './components/Map/Map';
import PlaceDetails from './components/PlaceDetails/PlaceDetails';


const App = () => {
  return (
    <>
     <Header />
     <List />
     <Map />
     <PlaceDetails />
    </>
  );
}

export default App;
