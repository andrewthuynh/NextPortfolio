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
        maxWidth: '70%',
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

class Work extends Component {
    state = {

    }
    render() {

        const { classes } = this.props;

        return (
            <Fragment>
               
                <section className={classes.section}>
                    <div className={classes.sectionText}>
                        <Grid container spacing={1} direction="row" justify="space-evenly" alignItems="center" className={classes.padding}>
                            <Grid container item xs={12} md={6} spacing={3} >
                                <Typography variant='h2' color="inherit" style={{ paddingBottom: 30 }}><b>work experience</b></Typography>
                                <section>
                                    <Typography variant='h5' color="inherit" className={classes.padding3}><b>Software Engineering Intern | Savannah River Nuclear Solutions | Fall 2018 - Spring 2019</b></Typography>
                                    <Typography variant='h5' color="inherit" className={classes.padding3} style={{ paddingLeft: 20 }}>• Work in team sprints to develop custom web services to meet needs of clients across SRS </Typography>
                                    <Typography variant='h5' color="inherit" className={classes.padding3} style={{ paddingLeft: 20 }}>• Build responsive websites using ReactJS, NodeJS, and Spring Boot </Typography>
                                    <Typography variant='h5' color="inherit" className={classes.padding3} style={{ paddingLeft: 20 }}>• Assist in transitioning existing SOA front-end to Material Design</Typography>

                                    <Typography variant='h5' color="inherit" className={classes.padding3}><b>IT Intern – Audit Coordinator | ​Athens Micro | Summer 2018 </b></Typography>
                                    <Typography variant='h5' color="inherit" className={classes.padding3} style={{ paddingLeft: 20 }}>• Coordinate and build yearly IT audit to review company’s infrastructure, policies, and security  </Typography>
                                    <Typography variant='h5' color="inherit" className={classes.padding3} style={{ paddingLeft: 20 }}>• Work with various audit companies and company members to prepare for penetration test </Typography>
                                    <Typography variant='h5' color="inherit" className={classes.padding3} style={{ paddingLeft: 20 }}>• Develop risk assessment plan for future management review</Typography>
                                </section>
                            </Grid>
                            <Grid container item xs={12} md={6} spacing={3}>
                                <img src="../static/code.jpg" className={classes.image} />
                            </Grid>
                        </Grid>
                        <Typography variant='h2' color="inherit" style={{ paddingBottom: 30 }}><b>projects</b></Typography>
                        <Grid container spacing={1} direction="row" justify="space-between" alignItems="flex-start" className={classes.padding}>
                            <Grid container item xs={12} md={6} spacing={3} >
                                <img src="../static/ebooking.png" className={classes.image2} />
                                <Typography variant='subtitle1' color="inherit" className={classes.padding3}><b>Ebooking</b> - Software Engineering | <i>Spring 2018</i></Typography>
                            </Grid>
                            <Grid container item xs={12} md={6} spacing={3}>
                                <img src="../static/dogbot2.png" className={classes.image2} />
                                <Typography variant='subtitle1' color="inherit" className={classes.padding3}><b>Discord Dog Bot</b> - Personal Project | <i>Spring 2018</i></Typography>
                            </Grid>
                        </Grid>
                        <Grid container spacing={1} direction="row" justify="space-between" alignItems="flex-start" className={classes.padding}>
                            <Grid container item xs={12} md={4} spacing={3} >
                                <img src="../static/soar.png" className={classes.image2} />
                                <Typography variant='subtitle1' color="inherit" className={classes.padding3}><b>Soar Travel Planning App</b> - Directed Study | <i>Spring 2019</i></Typography>
                            </Grid>
                            <Grid container item xs={12} md={4} spacing={3}>
                                <img src="../static/ctnt.png" className={classes.image2} />
                                <Typography variant='subtitle1' color="inherit" className={classes.padding3}><b>Cook This Not That</b> - Human Computer Interaction | <i>Spring 2019</i></Typography>
                            </Grid>
                            <Grid container item xs={12} md={4} spacing={3}>
                                <img src="../static/joinotes.png" className={classes.image2} />
                                <Typography variant='subtitle1' color="inherit" className={classes.padding3}><b>JoiNotes</b> - UGAHacks | <i>Spring 2018</i></Typography>
                            </Grid>
                        </Grid>
                    </div>
                </section>
               
            </Fragment>
        )
    }
}
export default withStyles(styles)(Work);