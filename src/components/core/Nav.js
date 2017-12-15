import React from 'react';
import PropTypes from 'prop-types';
import NavItem from './NavItem';

class Nav extends React.Component {
  constructor (props) {
    super(props);
  }
  
  renderLinks(data, showNav) {
    if (data.length > 0) {      
        return data.map((link, index) => (
            <NavItem key={index} link={link} showNav={showNav} />
        ));
    }
    else return [];
  }
  
  render () {
    const links = this.renderLinks(this.props.navData, this.props.showNav);
    return (
      <nav className={this.props.cssClass}>
        {links}
      </nav>
    );
      
  }
}
Nav.propTypes = {
    navData: React.PropTypes.arrayOf(
      React.PropTypes.shape({
        title: React.PropTypes.string.isRequired,
        route: React.PropTypes.string.isRequired
        })
    ),
    cssClass: PropTypes.string,
    showNav: PropTypes.func
};
        
export default Nav;