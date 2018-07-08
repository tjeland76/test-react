import React from 'react';

class RecordsPage extends React.Component {
  render() {
    return (
      <div className="container">
        <h2>Records</h2>

        <p><img src="http://res.cloudinary.com/tjeland/image/upload/v1509553792/WS.Swimnorthwest_c3ruex.jpg" alt="Swimnorthwest" width="360" height="203"/></p>

        <p>Click <a target="_window" href="http://res.cloudinary.com/tjeland/raw/upload/v1509981969/records/Warrington_Masters_Records.pdf">here</a> to view our club records.</p>

        <p>Some of our swimmers have achieved British and European Masters records, and feature in the FINA World Rankings.</p>

        <p><a href="https://www.swimmingresults.org/mastersdata/records/index.php" target="_window">British Masters Records</a></p>
        <p><a href="http://www.len.eu/?p=7283" target="_window">European Masters Records</a></p>
        <p><a href="http://www.fina.org/content/masters-records" target="_window">World Masters Records</a></p>
        <p><a href="http://www.fina.org/content/masters-top-10" target="_window">FINA Masters World Rankings</a></p>

      </div>
    );
  }
}
export default RecordsPage;
