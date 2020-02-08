import React, { Component } from "react";
import "./Logo.css";

// Styled component that uses the path prop values

export default class Logo extends Component {
  render() {
    return (
        <span className="brand-text">
          Hippie<span className="brand-text-highlight">House</span>
        </span>
    );
  }
}
