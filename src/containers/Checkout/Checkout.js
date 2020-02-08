import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { connect } from "react-redux";
import "./Checkout.css";
import { removeAllItems } from "../../store/actions/itemActions";
import { toast } from "react-toastify";

class Checkout extends React.Component {

  // toast functions
  notifySuccess = () =>
    toast(`Thanks for shopping! Your receipt will be e-mailed shortly.`, {
      className: "successToast"
    });
  notifyFailure = () =>
    toast(
      `Something went wrong during the transaction. If this continues, please give us a call!`,
      { className: "failureToast", progressClassName: "failBackground" }
    );

  constructor(props) {
    super(props);
    this.onToken = this.onToken.bind(this);
  }

  // to get the value from this request, convert to async await syntax
  async onToken(token, addresses) {
    // send with the axios post the token (which includes all address data)
    // and product data coming from redux state
    // await the post request to assign the value of that to a variable

    const cartPayload = {
      orderString: this.props.name,
      data: this.props.data
    };

    const response = await axios.post("/charge", {
      token,
      checkoutItems: cartPayload
    });

    const { status } = response.data;
    if (status === "success") {
      this.props.removeAllItems();
      this.notifySuccess();
    } else {
      this.notifyFailure();
    }
  }

  render() {
    return (
      <div className="checkout-wrapper">
        <StripeCheckout
          stripeKey={this.props.stripeKey} // stripe pk here
          token={this.onToken}
          billingAddress
          shippingAddress
          // multiply dollar amounts by 100 to convert to cents
          amount={this.props.amount * 100}
          name={this.props.name}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  checkoutItems: state.checkoutItems.items
});

export default connect(mapStateToProps, { removeAllItems })(Checkout);
