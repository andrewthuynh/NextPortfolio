import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import AppDrawer from '../components/AppDrawer';
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
});

class About extends Component {
    state = {

    }
    render() {

        const { classes } = this.props;

        return (
            <Fragment>
                <section className={classes.section}>
                    <div className={classes.sectionText}>
                        <AboutGrid />
                        <Typography variant='h2' color="inherit" className={classes.padding}><b>my life story</b></Typography>
                        <Typography variant='h5' color="inherit" ><ArrowForwardIcon /> 22 years old</Typography>
                        <Typography variant='h5' color="inherit" className={classes.padding}><ArrowForwardIcon /> Augusta, Georgia - born and raised</Typography>
                        <Typography variant='h5' color="inherit"><ArrowForwardIcon /> Traveled to Athens to learn all about programming and the Dawgs</Typography>
                        <hr style={{ marginTop: 40 }} />
                        <Grid container spacing={1} direction="row" justify="space-evenly" alignItems="center" className={classes.padding}>
                            <Grid container item xs={12} md={6} spacing={3} >
                                <Typography variant='h2' color="inherit" style={{ paddingBottom: 30 }}><b>fun facts</b></Typography>
                                <section>
                                    <Typography variant='h5' color="inherit" className={classes.padding3}>• I first "tried" programming when I was 11 and played <a href="https://www.w3schools.com/" target="_blank" rel="noopener noreferrer">Roblox</a>. It wasn't until I went to college that I actually wanted to pursue programming!</Typography>
                                    <Typography variant='h5' color="inherit" className={classes.padding3}>• I started playing piano when I was 8 years old. I make covers from time-to-time!</Typography>
                                    <Typography variant='h5' color="inherit" className={classes.padding3}>• I love KBBQ</Typography>
                                    <Typography variant='h5' color="inherit" className={classes.padding3}>• I enjoy traveling and exploring new things - let's be travel buddies!</Typography>
                                </section>
                            </Grid>
                            <Grid container item xs={12} md={6} spacing={3}>
                                <PhotoGrid />
                            </Grid>
                        </Grid>
                    </div>
                </section>
               
            </Fragment>
        )
    }
}
export default withStyles(styles)(About);