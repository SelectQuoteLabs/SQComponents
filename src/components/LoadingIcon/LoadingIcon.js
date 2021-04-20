import React from 'react';
import {makeStyles} from '@material-ui/core';

const useStyles = makeStyles(() => {
  return {
    loadingIcon: {
      opacity: '0.65',
    },
    brown: {
      animation: `$bumpit 2s linear 0s infinite`,
    },
    orange: {
      animation: `$bumpit 2s linear 0.66s infinite`,
    },
    yellow: {
      animation: `$bumpit 2s linear 1.33s infinite`,
    },
    '@keyframes bumpit': {
      '0%': {
        transform: 'scale(1)',
      },
      '10%': {
        transform: 'scale(1)',
      },
      '60%': {
        transform: 'scale(0.9) translate(20px, 20px)',
      },
      '100%': {
        transform: 'scale(1)',
      },
    },
  };
});

function LoadingIcon(props) {
  const classes = useStyles();
  return (
    <svg height={props.height || '10rem'} viewBox="0 0 446 439">
      <g
        className={classes.loadingIcon}
        stroke="none"
        strokeWidth="1"
        fill="none"
      >
        <circle
          className={classes.orange}
          stroke="#EC9252"
          strokeWidth="35"
          cx="250.5"
          cy="231.5"
          r="177.5"
        />
        <circle
          className={classes.yellow}
          stroke="#FFE18B"
          strokeWidth="35"
          cx="195.5"
          cy="243.5"
          r="177.5"
        />
        <circle
          className={classes.brown}
          stroke="#665736"
          strokeWidth="35"
          cx="210.5"
          cy="195.5"
          r="177.5"
        />
        <circle
          className={classes.yellow}
          stroke="#FFE18B"
          strokeWidth="35"
          opacity="0.72"
          cx="195.5"
          cy="243.5"
          r="177.5"
        />
        <circle
          className={classes.orange}
          stroke="#EC9252"
          strokeWidth="35"
          opacity="0.63"
          cx="250.5"
          cy="231.5"
          r="177.5"
        />
      </g>
    </svg>
  );
}

export default LoadingIcon;
