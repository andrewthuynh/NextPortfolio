import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { Typography, Grid, Container } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import NavButtons from '../components/NavButtons';

const styles = theme => ({
    intro: {
        //backgroundColor: "#667eea",
        backgroundColor: '#F4796B',
        margin: -10,
        padding: 0
    },
    introText: {
        paddingTop: 100,
        paddingLeft: 50,
        paddingRight: 50,
        paddingBottom: 50,
        color: 'white'
    },
    introText2: {
        paddingLeft: 50,
        paddingRight: 50,
        paddingBottom: 100,
        color: 'white'
    },
    section: {
        margin: -10,
        padding: 0,
    },
    sectionText: {
        paddingLeft: '20%',
        paddingTop: '2%',
    },
    underline: {
        borderBottom: 'solid 2px #000000',
        display: 'inline',
        paddingBottom: 3
    },
    padding: {
        paddingTop: 30
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
                    <title>Andrew Huynh</title>
                    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
                    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
                </Head>
                <section className={classes.intro}>
                    <div className={classes.introText}>
                        <Typography variant='h5' color="inherit" align="center">Hello!</Typography>
                        <Typography variant='h2' color="inherit" align="center">Welcome to my new website.</Typography>
                    </div>
                    <div className={classes.introText2}>
                        <Typography variant='h4' color="inherit" align="center">I'm</Typography>
                        <Typography variant='h2' color="inherit" align="center">Andrew Huynh</Typography>
                    </div>
                </section>
                <section className={classes.section}>
                    <div className={classes.sectionText}>
                        <Typography variant='h1' color="inherit" className={classes.underline}>Sections</Typography>
                    </div>
                    <NavButtons />
                </section>
                <section className={classes.section}>
                    <div className={classes.sectionText}>
                        <Typography variant='h1' color="inherit" className={classes.underline}>About</Typography>
                    </div>
                </section>
                <section className={classes.section}>
                    <div className={classes.sectionText}>
                        <Typography variant='h1' color="inherit" className={classes.underline}>Code</Typography>
                    </div>
                </section>
                <section className={classes.section}>
                    <div className={classes.sectionText}>
                        <Typography variant='h1' color="inherit" className={classes.underline}>Piano</Typography>
                    </div>
                </section>
            </Fragment>
        )
    }
}

export default withStyles(styles)(Index);