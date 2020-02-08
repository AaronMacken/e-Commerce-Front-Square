import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import './FunFact.css';

export default class FunFact extends Component {
    render() {
        const { heading, text, icon } = this.props;
        const styles = {
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
        }
        return (
            <Grid item xs={12} sm={6} lg={3} style={styles}>
                <i className={`${icon} fact-icon`} />
                <h6 className="fact-heading">{heading}</h6>
                <p className="fact-text">{text}</p>
            </Grid>

        )
    }
}
