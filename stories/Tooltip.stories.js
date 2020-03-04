import React from 'react';
import markdown from '../notes/Tooltip.md';

import Tooltip from '../src/components/Tooltip';

export default {
  title: 'Tooltip',
  parameters: {
    notes: {markdown},
  },
};

export const tooltip = () => {
  return (
    <Tooltip title="Tooltip title prop can be a string">
      <h2>TEXT</h2>
    </Tooltip>
  );
};

export const tooltipWithMoarContent = () => {
  return (
    <Tooltip
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
    <Tooltip title={<button onClick={() => {}}>BUTTON</button>}>
      <h2>Tooltip with a button in it!</h2>
    </Tooltip>
  );
};

export const tooltipWithCustomArrowPlacement = () => {
  return (
    <Tooltip placement="top" title="Control orientation with placement prop">
      <h2>TEXT</h2>
    </Tooltip>
  );
};
