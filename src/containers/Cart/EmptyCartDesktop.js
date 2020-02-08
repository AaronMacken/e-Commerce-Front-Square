import React, { Component } from 'react';
import Title from '../../components/Title/Title';
import { Link } from "react-router-dom";
import LandingButton from '../../components/LandingButton/LandingButton';

export default class EmptyCartDesktop extends Component {
    render() {
        return (
            <div>
                <div className="cart-page">
                    <Title text={"Shopping Cart"} />
                    <div className="cart-col-wrapper">
                        <div className="cart-col">
                            <h2>Cart is empty</h2>
                        </div>
                        <div className="cart-col">
                            <Link to="/Products" style={{ textDecoration: "none" }}>
                                <LandingButton text="See our products"></LandingButton>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
