// @flow
import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Link from 'react-router-dom/Link';

const styles = {
  center: {
    fontFamily: 'HelveticaNeue-Light, Arial',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  fullHeightDiv: {
    height: '100%',
    backgroundColor: '#FFFFFF',
  },
  fusionStyle: {
    fontSize: '80px',
    color: 'rgba(0,0,0,.8)',
    paddingRight: '30px',
    display: 'flex',
  },
  circle: {
    height: '180px',
    width: '180px',
    marginTop: '20px',
    backgroundColor: 'white',
    '&:hover': {backgroundColor: '#f0f8fa'},
    border: '10px solid #4db5d9',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  gettingStartedLink: {
    textDecoration: 'none',
    color: '#4db5d9',
    fontSize: '18px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    height: '100%',
  }
};

const Home = ({classes}) => (
  <div className={classes.fullHeightDiv} >
    <div className={classes.center} >
      <div className={classes.fusionStyle}>Fusion.js</div>

      <div className={classes.center} >
        <div className={classes.circle} >
          <Link
            className={classes.gettingStartedLink}
            to="/"
          >
            Let&apos;s Get Started
          </Link>
        </div>
      </div>
    </div>
  </div>
);

export default withStyles(styles)(Home);
