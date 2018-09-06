// @flow
import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Link from 'react-router-dom/Link';

const styles = theme => ({
  center: {
    fontFamily: 'HelveticaNeue-Light, Arial',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  circle: {
    height: '180px',
    width: '180px',
    marginTop: '20px',
    backgroundColor: 'white',
    '&:hover': {backgroundColor: theme.palette.primary.light}, // {backgroundColor: '#f0f8fa'},
    border: `10px solid ${theme.palette.primary.dark}`, // '10px solid #4db5d9',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  fullHeight: {
    height: '100%',
    backgroundColor: '#FFFFFF',    
  },
  gettingStarted: {
    textDecoration: 'none',
    color: theme.palette.primary.dark,
    fontSize: '18px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    height: '100%',
  },
  splashText: {
    fontSize: '80px',
    color: 'rgba(0,0,0,.8)',
    paddingRight: '30px',
    display: 'flex',
  },
});

export const Home = ({classes}) => (
  <div className={classes.fullHeight} >
    <div className={classes.center} >
      <span className={classes.splashText}>Fusion.js</span>
      <div className={classes.center} >
        <div className={classes.circle} >
          <Link
            className={classes.gettingStarted}
            to='/'
          >
            Let&apos;s Get Started
          </Link>
        </div>
      </div>
    </div>
  </div>
);

export default withStyles(styles)(Home);
