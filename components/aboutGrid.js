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
        height: 'auto'
    }
});

class aboutGrid extends Component {

    render() {
        const classes = this.props;
        const tileData = [
            {
                img: '../static/about.png',
                title: 'about',
                cols: 1,
            },
            {
                img: '../static/about2.jpg',
                title: 'about2',
                cols: 1,
            },
            {
                img: '../static/about3.jpg',
                title: 'about3',
                cols: this.props.width=='xs' ? 1 : 2,
            },
        ];
        return (
            <div className={classes.root}>
                <GridList cellHeight={this.props.width=='xs' ? 400 : 670} className={classes.gridList} cols={this.props.width=='xs' ? 1 : 4}>
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
let AboutGrid = withStyles(styles)(aboutGrid);
export default withWidth()(AboutGrid);