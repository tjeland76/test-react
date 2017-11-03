import React from 'react';

class MembershipPage extends React.Component {
  render() {
    return (
      <div className="container">
        <h2>Membership</h2>

        <p><b>The standard membership fee for 2017 is £10.00</b></p>

        <p>With club membership you will be able to:</p>
        <ul>
            <li>Be a member of an ASA Affiliated Swimming Club</li>
            <li>Represent Warrington Masters in competitions</li>
            <li>Receive our regular emails, including information on forthcoming events</li>
            <li>Support the promotion of Masters Swimming</li>
            <li>Enable the club to purchase and access grant funding for training equipment</li>
            <li>Chat with us on social media for advice and news</li>
        </ul>

        <p>Members pay for pool time through other organisations such as LiveWire, therefore our membership fees are very reasonable! We don’t currently offer any ‘club-only’ training sessions - please see our Training page for further information</p>

        <p>
            To join Warrington Masters please email us: <a href="mailto:hello@warringtonmasters.co.uk">hello@warringtonmasters.co.uk</a> requesting a membership form or alternatively click <a href="#/contact">here</a>.
        </p>

        <p><b>ASA registration fees 2017</b></p>

        <p>If you wish to compete in 2017 and are not yet registered with the ASA then you have the option to pay your ASA fee when you join.</p>

        <b>Cat 1:</b> £15.40 Comprising: £5.50 to NW Region, £8.90 to ASA and £1.00 to Cheshire (entry level competitions / new to masters)<br/>

        <b>Cat 2:</b> £32.00 Comprising: £5.50 to NW Region), £25.50 to ASA and £1.00 to Cheshire<br/>

        <b>Cat 3:</b> £11.50 Applies to non-swimming officials and helpers only

        <p>&nbsp;</p>
      </div>
    );
  }
}
export default MembershipPage;
