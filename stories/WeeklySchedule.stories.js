import React from 'react';
import {withKnobs, boolean} from '@storybook/addon-knobs';
import {action} from '@storybook/addon-actions';
import {withInfo} from '@storybook/addon-info';
// import markdown from '../notes/WeeklySchedule.md';

import WeeklySchedule from '../src/components/WeeklySchedule';

export default {
  title: 'WeeklySchedule',
  decorators: [withInfo, withKnobs],
  parameters: {
    // notes: {markdown},
  },
};

export const WeeklyScheduleStory = () => {
  const renderDeleteButton = React.useCallback(({scheduleEventProps}) => {
    const {handleDelete} = scheduleEventProps;

    return (
      <div>
        <button onClick={handleDelete}>Delete Me</button>
      </div>
    );
  }, []);

  return (
    <WeeklySchedule
      isReadOnly={boolean('isDisabled', false)}
      onChange={action('Schedule Updated')}
      TooltipContent={renderDeleteButton}
    />
  );
};
