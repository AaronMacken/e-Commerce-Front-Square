import React, { Component } from "react";
import "./Home.css";
import ClipTransition from "../ClipTransition/ClipTransition";
import LandingButton from "../LandingButton/LandingButton";
import Title from '../Title/Title';
import { Link } from "react-router-dom";
import Items from '../../containers/Products/Items';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import FunFact from '../FunFact/FunFact';
import '../../containers/ProductShow/ProductShowMobile.css';

export default class Landing extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoading: false,
      items: []
    }
  }

  componentDidMount() {
    const fetchPosts = async () => {
      this.setState({ isLoading: true })
      const res = await axios.get('/api/products/recent');
      this.setState({ items: res.data })
      this.setState({ isLoading: false })
    }
    fetchPosts();
  }

  render() {
    return (
      <div className="landingPage">
        <header className="header">
          <div className="landing-col">
            <h1 className="header-title">The Hippie House</h1>

            <Link to="/Products" style={{ textDecoration: 'none', marginBottom: "2rem", width: "25vw", minWidth: "20rem" }}>
              <LandingButton text="See our products"></LandingButton>
              
            </Link>

          </div>
        </header>
       

        <section className="fun-facts-section">
          <Grid container spacing={3}>
          <FunFact heading="Who We Are" text="We are a family owned CBD dispensary located in Winston-Salem North Carolina, USA." icon="fas fa-globe-americas"/>
            <FunFact heading="Products" text="We carry a wide variety of CBD products, including: flowers, tinctures, salves and edibles." icon="fas fa-cannabis"/>
            <FunFact heading="Free Shipping" text="We are happy to offer FREE SHIPPING on orders of $60 or more!" icon="fas fa-shipping-fast"/>
            <FunFact heading="Age Limit" text="All products are intended for adults over the age of 21 and up." icon="fas fa-user-plus"/>
          </Grid>
        </section>
        <ClipTransition path="0 0, 100% 0%, 100% 30%, 0 82%" color="#5c9c55"/>
        <section className="product-list-section">
          <Title text={'New Arrivals'} />
          <Items items={this.state.items} loading={this.state.isLoading} />
          <div className="shop-all-btn-wrapper mb-5 mt-5">
            <Link to="/Products" style={{ textDecoration: 'none' }}>
              <button className="green-btn green-btn-inverse-mb" style={{width: "70vw"}}>See our products</button>
            </Link>
          </div>
        </section>
        
      </div>
    );
  }
}

