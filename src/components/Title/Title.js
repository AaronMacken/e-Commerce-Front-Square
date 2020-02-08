import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.p`
font-size: 3rem;
margin: auto;
margin-bottom: 4rem;
text-align: center;
font-weight: 100;
font-family: sans-serif;
&:after {
    display: block;
    height: 2px;
    background-color: #5c9c55;
    content: " ";
    width: 100px;
    margin: 0 auto;
    margin-top: 2rem;
}
`;

export default class Title extends Component {
  render() {
    return <Container>{this.props.text}</Container>;
  }
}
