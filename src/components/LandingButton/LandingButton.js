import React, { Component } from "react";
import './LandingButton.css';
export default class LandingButton extends Component {
  render() {
    return (
      <div className="green-btn"> 
        {this.props.text}
      </div>
    );
  }
}
