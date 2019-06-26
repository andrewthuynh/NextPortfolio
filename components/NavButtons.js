import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import Link from 'next/link';

const images = [
  {
    url: '../static/Arch.png',
    urlAnim: '',
    title: 'Home',
    width: '25%',
    link: '/'
  },
  {
    url: '../static/profile3.jpg',
    urlAnim: '',
    title: 'About',
    width: '25%',
    link: '/about'
  },
  {
    url: '../static/code.jpg',
    urlAnim: '',
    title: 'Work',
    width: '25%',
    link: '/work'
  },
  {
    url: '../static/piano2.jpg',
    urlAnim: '',
    title: 'Piano',
    width: '25%',
    link: '/piano'
  },
];

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    minWidth: 300,
    width: '100%',
    paddingTop: 50,
  },
  image: {
    
    position: 'relative',
    height: 300,
    [theme.breakpoints.down('xs')]: {
      width: '100% !important', // Overrides inline-style
      height: 100,
    },
    '&:hover, &$focusVisible': {
      zIndex: 1,
      '& $imageBackdrop': {
        opacity: 0.15,
      },
      '& $imageMarked': {
        opacity: 0,
      },
      /*'& $imageAnim': {
        opacity: 1,
      },*/
      '& $imageTitle': {
        border: '4px solid currentColor',
      },
    },
  },
  focusVisible: {},
  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  },
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  },
  imageAnim: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
    opacity: 0,
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity'),
  },
  imageTitle: {
    position: 'relative',
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
  },
  imageMarked: {
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
}));

export default function NavButtons() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {images.map(image => (
        <Link href={image.link} key={image.title}>
        <ButtonBase
          focusRipple
          className={classes.image}
          focusVisibleClassName={classes.focusVisible}
          style={{
            width: image.width,
          }}
        >
          <span
            className={classes.imageSrc}
            style={{
              backgroundImage: `url(${image.url})`,
              
            }}
          >
           <span
            className={classes.imageAnim}
            style={{
              backgroundImage: `url(${image.urlAnim})`,
              
            }}
          />
          </span>
          <span className={classes.imageBackdrop} />
          <span className={classes.imageButton}>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              className={classes.imageTitle}
            >
              {image.title}
              <span className={classes.imageMarked} />
            </Typography>
          </span>
        </ButtonBase>
        </Link>
      ))}
    </div>
  );
}