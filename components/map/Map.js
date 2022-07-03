import React, { useMemo } from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

import { defaultTheme } from './Theme';

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

export default function MapComponent() {
  const mapRef = React.useRef(undefined);

  const onLoad = React.useCallback(function callback(map) {
    mapRef.current = map;
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    mapRef.current = undefined;
  }, []);

  const { isLoaded } = useJsApiLoader({
    // googleMapsApiKey: 'AIzaSyB5XB8GKma6CohcHH5TyW2le1yKKQlHZro',
    googleMapsApiKey: API_KEY,
  });

  if (!isLoaded) return <div>Loading...</div>;
  return <Map />;
}

const defaultOptions = {
  panControl: true,
  zoomcontrol: true,
  mapTypeControl: false,
  scaleControl: false,
  streetViewControl: false,
  rotateControl: false,
  clickableIcons: false,
  keyboardShortcuts: false,
  scrollwheel: false,
  disableDoubleClickZoom: false,
  fullscreenControl: false,
  styles: defaultTheme,
};

function Map() {
  const center = useMemo(() => ({ lat: 50.450665, lng: 30.52408 }), []);

  return (
    <GoogleMap
      zoom={15}
      center={center}
      mapContainerClassName="mapContainer"
      options={defaultOptions}></GoogleMap>
  );
}
