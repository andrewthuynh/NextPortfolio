import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import withWidth from '@material-ui/core/withWidth';

const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        width: '95%',
        height: '95%',
    },
    image: {
        maxWidth: '100%',
        height: 'auto',
    }
});

class photoGrid extends Component {

    render() {
        const classes = this.props;
        const tileData = [
            {
                img: '../static/ride.jpg',
                title: 'about',
                cols: 1,
            },
            {
                img: '../static/beach.jpg',
                title: 'about2',
                cols: 1,
            },
            {
                img: '../static/airport.jpg',
                title: 'about3',
                cols: 1,
            },
            {
                img: '../static/firework.jpg',
                title: 'about',
                cols: 1,
            },
        ];
        return (
            <div className={classes.root}>
                <GridList cellHeight={this.props.width=='xs' ? 200 : 400} className={classes.gridList} cols={this.props.width=='xs' ? 1 : 2}>
                    {tileData.map(tile => (
                        <GridListTile key={tile.img} cols={tile.cols}>
                            <img src={tile.img} alt={tile.title} className={classes.image} />
                        </GridListTile>
                    ))}
                </GridList>
            </div>
        );
    }
}
let PhotoGrid = withStyles(styles)(photoGrid);
export default withWidth()(PhotoGrid);