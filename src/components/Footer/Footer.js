import React, { Component } from "react";
import "./Footer.css";
import Logo from "../Logo/Logo";

export default class Footer extends Component {
  render() {
    return (
      <section className="footer-section">
        <div className="footer-col-left footer-col mt-3">
          <Logo />
          <p className="info">thehippiehouse336@gmail.com</p>
          <p className="info">Winston-Salem Location: (336) 661-8043</p>
          {/* <p className="info">Greensboro Location: (336) 875-4042</p> */}
        </div>
        <div className="footer-col-right footer-col">
          <Logo />
          <p className="info">13 Clemmonsville Rd, Winston-Salem, NC 27127</p>
          {/* <p className="info">10418 North Main St. Suite-P Archdale, NC 27263</p> */}
        </div>
      </section>
    );
  }
}
