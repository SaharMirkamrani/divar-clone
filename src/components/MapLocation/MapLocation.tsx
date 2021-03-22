import React from 'react';
import GoogleMap from 'google-map-react';
import { Box } from '@material-ui/core';

const AnyReactComponent: React.FC<{ text: string }> = ({ text }) => (
  <div>{text}</div>
);

const MapLocation = () => {
  return (
    <Box width='100%' height='100%'>
      <GoogleMap
        // bootstrapURLKeys={{key: }}
        defaultCenter={{
          lat: 59.95,
          lng: 30.33,
        }}
        defaultZoom={11}
      >
        <AnyReactComponent text='My Marker' />
      </GoogleMap>
    </Box>
  );
};

export default MapLocation;
