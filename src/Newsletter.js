import React from 'react';
import axios from 'axios';
import swal from 'sweetalert2';

class Newsletter extends React.Component {
  constructor(props){
    super(props),
    this.state = {
      email : ''
    }
    this.handleEmailInput = this.handleEmailInput.bind(this);
    this.handleSubscribe = this.handleSubscribe.bind(this);
  }

  handleEmailInput(e){
    this.setState({email: e.target.value});
  }

  handleSubscribe(){
    if(this.state.email){
      axios.post('/subscribe', {
        email : this.state.email
      })
      .then(res => {
        console.log(res.body.status);
        swal({
          title: 'Subscribed',
          text: 'Thank you for joining our newsletter!',
          imageUrl: 'https://cdn.dribbble.com/users/784413/screenshots/3818347/mail.gif',
          imageSize: '100x100',
          imageAlt: 'Custom image',
        })
        console.log("Successfully subscribed, data => ", res.data);
        document.getElementById('newsEmail').reset();
      })
      .catch(error => {
        console.log("Error subscribing ", error.response);
      })
    } else {
      swal(
        'Error',
        'Please fill out all fields!',
        'error'
      )
    }
  }

  render() {
    return(
      <div id="newsletter">
        <div>
          <h2>SUBSCRIBE TO NEWSLETTER</h2>
        </div>
        <div id="newsInput">
          <input id="newsEmail" type="email" placeholder="Your Email" onInput={this.handleEmailInput}/>
          <button id="subscribeButton" className="btn" onClick={this.handleSubscribe}>Subscribe</button>
        </div>
      </div>
    )
  }
}

export default Newsletter;
