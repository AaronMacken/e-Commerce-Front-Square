import React, { Component } from "react";
import "./QtySelector.css";

export default class QtySelector extends Component {
  constructor(props) {
    super(props);

    this.state = {
      numberOfItems: 1
    };

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

  render() {
    return (
      <div className="qty-selector-wrapper">
        <button
          className="decrement counter-btn"
          onClick={this.handleInputDecrement}
        >-</button>

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
        >+</button>
      </div>
    );
  }
}
