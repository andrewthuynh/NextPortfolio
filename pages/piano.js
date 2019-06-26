import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import AboutGrid from '../components/aboutGrid';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import PhotoGrid from '../components/photoGrid'

const styles = theme => ({
    section: {
        margin: -10,
        padding: 0,
    },
    sectionText: {
        paddingLeft: '10%',
        paddingRight: '10%',
        paddingTop: '2%',
    },
    underline: {
        borderBottom: 'solid 2px #000000',
        display: 'inline',
        paddingBottom: 3,
        marginLeft: 40
    },
    padding: {
        paddingTop: 20,
        paddingBottom: 20
    },
    padding2: {
        paddingBottom: 30
    },
    padding3: {
        paddingBottom: 20
    },
    image: {
        maxWidth: '95%',
        height: 'auto'
    },
    image2: {
        maxWidth: '100%',
        height: 'auto'
    },
    image3: {
        maxWidth: '50%',
        height: 'auto'
    },
    video: {
        position: 'relative',
        paddingBottom: '56.25%',
        paddingTop: 30,
        height: 0,
        marginLeft: "10%",
        marginBottom: "-10%"
    },
    frame: {
        position: "absolute",
        top: 0,
        left: 0,
        width: "80%",
        height: "80%"
    }
});

class Piano extends Component {
    state = {

    }
    render() {

        const { classes } = this.props;

        return (
            <Fragment>

                <section className={classes.section}>
                    <div className={classes.sectionText}>
                        <Grid container spacing={1} direction="row" justify="space-evenly" alignItems="flex-start" className={classes.padding}>
                            <Grid container item xs={12} md={7} spacing={3}>
                                <img src="../static/piano.jpg" className={classes.image} />
                            </Grid>
                            <Grid container item xs={12} md={5} spacing={3} >
                                <section>
                                    <Typography variant='h2' color="inherit" className={classes.padding}><b>equipment</b></Typography>
                                    <Typography variant='h4' color="inherit">Piano: <b>Yamaha YDP-143</b></Typography>
                                    <Typography variant='h4' color="inherit" className={classes.padding}>Headphones: <b>beyerdynamic DT 990 PRO</b></Typography>
                                    <Typography variant='h4' color="inherit">Recording Software: <b>GarageBand</b></Typography>
                                    <Typography variant='h4' color="inherit" className={classes.padding}> VST: <b>Native Instuments : The Grandeur</b></Typography>
                                    <Typography variant='h4' color="inherit">Video Editor : <b>iMovie</b></Typography>
                                </section>
                            </Grid>
                            <Grid container item xs={12} spacing={3} >
                                <section>
                                    <Typography variant='h2' color="inherit" className={classes.padding}><b>covers</b></Typography>
                                </section>
                            </Grid>
                        </Grid>
                    </div>
                </section>
                <Typography variant='h4' color="inherit" className={classes.sectionText}><b>Wildcard</b></Typography>
                <div className={classes.video}>
                    <iframe className={classes.frame} src={`https://www.youtube.com/embed/tjMdCt9B0-M`} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen/>
                </div>
                <Typography variant='h4' color="inherit" className={classes.sectionText}><b>One Summer's Day</b></Typography>
                <div className={classes.video}>
                    <iframe className={classes.frame} src={`https://www.youtube.com/embed/1630M4O5MR4`} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen/>
                </div>
                <Typography variant='h4' color="inherit" className={classes.sectionText}><b>Merry Go Round of Life</b></Typography>
                <div className={classes.video}>
                    <iframe className={classes.frame} src={`https://www.youtube.com/embed/H9NC_kf1JBI`} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen/>
                </div>
                <Typography variant='h4' color="inherit" className={classes.sectionText}><b>One More Chance, One More Time</b></Typography>
                <div className={classes.video}>
                    <iframe className={classes.frame} src={`https://www.youtube.com/embed/k-C1VkhmSC8`} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen/>
                </div>
            </Fragment>
        )
    }
}
export default withStyles(styles)(Piano);