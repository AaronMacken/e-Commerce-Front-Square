import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles({
    spinner: {
        color: 'green'
    }
})

export default function Spinner() {
    const classes = useStyles();
    return (
        <CircularProgress size={100} className={classes.spinner}/>
    )
}
