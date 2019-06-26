import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Carousel } from "react-responsive-carousel";

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

class Test extends Component {
    state = {

    }
    render() {

        const { classes } = this.props;

        return (
                <Carousel autoPlay>
                    <div>
                        <img src="http://lorempixel.com/output/cats-q-c-640-480-1.jpg" />
                        <p className="legend">Legend 1</p>
                    </div>
                    <div>
                        <img src="http://lorempixel.com/output/cats-q-c-640-480-2.jpg" />
                        <p className="legend">Legend 2</p>
                    </div>
                    <div>
                        <img src="http://lorempixel.com/output/cats-q-c-640-480-3.jpg" />
                        <p className="legend">Legend 3</p>
                    </div>
                    <div>
                        <img src="http://lorempixel.com/output/cats-q-c-640-480-4.jpg" />
                        <p className="legend">Legend 4</p>
                    </div>
                    <div>
                        <img src="http://lorempixel.com/output/cats-q-c-640-480-5.jpg" />
                        <p className="legend">Legend 5</p>
                    </div>
                    <div>
                        <img src="http://lorempixel.com/output/cats-q-c-640-480-6.jpg" />
                        <p className="legend">Legend 6</p>
                    </div>
                    <div>
                        <img src="http://lorempixel.com/output/cats-q-c-640-480-7.jpg" />
                        <p className="legend">Legend 7</p>
                    </div>
                    <div>
                        <img src="http://lorempixel.com/output/cats-q-c-640-480-8.jpg" />
                        <p className="legend">Legend 8</p>
                    </div>
                    <div>
                        <img src="http://lorempixel.com/output/cats-q-c-640-480-9.jpg" />
                        <p className="legend">Legend 9</p>
                    </div>
                    <div>
                        <img src="http://lorempixel.com/output/cats-q-c-640-480-10.jpg" />
                        <p className="legend">Legend 10</p>
                    </div>
                    <div>
                        <img src="http://lorempixel.com/output/cats-q-c-640-480-11.jpg" />
                        <p className="legend">Legend 11</p>
                    </div>
                    <div>
                        <img src="http://lorempixel.com/output/cats-q-c-640-480-12.jpg" />
                        <p className="legend">Legend 12</p>
                    </div>
                    <div>
                        <img src="http://lorempixel.com/output/cats-q-c-640-480-13.jpg" />
                        <p className="legend">Legend 13</p>
                    </div>
                    <div>
                        <img src="http://lorempixel.com/output/cats-q-c-640-480-14.jpg" />
                        <p className="legend">Legend 14</p>
                    </div>
                </Carousel>
        )
    }
}
export default withStyles(styles)(Test);