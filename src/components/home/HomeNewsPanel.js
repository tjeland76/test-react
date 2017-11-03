import React from 'react';
import PropTypes from 'prop-types';
import { trainingSessionData } from '../../services/trainingSessionData';
import { newsData } from '../../services/newsData';
import moment from 'moment';
import GoogleMapComponent from '../map/GoogleMapComponent';
import AnyReactComponent from '../map/AnyReactComponent';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";

class HomeNewsPanel extends React.Component {
  constructor () {
    super();
    this.state = {
      feedData: null
    };
    this.trainingSessionData = trainingSessionData;
  }
  
  componentDidMount () {
    
//     var that = this;
//     var url = 'http://www.warringtonmasters.co.uk/api/newstop/2'

//     fetch(url)
//     .then(function(response) {
//       if (response.status >= 400) {
//         throw new Error("Bad response from server");
//       }
//       return response.json();
//     })
//     .then(function(data) {
//       that.setState({ person: data.person });
//     });

    this.setState(
      {
        feedData: newsData
      }
    );
    twttr.widgets.load();
    
  }
    renderNewsItems(data) {
    const TopNewsItem = (props) => {
      const storyDate = moment(props.newsData.updated.substring(0, 10)).format('LL'); 
      return (
          <div className="homeNewsItem">
            <div className="homeNewsImage"><img src={props.newsData.image}/></div>
            <div className="homeNewsDetails">
              <h4>{props.newsData.title}</h4>
              <h6>{storyDate}</h6>
              <div className="homeNewsStory">{props.newsData.body}</div>
              
            </div>
          </div>
        );
      };
    
      if (data && data.length > 0) { 
        return data.filter(data => data.showHomepage === true)
                .map((data, index) => (
            <TopNewsItem key={index} newsData={data} />
        ));
      }
      else return [];
  }
    
  render() {
      
    const TopNewsItems = (props) => {
      let newsItems = this.renderNewsItems(props.feedData);
      return (
        <div>{newsItems}</div>
      );
    };
      
      
    //<GoogleMapComponent mapData={nextSession.map}/>
    const MyMapComponent = withScriptjs(withGoogleMap((props) =>
      <GoogleMap
        defaultZoom={props.mapData.zoom}
        defaultCenter={{ lat: props.mapData.center.lat, lng: props.mapData.center.lng }}
      >
        {props.isMarkerShown && <Marker position={{ lat: props.mapData.center.lat, lng: props.mapData.center.lng }} />}
      </GoogleMap>
    ));
    
    const NextSession = (props) => {
      
      const trainingSessionData = this.trainingSessionData;        
      const today = new Date();
      const dayIndex = today.getDay();
      
      let nextSession = trainingSessionData.filter(function (session) {
        return session.day >= dayIndex;
      });

      if (nextSession.length === 0) {
        nextSession = trainingSessionData[0];
      } else {
        nextSession = nextSession[0];
      }
      const nextSessionDayLabel = nextSession.day === dayIndex ? 'Tonight' : nextSession.label;

      return (
        <div className="nextSession">
          <div className="nextSessionDetails">
            <div className="nextSessionHeading"><h5>Next Session</h5></div>
            <div className="nextSessionWhenLocation">{nextSession.location}</div>
            <div className="nextSessionWhenDay">{nextSessionDayLabel} - {nextSession.time}</div>
            <div>Coach: {nextSession.coach}</div>
            <div><a href="/training">View all sessions</a></div>
          </div>
          <div className="nextSessionMap">
            
          <MyMapComponent
              isMarkerShown
              mapData={nextSession.map}
              googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={<div style={{ height: `100%` }} />}
              mapElement={<div style={{ height: `100%` }} />}
            />
          </div>
        </div>
        );
      };
    
    return (
      <div className="container">
        <div className="homeInfoPanel">
          <div className="latestNewsContainer">
            <TopNewsItems feedData={this.state.feedData}/>
          </div>
          <div className="otherInfoContainer">
            <NextSession trainingSessionData={trainingSessionData}/>
            <div className="twitterFeed">
              <a className="twitter-timeline" href="https://twitter.com/wmswim" data-widget-id="709697286046093312">Tweets by @wmswim</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomeNewsPanel;