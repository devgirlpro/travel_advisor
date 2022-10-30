import React from 'react';
import GoogleMapReact from 'google-map-react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import { Paper, Typography, useMediaQuery } from '@material-ui/core';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Rating from '@material-ui/lab';

import mapStyles from '../../mapStyles.js';
import useStyles from './styles.js';

function Map() {
  const classes = useStyles();
  const isMobile = useMediaQuery('(min-width:600px)');

  const coordinates = { lat: 0, lng: 0 };

  return (
    <div className={classes.mapContainer}>
         <h2>Map</h2>
         <GoogleMapReact
            bootstrapURLKeys={{ key: 'AIzaSyBn3Ac95V78lhDk-nuk0kH8U2knG9vsCoM' }}
            defaultCenter={coordinates}
            defaultZoom={12}
            margin={[50, 50, 50, 50]}
           
         >
         </GoogleMapReact>
    </div>
  )
}

export default Map