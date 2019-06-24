import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { Typography, Grid, Container } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    intro: {
        backgroundColor: "#667eea",
        margin: -7,
        padding: 0
    },
    introText: {
        padding: 50,
        color: '#4fd1c5'
    }
});

class Index extends Component {
    state = {

    }
    render() {

        const { classes } = this.props;

        return (
            <Fragment>
                <Head>
                    <title>My New Portfolio</title>
                    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
                    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
                </Head>
                <section className={classes.intro}>
                    <div className={classes.introText}>
                        <Typography variant='h5' color="inherit" align="center">Hello!</Typography>
                        <Typography variant='h2' color="inherit" align="center">Welcome to my new website.</Typography>
                    </div>
                </section>
            </Fragment>
        )
    }
}

export default withStyles(styles)(Index);