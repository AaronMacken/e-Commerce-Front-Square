import React, { Component } from 'react';
import ModalMUI from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import axios from "axios";
import './Square.css';
import SquarePaymentForm, {
    CreditCardNumberInput,
    CreditCardExpirationDateInput,
    CreditCardPostalCodeInput,
    CreditCardCVVInput,
    CreditCardSubmitButton
} from 'react-square-payment-form';
import Grid from '@material-ui/core/Grid';


export default class SquareModal extends Component {
    constructor(props) {
        super(props)
        this.state = {
            errorMessages: [],
            name: "",
            email: "",
            streetAddress1: "",
            streetAddress2: "",
            city: "",
            state: "",
            zip: ""
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }


    cardNonceResponseReceived = async (errors, nonce, cardData, buyerVerificationToken) => {
        if (errors) {
            this.setState({ errorMessages: errors.map(error => error.message) })
            return
        }
        this.setState({ errorMessages: [] })

        const cartPayload = {
            orderString: this.props.orderString,
            data: this.props.data
        };

        const response = await axios.post("/charge", {
            name: this.state.name,
            email: this.state.email,
            streetAddress1: this.state.streetAddress1,
            streetAddress2: this.state.streetAddress2,
            city: this.state.city,
            state: this.state.state,
            zip: this.state.zip,
            nonce: nonce,
            checkoutItems: cartPayload
        })

        const { status } = response.data;
        this.props.handleResponse(status);
    }



    render() {
        const { name, email, streetAddress1, streetAddress2, city, state, zip } = this.state
        const { total } = this.props;
        return (
            <ModalMUI
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={this.props.isOpenModal}
                onClose={this.props.closeModal}
                className="modal"
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >

                <Fade in={this.props.isOpenModal}>
                    <div className="paper paper-s">
                    <h2 className="transition-modal-title">Products are currently available for in-store purchase only</h2>
                        <p className="transition-modal-description">We are currently in the process of integrating to our new credit card payment provider.</p>
                        <p className="transition-modal-description">We will be up and running as soon as this process is completed. We thank you for your patience.</p>
                        <p className="transition-modal-description">If you have any questions, please call (336) 661-8043</p>
                        {/* <SquarePaymentForm
                            sandbox={true}
                            applicationId="place ID here"
                            locationId="place Location ID here"
                            cardNonceResponseReceived={this.cardNonceResponseReceived}
                        >
                            <Grid container spacing={0} className="sq-fieldset">

                                <Grid item xs={12} md={6} className="sqm-customer">
                                    <div className="sqm-col sqm-customer-1">
                                        <h3 className="section-h3">Personal Information</h3>
                                        <div>
                                            <label className="sqm-label" >Name</label>
                                            <br />
                                            <input type="text" id="name" name="name" placeholder="Name" className="sqm-input" onChange={this.handleChange} value={name} required />
                                        </div>
                                        <div>
                                            <label className="sqm-label">Email</label>
                                            <br />
                                            <input type="email" id="email" name="email" placeholder="Email" required className="sqm-input" onChange={this.handleChange} value={email} />
                                        </div>

                                    </div>

                                    <div className="sqm-col sqm-customer-2">
                                        <h3 className="section-h3"> Shipping Address</h3>

                                        <label className="sqm-label">Street</label>
                                        <input className="sqm-input" type="text" id="streetAddress1" name="streetAddress1" placeholder="Address Line 1" onChange={this.handleChange} value={streetAddress1} />

                                        <label className="sqm-label">Street</label>
                                        <input className="sqm-input" type="text" id="streetAddress2" name="streetAddress2" placeholder="Address Line 2" onChange={this.handleChange} value={streetAddress2} />

                                        <label className="sqm-label">City</label>
                                        <input className="sqm-input" type="text" id="city" name="city" placeholder="City" onChange={this.handleChange} value={city} />

                                        <label className="sqm-label">State</label>
                                        <input className="sqm-input" type="text" id="state" name="state" placeholder="2 Digit State" maxlength={2} onChange={this.handleChange} value={state} />

                                        <label className="sqm-label">Zip</label>
                                        <input className="sqm-input" type="text" id="zip" name="zip" placeholder="Zip" maxlength={5} onChange={this.handleChange} value={zip} />
                                    </div>
                                </Grid>
                                <Grid item xs={12} md={6} className="sqm-payment">
                                    <h3 className="section-h3">Payment Information</h3>
                                    <CreditCardNumberInput />
                                    <div className="sq-form-third">
                                        <CreditCardExpirationDateInput />
                                    </div>

                                    <div className="sq-form-third">
                                        <CreditCardPostalCodeInput />
                                    </div>

                                    <div className="sq-form-third">
                                        <CreditCardCVVInput />
                                    </div>

                                    <CreditCardSubmitButton>
                                        Confirm payment for ${Number(total).toFixed(2)}
                                    </CreditCardSubmitButton>

                                    <div className="sq-error-message">
                                        {this.state.errorMessages.map(errorMessage =>
                                            <li key={`sq-error-${errorMessage}`}>{errorMessage}</li>
                                        )}
                                    </div>

                                    <Grid container className="square-info">
                                        <Grid lg={6}>
                                              <img src="/square.jpg" className="square-img"></img>
                                        </Grid>
                                      
                                        <Grid item lg={6} className="square-info-p">
                                            <p>Use our PCI complient payment form to safely pay for your products!</p>
                                            <p>By confirming payment, you agree to letting us store your data to create a customer profile. (Credit card info will not be saved).</p>
                                        </Grid>
                                    </Grid>


                                </Grid>
                            </Grid>
                        </SquarePaymentForm> */}

                    </div>
                </Fade>

            </ModalMUI >

        )
    }
}
