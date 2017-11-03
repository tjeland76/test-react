import React from 'react';
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

    <p>
        Most of our swimmers train with the LiveWire Masters training squad. 
    </p>

    <p>
        </p>
        <TrainingSessions/>
        
    <p></p>
    
    <p>
        The Masters squad is currently coached by Jonathan Gatley and Paul Remmonds. Swimmers currently pay circa £23 per month for 3 nominated hours per week, or £40 per month for access to all sessions.
    </p>


    <p>
        For additional or alternative training, there are three other clubs in Warrington with training time. 
 </p>

<a href="http://www.warrington-dolphins.co.uk/" target="_window">Warrington Dolphins</a><br/>
<a href="http://www.warringtonsc.co.uk/" target="_window">Warrington Swimming Club</a><br/>
<a href="http://www.swimwarriors.org.uk/" target="_window">Warriors of Warrington</a><br/> 

    <p></p>
      </div>
    );
  }
}
export default TrainingPage;
