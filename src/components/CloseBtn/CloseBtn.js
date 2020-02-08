import React, { Component } from 'react';
import './CloseBtn.css';

export default class CloseBtn extends Component {
    render() {
        return (
            <i className="fas fa-times" onClick={this.props.onClick}></i>
        )
    }
}
