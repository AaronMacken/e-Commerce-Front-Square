import React, { Component } from "react";
import "./CartItem.css";
import CloseBtn from "../../components/CloseBtn/CloseBtn";
import { connect } from "react-redux";
import { removeItem, increaseQty, decreaseQty } from "../../store/actions/itemActions";
import { Link } from 'react-router-dom';

class CartItem extends Component {
  constructor(props) {
    super(props);
    this.removeFromCart = this.removeFromCart.bind(this);
    this.increaseQuantity = this.increaseQuantity.bind(this);
    this.decreaseQuantity = this.decreaseQuantity.bind(this);
  }

  // calls action from props that removes an index from the array
  removeFromCart() {
    this.props.removeItem(this.props.index);
  }

  increaseQuantity() {
    this.props.increaseQty(this.props.index);
  }

  decreaseQuantity() {
    this.props.decreaseQty(this.props.index);
  }

  render() {
    const { title, price, img, qty, id } = this.props;
    return (
      <div className="cart-item" key={id}>
        <Link to={`/Products/${id}`} className="product-link" >
          <img className="cart-item-img" src={`${img}`} alt={title}></img>
        </Link>

        <div className="cart-item-col">
          <Link to={`/Products/${id}`} className="product-link" >
            <h2>{title}</h2>
          </Link>

          <h3>${(price * qty).toFixed(2)}</h3>

          {/* <QtySelector /> */}
          <div className="qty-selector-wrapper">
            <button
              className="decrement counter-btn"
              onClick={this.decreaseQuantity}
            >
              -
            </button>

            <input
              type="number"
              placeholder="Qty"
              readOnly
              className="qty-input"
              value={qty}
            ></input>

            <button
              className="increment counter-btn"
              onClick={this.increaseQuantity}
            >
              +
            </button>
          </div>
        </div>
        <CloseBtn className="cart-item-close" onClick={this.removeFromCart}>
          X
        </CloseBtn>
      </div>
    );
  }
}

export default connect(null, { removeItem, increaseQty, decreaseQty })(CartItem);
