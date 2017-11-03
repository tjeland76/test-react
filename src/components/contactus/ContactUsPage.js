import React from 'react';

class ContactUsPage extends React.Component {
    
 constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: '',
      messageSent: false
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }    
    
  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      messageSent: true
    });
  }
    
  render() {
      
    const MessageSent = (props) => {
      return (
         <div className="alert alert-success col-sm-9">Thank you, we have received your message.</div> 
      );
    };
    return (
      <div className="container">
        <h2>Contact Us</h2>

        
        <form className="form-horizontal" name="contactForm" role="form" onSubmit={this.handleSubmit}>


        <fieldset>

            <div className="form-group">
                <div className="col-sm-12">
                    <p>Please complete the form below to send a message to us.  We will reply as soon as possible.<br/>
                    Alternatively you can email <a href="mailto:hello@warringtonmasters.co.uk">hello@warringtonmasters.co.uk</a></p>
                </div>
            </div>
            <div className="form-group">
                <label  className="col-sm-2 control-label">Name</label>
                <div className="col-sm-7">
                    <input id="name" name="name" className="form-control" placeholder="Your name" value={this.state.name} onChange={this.handleInputChange}/>
                </div>
            </div>

            <div className="form-group" >
                <label  className="col-sm-2 control-label">Email</label>
                <div className="col-sm-7">
                    <input id="email" type="email" name="email" className="form-control" placeholder="Your email address" value={this.state.email} onChange={this.handleInputChange}/>
                </div>
            </div>

            <div className="form-group" >
                <label  className="col-sm-2 control-label">Message</label>
                <div className="col-sm-7">
                    <textarea className="form-control" placeholder="Your message" rows="6" id="message" value={this.state.message} onChange={this.handleInputChange}></textarea>

                </div>
            </div>


            <div className="form-group">
                <div className="col-sm-9 text-right">
                    <input type="submit" className="genericButton submitButton" value="Send"/>
                </div>
            </div>

            {this.state.messageSent ? <MessageSent /> : null}

        </fieldset>
    </form>
      </div>
    );
  }
}
export default ContactUsPage;
