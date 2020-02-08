import React, { Component } from "react";
import { connect } from "react-redux";
import CartItem from "../CartItem/CartItem";
import ShippingFee from './ShippingFee';
import "./Cart.css";
import "react-toastify/dist/ReactToastify.css";
import EmptyCartDesktop from './EmptyCartDesktop';
import EmptyCartMobile from './EmptyCartMobile';
import FullCartMobile from './FullCartMobile';
import FullCartDesktop from './FullCartDesktop';
import { removeAllItems } from "../../store/actions/itemActions";
import { toast } from "react-toastify";


class Cart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isDesktop: false,
      isOpenModal: false
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.updatePredicate = this.updatePredicate.bind(this);
    this.handleResponse = this.handleResponse.bind(this);
  }

  openModal() {
    this.setState({ isOpenModal: true })
  }

  closeModal() {
    this.setState({ isOpenModal: false })
  }

  componentDidMount() {
    this.updatePredicate();
    window.addEventListener("resize", this.updatePredicate);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updatePredicate);
  }

  updatePredicate() {
    this.setState({ isDesktop: window.innerWidth > 975 });
  }


  getOrderString(reduxState) {
    let orderItems = reduxState.map((item, index) => {
      return `${item.title} x${item.qty}`;
    });
    return orderItems.join(", ");
  }

  getOrderPrice(reduxState) {
    let subTotal = 0;
    reduxState.forEach(item => {
      subTotal += item.qty * item.price;
    });
    return subTotal;
  }

  getTotal(subTotal) {
    if (subTotal >= 60) {
      return subTotal
    } else {
      return (this.getOrderPrice(this.props.checkoutItems) + 5.50).toFixed(2)
    }
  }

  getOrderData(reduxState) {
    let dataArray = reduxState.map(e => {
      return { id: e.id, qty: e.qty }
    })
    return dataArray;
  }

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

  handleResponse(status) {
    if (status === "success") {
      this.props.removeAllItems();
      this.setState({ isOpenModal: false })
      this.notifySuccess();
    } else {
      this.notifyFailure();
    }
  }

  render() {
    const isDesktop = this.state.isDesktop;
    // CART ITEMS FROM REDUX STATE
    const cartItems = this.props.checkoutItems.map((item, index) => (
      <CartItem
        title={item.title}
        price={item.price}
        img={item.img}
        index={index}
        id={item.id}
        key={index}
        qty={item.qty}
      />
    ));

    const checkoutItems = this.props.checkoutItems.map((item, index) => {
      return (
        <li key={index} className="cart-item-li">
          {item.title} x{item.qty}
        </li>
      );
    })

    let shippingFeeComponent = (this.getOrderPrice(this.props.checkoutItems).toFixed(2) >= 60 ? (<ShippingFee wavedShipping />) : (<ShippingFee />))

    if (isDesktop) {
      if (this.props.checkoutItems.length < 1) {
        return <EmptyCartDesktop />
      } else {
        return <FullCartDesktop
          cartItems={cartItems}
          checkoutItems={checkoutItems}
          shippingFeeComponent={shippingFeeComponent}
          total={this.getTotal(this.getOrderPrice(this.props.checkoutItems).toFixed(2))}
          amount={this.getTotal(this.getOrderPrice(this.props.checkoutItems))}
          data={this.getOrderData(this.props.checkoutItems)}
          name={this.getOrderString(this.props.checkoutItems)}
          handleResponse={this.handleResponse}
          openModal={this.openModal} closeModal={this.closeModal} isOpenModal={this.state.isOpenModal}
        />
      }
    } else {
      if (this.props.checkoutItems.length < 1) {
        return <EmptyCartMobile />
      } else {
        return <FullCartMobile
          cartItems={cartItems}
          checkoutItems={checkoutItems}
          shippingFeeComponent={shippingFeeComponent}
          total={this.getTotal(this.getOrderPrice(this.props.checkoutItems).toFixed(2))}
          amount={this.getTotal(this.getOrderPrice(this.props.checkoutItems))}
          data={this.getOrderData(this.props.checkoutItems)}
          name={this.getOrderString(this.props.checkoutItems)}
          handleResponse={this.handleResponse}
          openModal={this.openModal} closeModal={this.closeModal} isOpenModal={this.state.isOpenModal}
        />
      }
    }
  }
}

const mapStateToProps = state => ({
  checkoutItems: state.checkoutItems.items
});

export default connect(mapStateToProps, { removeAllItems })(Cart);

