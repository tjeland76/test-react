import React from 'react';
import PropTypes from 'prop-types';

const LinkButton = (props) => {
  return (
    <a href={props.route} className={props.cssClass}>{props.label}</a>
  );
};

LinkButton.propTypes = {
    route: PropTypes.string.isRequired,
    cssClass: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired
};

export default LinkButton;