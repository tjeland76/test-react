import React from 'react';
import { Control, Form, actions, Errors } from 'react-redux-form';
import nodemailer from 'nodemailer';

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
    
  handleSubmit(user) {
    //event.preventDefault();
    console.log(user);  
    fetch('/send-contact', { 
        method: 'POST',
        body: JSON.stringify({
          "email": "tjeland76@gmail.com",
          "name": "sdfsdf",
          "message": "sdfsdfwW"
        }),
        headers: new Headers({ "Content-Type": "application/json" })
      })
      .then(function(response) {
        console.log(response);
        this.setState({
            messageSent: true
        });
      }).then(function(body) {
        console.log(body);
      });  
      
    
  }
    
  render() {
      
    function emailIsValid(email) {
    // terrible validation, I know
        return email && email.length > 0;
    }

      // in the connected component's render() method...
      const { dispatch, user } = this.props;
      
    const MessageSent = (props) => {
      return (
         <div className="alert alert-success col-sm-9">Thank you, we have received your message.</div> 
      );
    };
    return (
      <div className="container">
        <h2>Contact Us</h2>

        
        
        <Form
        model="user"
        onSubmit={(user) => this.handleSubmit(user)} className="form-horizontal" name="contactForm" 
      >

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
                    <Control.text model="user.name" id="user.name" className="form-control" placeholder="Your name" required validateOn="blur" onChange={this.handleInputChange}/>
                    <Errors
                        className="errors"
                        model="user.name"
                        show="touched"
                        messages={{
                          valueMissing: 'Name is required'
                        }}
                    />
                </div>
            </div>

            <div className="form-group" >
                <label  className="col-sm-2 control-label">Email</label>
                <div className="col-sm-7">
                    <Control.text model="user.email" id="user.email" className="form-control" placeholder="Your email" required validateOn="blur"/>
                    <Errors
                        className="errors"
                        model="user.email"
                        show="touched"
                        messages={{
                          valueMissing: 'Email is required',
                          typeMismatch: 'Invalid email address'
                        }}
                    />
                </div>
            </div>

            <div className="form-group" >
                <label  className="col-sm-2 control-label">Message</label>
                <div className="col-sm-7">
                    <Control.textarea model="user.message" id="user.message" className="form-control" placeholder="Your message" rows="6" onChange={this.handleInputChange}  required validateOn="blur"/>
                        <Errors
                        className="errors"
                        model="user.message"
                        show="touched"
                        messages={{
                          valueMissing: 'Message is required'
                        }}
                        />
                </div>
            </div>


            <div className="form-group">
                <div className="col-sm-9 text-right">
                    <input type="submit" className="genericButton submitButton" value="Send"/>
                </div>
            </div>

            {this.state.messageSent ? <MessageSent /> : null}

        </fieldset>
    </Form>
      </div>
    );
  }
}
export default ContactUsPage;
