import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import './ProductShowMobile.css';
import { Link } from 'react-router-dom';
import '../../components/QtySelector/QtySelector';
import { addItem } from "../../store/actions/itemActions";
import { connect } from "react-redux";
import { toast } from "react-toastify";

class ProductShowMobile extends Component {
    constructor(props) {
        super(props);

        this.state = {
            numberOfItems: 1
        };
        this.addToCart = this.addToCart.bind(this);
        this.handleInputIncrement = this.handleInputIncrement.bind(this);
        this.handleInputDecrement = this.handleInputDecrement.bind(this);
    }



    handleInputIncrement(event) {
        this.setState({ numberOfItems: this.state.numberOfItems + 1 });
    }

    handleInputDecrement(event) {
        this.setState({ numberOfItems: this.state.numberOfItems - 1 });
        if (this.state.numberOfItems < 2) {
            this.setState({ numberOfItems: 1 });
        }
    }

    addToCart() {
        // payload for redux when adding items to state
        const payload = {
            title: this.props.title,
            price: this.props.price,
            id: this.props.id,
            img: this.props.img,
            qty: this.state.numberOfItems
        };
        this.props.addItem(payload);
        toast(`Item added to cart. Proceed to the cart page to process payment.`, {
            className: "successToast"
        });
    }


    render() {
        return (
            <Grid container spacing={3}>

                <Grid item className="image-col image-col-mb">
                    <img className="image-ps-mobile" src={this.props.img} alt={this.props.title}></img>
                </Grid>

                <Grid item xs={12}>
                    <div className="data-col-mb">
                        <div className="data-div-1">
                            <h1>{`${this.props.title}`}</h1>
                            <p>{`$${this.props.price}`}</p>

                            <p className="description-ps">{`${this.props.description}`}</p>
                            <div style={{ marginBottom: "2rem" }}>
                                <div className="qty-selector-wrapper">
                                    <button
                                        className="decrement counter-btn"
                                        onClick={this.handleInputDecrement}
                                    >
                                        -
                                    </button>

                                    <input
                                        type="number"
                                        placeholder="Qty"
                                        readOnly
                                        className="qty-input"
                                        value={this.state.numberOfItems}
                                    ></input>

                                    <button
                                        className="increment counter-btn"
                                        onClick={this.handleInputIncrement}
                                    >
                                        +
                                    </button>
                                </div>
                            </div>

                            <div className="button-col-ps-st button-col-ps-st-mb ps-add">
                                <button className="green-btn" style={{ margin: '0', marginBottom: "2rem", width: "70vw" }} onClick={this.addToCart}>
                                    Add to cart
                                </button>
                            </div>
                            <Link to="/Products" style={{ textDecoration: 'none', marginBottom: "2rem" }}>
                                <button className="green-btn green-btn-inverse-mb" style={{ width: "70vw" }}>See our products</button>
                            </Link>
                        </div>
                    </div>
                </Grid>
            </Grid>
        )
    }
}

export default connect(null, { addItem })(ProductShowMobile);
