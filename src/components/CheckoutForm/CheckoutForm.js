import React, { Component } from "react";
import { CardElement, injectStripe } from "react-stripe-elements";

const exampleStyes = {
    height: "40rem",
    width: "40rem",
    border: "2px solid black",
    fontSize: "1.5rem",
    backgroundColor: "#f5f5f5"
}

class CheckoutForm extends Component {
  constructor(props) {
    super(props);
    this.state = {complete: false};
    this.submit = this.submit.bind(this);
  }

  // tokenize the card information
  async submit(ev) {
    // call the createToken fn on the stripe prop
    let { token } = await this.props.stripe.createToken({ name: "Name" });
    // make a post request to /charge (which is proxied to the backend node application)
    // send the token id to the server
    let response = await fetch("/charge", {
      method: "POST",
      headers: { "Content-Type": "text/plain" },
      body: token.id
    });

    if (response.ok) this.setState({complete: true});
  }

  render() {
    if (this.state.complete) return <h1>Purchase Complete</h1>;
    return (
      <div className="checkout" style={exampleStyes}>
        <p>Would you like to complete the purchase?</p>
        <CardElement />
        <button onClick={this.submit}>Purchase</button>
      </div>
    );
  }
}

// export the CheckoutForm wrapped in injectStripe 
// this gives CheckoutForm a stripe prop)
export default injectStripe(CheckoutForm);
