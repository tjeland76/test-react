import React from 'react';

class ResultsPage extends React.Component {
  render() {
    return (
      <div className="container">
        <h2>Results</h2>
        <p><img src="http://res.cloudinary.com/tjeland/image/upload/v1509553792/WS.Swimnorthwest_c3ruex.jpg" alt="Swimnorthwest" width="360" height="203"/></p>
        
        <p>Click <a target="_window" href="http://res.cloudinary.com/tjeland/raw/upload/v1509981997/results/Warrington_Masters_Results_by_Event.pdf">here</a> to view our club results for the 2017 season (by event).</p>

        <p>Click <a target="_window" href="http://res.cloudinary.com/tjeland/raw/upload/v1509981997/results/Warrington_Masters_Results_by_Individual.pdf">here</a> to view our club results for the 2017 season (by individual swimmer).</p>

        <p>Click <a target="_window" href="http://res.cloudinary.com/tjeland/raw/upload/v1509981998/results/Warrington_Masters_Results_by_Event_2016.pdf">here</a> to view our club results for the 2016 season (by event).</p>

        <p>Click <a target="_window" href="http://res.cloudinary.com/tjeland/raw/upload/v1509981997/results/Warrington_Masters_Results_by_Individual_2016.pdf">here</a> to view our club results for the 2016 season (by individual swimmer).</p>
        
      </div>
    );
  }
}
export default ResultsPage;
