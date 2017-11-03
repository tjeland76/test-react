import React from 'react';
import PropTypes from 'prop-types';

const MediaLink = (props) => {
    if (!props.link.route || props.link.route === '') {
        return (
            <div className={props.link.class}>&nbsp;</div>    
        );
    }
    return (
        <a href={props.link.route} className={props.link.class}>&nbsp;</a>
    );
};

MediaLink.propTypes = {
    link: PropTypes.shape({
      route: PropTypes.string.isRequired,
      class: PropTypes.string.isRequired
    })
};


export default MediaLink;