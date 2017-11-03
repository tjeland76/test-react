import React from 'react';
import PropTypes from 'prop-types';
import MediaLink from './MediaLink';

class MediaLinks extends React.Component {
  renderMediaLinks(data) {
      if (data.length > 0) { 
        return data.map((link, index) => (
            <MediaLink key={index} link={link} />
        ));
      }
      else return [];
  }
  
  render () {
    const links = this.renderMediaLinks(this.props.mediaLinksData);
    const classLabel = this.props.type;
    return(
      <div className={classLabel}>{links}</div>
    );
  }
}
MediaLinks.propTypes = {
    mediaLinksData: React.PropTypes.arrayOf(
      React.PropTypes.shape({
        title: React.PropTypes.string.isRequired,
        class: React.PropTypes.string.isRequired,
        route: React.PropTypes.string.isRequired
        })
    ),
    type: PropTypes.string.isRequired
};
export default MediaLinks;