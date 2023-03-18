// React
import { useMemo } from 'react';

// Google Map Library
import { GoogleMap, useLoadScript, MarkerF } from '@react-google-maps/api';

// Component
import Spinner from '../Spinner';

// Styles
import './Map.scss';

import marker from '../../assets/img/small-burger.png';

function Map() {

  const position = useMemo(() => ({lat: 46.524431518785924, lng: 6.6330580436780995}), []);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });
  
  return (
    <div className="map_container">
      {isLoaded ?
        <GoogleMap
          zoom={16}
          center={position}
          mapContainerClassName="map"
          mapTypeId='satellite'
        >
          <MarkerF key='marker' position={position} icon={marker} />
        </GoogleMap>
        :
        <Spinner />
      }
    </div>
  )
}

export default Map;