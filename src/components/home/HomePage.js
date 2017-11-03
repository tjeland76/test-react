import React from 'react';
import {Link} from 'react-router';
import HomeBody from './HomeBody';
import HomeNewsPanel from './HomeNewsPanel';

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <HomeBody/>
        <HomeNewsPanel/>
      </div>
    );
  }
}
export default HomePage;
