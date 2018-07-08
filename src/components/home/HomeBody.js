import React from 'react';
import LinkButton from '../core/LinkButton';

class HomeBody extends React.Component {
  constructor () {
    super();
  }
  render() {
    return (
      <div className="bodyHome">
        <div className="bodyHomeContainer">
          <div className="homePanel">
            <h1>WARRINGTON MASTERS</h1>
            <h4>Warrington Masters is a competitive swimming club for members over the age of 18, promoting participation in a wide range of events from local galas through to national and international events.</h4>
            <LinkButton label="Membership" route="/membership" cssClass="homeButton"/>
            <LinkButton label="Training" route="/training" cssClass="homeButton"/>
          </div>
        </div>
      </div>
    );
  }
}

export default HomeBody;