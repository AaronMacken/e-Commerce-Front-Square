import React, { Component } from 'react';
import Title from '../../components/Title/Title';
import { Link } from "react-router-dom";
import LandingButton from '../../components/LandingButton/LandingButton';

export default class EmptyCartMobile extends Component {
    render() {
        return (
            <div className="cart-page">
                <Title text={"Shopping Cart"} />
                <div className="cart-col-wrapper">
                    <div className="cart-col-small">
                        <h2>Cart is empty</h2>
                    </div>
                    <div className="cart-col-small">
                        <Link to="/Products" style={{ textDecoration: "none" }}>
                            <LandingButton text="See our products"></LandingButton>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}
