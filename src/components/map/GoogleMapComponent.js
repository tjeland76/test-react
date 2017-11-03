import React from 'react';
import PropTypes from 'prop-types';
import GoogleMapReact from 'google-map-react';
import AnyReactComponent from './AnyReactComponent';

class GoogleMapComponent extends React.Component {
  
  render() {
    const mapProps = this.props.mapData;
    
    return (
       <GoogleMapReact
        defaultCenter={mapProps.center}
        defaultZoom={mapProps.zoom}
      >
        <AnyReactComponent 
          lat={mapProps.center.lat} 
          lng={mapProps.center.lng} 
          text={''} 
        />
      </GoogleMapReact>
    );
  }
}

GoogleMapComponent.propTypes = {
    mapData: PropTypes.shape({
        center: PropTypes.shape({
            lat: PropTypes.number.isRequired,
            lng: PropTypes.number.isRequired
        }),
        zoom: PropTypes.number.isRequired
    })
};

export default GoogleMapComponent;