import React from 'react';
import PropTypes from 'prop-types';

const AnyReactComponent = ({ text }) => (
  <div className="mapMarker">
  </div>
);

AnyReactComponent.propTypes = {
    text: PropTypes.string
};

export default AnyReactComponent;