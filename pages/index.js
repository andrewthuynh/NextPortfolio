import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import PhotoGrid from '../components/photoGrid'
import Button from '@material-ui/core/Button';

const styles = theme => ({
    intro: {
        //backgroundColor: "#667eea",
        backgroundColor: '#465775',
        margin: -10,
        padding: 0
    },
    introText: {
        paddingTop: 100,
        paddingLeft: 50,
        paddingRight: 50,
        paddingBottom: 50,
        color: '#ffd0ce'
    },
    introText2: {
        paddingLeft: 50,
        paddingRight: 50,
        paddingBottom: 100,
        color: '#ffd0ce'
    },
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
    header: {
        marginLeft: -10,
        paddingTop: 30,
        paddingLeft: '10%',
        paddingRight: '10%',
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
        width: '100%',
        height: 'auto'
    },
    button: {
        padding: 15
    }
});

class Index extends Component {
    state = {

    }
    render() {

        const { classes } = this.props;

        return (
            <Fragment>
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
                        <Grid container spacing={1} direction="row" justify="space-between" alignItems="center" className={classes.padding}>
                            <Grid container item xs={12} md={6} spacing={3} >
                                <Typography variant='h2' color="inherit" className={classes.padding}><b>An avid techie trying to find his place in the industry.</b></Typography>
                                <Typography variant='h5' color="inherit" >Hello! I am a recent graduate from the University of Georgia with a degree in Computer Science and am <b>currently looking for full-time opportunities in web/mobile development</b>.</Typography>
                                <Typography variant='h5' color="inherit" className={classes.padding}>Whenever I am not coding, I enjoy making music, hanging with my friends, and playing video games.</Typography>
                                <Typography variant='h5' color="inherit" className={classes.padding2}>Please look around to learn more about me and some of the projects I have worked on!</Typography>
                            </Grid>
                            <Grid container item xs={12} md={6} spacing={3}>
                                <img src="../static/home.jpg" className={classes.image} />
                            </Grid>
                        </Grid>
                        <hr style={{ marginTop: 40 }} />
                    </div>
                </section>
                <img src="../static/Arch.png" className={classes.image3} />

                <section className={classes.section}>
                    <div className={classes.sectionText}>
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
                <section className={classes.section}>
                    <div className={classes.sectionText}>
                        <Typography variant='h2' color="inherit" style={{ paddingBottom: 30 }}><b>projects</b></Typography>
                        <Button variant="outlined" color="inherit" href="https://github.com/andrewthuynh" className={classes.button} target="_blank" style={{ marginBottom: 30 }}>
                        <Typography variant='h5' color="inherit" align="center">MORE WORKS</Typography>
                        </Button>
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
export default withStyles(styles)(Index);