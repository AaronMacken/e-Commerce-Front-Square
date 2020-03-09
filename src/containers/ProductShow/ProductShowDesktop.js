import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import './ProductShowDesktop.css';
import { Link } from 'react-router-dom';
import '../../components/QtySelector/QtySelector';
import { addItem } from "../../store/actions/itemActions";
import { connect } from "react-redux";
import { toast } from "react-toastify";

class ProductShowDesktop extends Component {
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
                <Grid item xs={12} md={6} className="image-col">
                    <img className="image-ps" src={`${this.props.img}`} alt={this.props.title}></img>
                    <Link to="/Products" style={{ textDecoration: 'none', marginBottom: "2rem" }}>
                        <button className="green-btn green-btn-inverse-mb" style={{ margin: 0, width: "40rem" }}>See our products</button>
                    </Link>
                </Grid>

                <Grid item sm={6}>
                    <div className="data-col">
                        <div className="data-div-1">
                            <h1>{`${this.props.title}`}</h1>
                            <p>{`$${this.props.price}`}</p>

                            <p className="description-ps">{`${this.props.description}`}</p>
                            <p className="description-ps"><span style={{fontWeight: "bold"}}>Category: </span>{`${this.props.category}`}</p>
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

                            <div className="button-col-ps-st">
                                <button className="green-btn" style={{ margin: '0', marginBottom: "2rem", width: "40rem" }} onClick={this.addToCart}>
                                    Add to cart
                            </button>
                            </div>
                        </div>
                    </div>
                </Grid>
            </Grid>

        )
    }
}

export default connect(null, { addItem })(ProductShowDesktop);