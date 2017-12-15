import React from 'react';
import GoogleMapReact from 'google-map-react';
import AnyReactComponent from './AnyReactComponent';

class GoogleMapSnippet extends React.Component {
  
  //static defaultProps = {
  //  center: {lat: 53.399685, lng: -2.534278},
  //  zoom: 12
  //};

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
GoogleMapSnippet.propTypes = {
    mapData: React.PropTypes.shape({
        center: React.PropTypes.shape({
            lat: React.PropTypes.number.isRequired,
            lng: React.PropTypes.number.isRequired
        })
        }),
    zoom: React.PropTypes.number.isRequired
    
};

export default GoogleMapSnippet;
