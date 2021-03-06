import React, { Component } from 'react';
import Title from '../../components/Title/Title';
import SquareModal from '../../components/SquareModal/SquareModal';
import LandingButton from '../../components/LandingButton/LandingButton';

export default class FullCartMobile extends Component {
    render() {
        return (
            <div className="cart-page">
                <Title text={"Shopping Cart"} />
                <div className="cart-col-wrapper">
                    {/* RIGHT SIDE COLUMN */}
                    <div className="cart-col-right">{this.props.cartItems}</div>
                    <div className="cart-col even">
                        {/* LEFT TOP */}
                        <div className="col-left-top">
                            {/* display data */}
                            <h2 className="sub-total">Order</h2>
                            <ul className="cart-items-list">
                                {this.props.checkoutItems}
                                {this.props.shippingFeeComponent}
                            </ul>
                        </div>
                    </div>
                    {/* LEFT BOTTOM */}
                    <div className="col-left-bottom">
                        <h2 className="sub-total">
                            {/* Display total, round deciaml */}
                            Total: $ {this.props.total}
                        </h2>
   
                        <div onClick={this.props.openModal}>
                            <LandingButton text="Pay With Card" />
                        </div>
                        <SquareModal 
                        isOpenModal={this.props.isOpenModal} 
                        closeModal={this.props.closeModal} 
                        total={this.props.amount} 
                        orderString={this.props.name}
                        handleResponse={this.props.handleResponse}
                        data={this.props.data}
                        />
                    </div>
                </div>
            </div>
        )
    }
}
