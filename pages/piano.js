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
        maxWidth: '60%',
        height: 'auto'
    },
    image2: {
        maxWidth: '100%',
        height: 'auto'
    },
    image3: {
        maxWidth: '50%',
        height: 'auto'
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
                        <Grid container spacing={1} direction="row" justify="space-around" alignItems="flex-start" className={classes.padding}>
                            <Grid container item xs={12} spacing={3}>
                                <img src="../static/piano.jpg" className={classes.image} />
                            </Grid>
                            <Grid container item xs={12} spacing={3} >
                                <section>
                                    <Typography variant='h2' color="inherit" className={classes.padding}><b>covers</b></Typography>
                                </section>
                            </Grid>
                        </Grid>
                    </div>
                </section>
            </Fragment>
        )
    }
}
export default withStyles(styles)(Piano);