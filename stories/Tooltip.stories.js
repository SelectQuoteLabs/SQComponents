import React from 'react';
import {withInfo} from '@storybook/addon-info';

import Tooltip from '@material-ui/core/Tooltip';

export default {
  title: 'Tooltip',
  decorators: [withInfo],
};

export const tooltip = () => {
  return (
    <Tooltip arrow title="Tooltip title prop can be a string">
      <h2>TEXT</h2>
    </Tooltip>
  );
};

export const tooltipWithMoarContent = () => {
  return (
    <Tooltip
      arrow
      title={
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. In egestas
          erat imperdiet sed euismod. Adipiscing at in tellus integer.
        </p>
      }
    >
      <h2>TEXT</h2>
    </Tooltip>
  );
};

export const tooltipWithButtonChild = () => {
  return (
    <Tooltip
      arrow
      interactive={true}
      title={<button onClick={() => {}}>BUTTON</button>}
    >
      <h2>Tooltip with a button in it!</h2>
    </Tooltip>
  );
};

export const tooltipWithCustomArrowPlacement = () => {
  return (
    <Tooltip
      arrow
      placement="top"
      title="Control orientation with placement prop"
    >
      <h2>TEXT</h2>
    </Tooltip>
  );
};
