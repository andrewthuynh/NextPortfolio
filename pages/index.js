import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { Typography, Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    intro: {
        backgroundColor: "#bee3f8"
    },
    introText: {
        margin: 100
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
                <Grid
                    justify='center'
                    direction='row'
                    alignItems='center'
                >
                    <div className={classes.intro}>
                        <div className={classes.introText}>
                            <Typography variant='h5'>Hello.</Typography>
                            <Typography variant='h2'>Welcome to my new website.</Typography>
                        </div>
                    </div>
                </Grid>
            </Fragment>
        )
    }
}

export default withStyles(styles)(Index);