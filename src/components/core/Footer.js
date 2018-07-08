import React from 'react';
import PropTypes from 'prop-types';
import Nav from './Nav';
import MediaLinks from './MediaLinks';

class Footer extends React.Component {
  constructor () {
    super();
  }
  
  render() {
    
    const currentYear = new Date().getFullYear();
    
    return (
      <div className="footer">
        <div className="container">
          
            <Nav navData={this.props.navData}/>
            <MediaLinks mediaLinksData={this.props.mediaLinksData} type="mediaLinks"/>
          <div className="copyright">&copy; {currentYear} Warrington Masters</div>
        </div>
      </div>
    );
  }
}

Footer.propTypes = {
    navData: React.PropTypes.arrayOf(
      React.PropTypes.shape({
        title: React.PropTypes.string.isRequired,
        route: React.PropTypes.string.isRequired
        })
    ),
    mediaLinksData: React.PropTypes.arrayOf(
      React.PropTypes.shape({
        title: React.PropTypes.string.isRequired,
        class: React.PropTypes.string.isRequired,
        route: React.PropTypes.string.isRequired
        })
    )
};

export default Footer;