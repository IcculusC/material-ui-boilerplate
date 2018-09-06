import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = {
  '@global': {
    'html,body,#root': { height: '100%' },
    html: {
      fontFamily: 'sans-serif',
      '-ms-text-size-adjust': '100%',
      '-webkit-text-size-adjust': '100%',
      '-webkit-tap-highlight-color': 'rgba(0,0,0,0)',
    },
    body: {
      margin: 0,
    },
    'button::-moz-focus-inner,input::-moz-focus-inner': {
      border: 0,
      padding: 0,
    },
    'input::-webkit-inner-spin-button,input::-webkit-outer-spin-button,input::-webkit-search-cancel-button,input::-webkit-search-decoration,input::-webkit-search-results-button,input::-webkit-search-results-decoration': {
      display: 'none',
    },
  },
};

export const DemoCssBaseline = () => null;
export default withStyles(styles)(DemoCssBaseline);
