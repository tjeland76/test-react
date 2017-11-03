import React from 'react';

class ResultsPage extends React.Component {
  render() {
    return (
      <div className="container">
        <h2>Results</h2>
        <p><img src="http://res.cloudinary.com/tjeland/image/upload/v1509553792/WS.Swimnorthwest_c3ruex.jpg" alt="Swimnorthwest" width="360" height="203"/></p>

        
        <p>Click <a target="_window" href="Documents/Warrington Masters Results by Event.pdf">here</a> to view our club results for the 2017 season (by event).</p>

        <p>Click <a target="_window" href="Documents/Warrington Masters Results by Individual.pdf">here</a> to view our club results for the 2017 season (by individual swimmer).</p>

        <p>Click <a target="_window" href="Documents/Warrington Masters Results by Event (2016).pdf">here</a> to view our club results for the 2016 season (by event).</p>

        <p>Click <a target="_window" href="Documents/Warrington Masters Results by Individual (2016).pdf">here</a> to view our club results for the 2016 season (by individual swimmer).</p>
        
      </div>
    );
  }
}
export default ResultsPage;
