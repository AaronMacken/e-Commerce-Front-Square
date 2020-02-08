import React, { Component } from "react";
import styled from "styled-components";

// Styled component that uses the path prop values
const Container = styled.div`
  height: 15rem;
  background-color: ${props => props.color};
  clip-path: polygon(${props => props.path});
`;

export default class LandingButton extends Component {
  render() {
    return (
      <Container path={this.props.path} color={this.props.color}/>
    );
  }
}

