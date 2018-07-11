import React from 'react';
import PageContent from '../core/PageContent';
import { trainingSessionData } from '../../services/trainingSessionData';

class TrainingPage extends React.Component {


    renderSessions(data) {
    const SessionInfo = (props) => {
      return (
          <div className="row">
            <div className="col-md-2 col-xs-12 trainingDay">{props.sessionData.label}</div>
            <div className="col-md-5 col-xs-6 trainingVenue">{props.sessionData.location}</div>
            <div className="col-md-5 col-xs-6 trainingTime">{props.sessionData.time}</div>
        </div>
        );
      };

      if (data && data.length > 0) {
        return data.map((data, index) => (
            <SessionInfo key={index} sessionData={data} />
        ));
      }
      else return [];
  }




  render() {
      const TrainingSessions = () => {
      let sessions = this.renderSessions(trainingSessionData);
      return (
        <div>{sessions}</div>
      );
    };
    return (
      <div className="container">
        <h2>Training</h2>

        <TrainingSessions/>

        <p>&nbsp;</p>

        <PageContent pageId="training"/>

      </div>
    );
  }
}
export default TrainingPage;
