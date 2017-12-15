import React from 'react';
import PropTypes from 'prop-types';
import { NavLink, IndexLink } from 'react-router-dom';

const NavItem = (props) => {
    
  return ( 
    <NavLink exact to={props.link.route} activeClassName="active" onClick={props.showNav}>{props.link.title}</NavLink>  
  );
};

NavItem.propTypes = {
    link: PropTypes.shape({
      route: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired
    }),
    showNav: PropTypes.func
};


export default NavItem;