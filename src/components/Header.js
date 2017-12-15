import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import MediaLinks from './core/MediaLinks';
import Nav from './core/Nav';

class Header extends React.Component {
  constructor (props) {
    super(props);
    
    this.state = {
       showNav: null
    };
    this.toggleNavDisplay = this.toggleNavDisplay.bind(this);
  }
  
  toggleNavDisplay() {
    this.setState({
      showNav: !this.state.showNav
    });
  }
  
  render() {
    
    const Logo = (props) => <div id="logo">&nbsp;</div>;
    
    const MenuButton = (props) => {
      return (
        <div className="menuContainer">
          <div className="menu" onClick={props.onClick}>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      );
    };
    
    const HeaderTop = (props) => {
      return (
        <div className="headerTop container">
          <div className="headerLeft">
            <MenuButton onClick={this.toggleNavDisplay}/>
            <MediaLinks mediaLinksData={props.affiliateLinksData} type="affiliateLinks"/>
          </div>
          <Logo/>
          <MediaLinks mediaLinksData={props.mediaLinksData} type="mediaLinks"/>
        </div>
      );
    };
    
    return (
      <div className="header">
        <HeaderTop mediaLinksData={this.props.mediaLinksData} affiliateLinksData={this.props.affiliateLinksData}/>
        <div className={"navContainer " + (this.state.showNav ? 'showMenu' : 'hideMenu')}>
          <div className="container">
            <Nav navData={this.props.navData} showNav={this.toggleNavDisplay} />
          </div>
        </div>
      </div>
    );
  }
}

Header.propTypes = {
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
    ),
    affiliateLinksData: React.PropTypes.arrayOf(
      React.PropTypes.shape({
        title: React.PropTypes.string.isRequired,
        class: React.PropTypes.string.isRequired,
        route: React.PropTypes.string
        })
    )
};

//// The Header creates links that can be used to navigate
//// between routes.
//const Header = () => (
//  <header>
//    <nav>
//      <ul>
//        <li><NavLink to="/" activeClassName="active">Home</NavLink></li>
//        <li><NavLink to="/about" activeClassName="active">About</NavLink></li>
//        <li><NavLink to="/courses" activeClassName="active">Courses</NavLink></li>
//      </ul>
//    </nav>
//  </header>
//);

export default Header;
