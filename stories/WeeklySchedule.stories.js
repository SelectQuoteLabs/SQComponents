import React from 'react';
import {withKnobs, boolean, button} from '@storybook/addon-knobs';
import {action} from '@storybook/addon-actions';
import {withInfo} from '@storybook/addon-info';
import markdown from '../notes/WeeklySchedule.md';
import moment from 'moment';

import {WeeklySchedule} from '../src';

export default {
  title: 'WeeklySchedule',
  decorators: [withInfo, withKnobs],
  parameters: {
    notes: {markdown},
  },
};

const DAYS_IN_WEEK = new Array(7).fill().map((_, i) => i);
const NUM_OF_15_MINUTES_IN_DAY = new Array(24 * 4).fill().map((_, i) => i);
const START_DATE_MOMENT = moment(WeeklySchedule.START_DAY).startOf('day');
const BUILD_RANDOM_SCHEDULE = () => {
  const schedule = DAYS_IN_WEEK.map(dayOfWeek =>
    NUM_OF_15_MINUTES_IN_DAY.map(() => Math.random() > 0.5)
      .reduce((acc, includeTime, index) => {
        if (includeTime) {
          acc.push(index);
        }

        return acc;
      }, [])
      .reduce(
        (acc, entry) => {
          const currentRange = acc[acc.length - 1];

          if (currentRange.length === 0) {
            currentRange.push(entry);
            return acc;
          }

          const lastEntryInCurrentRange = currentRange[currentRange.length - 1];
          if (entry === lastEntryInCurrentRange + 1) {
            currentRange.push(entry);
          } else {
            acc.push([entry]);
          }

          return acc;
        },
        [[]]
      )
      .filter(range => range.length > 1)
  )
    .map((rangeList, dayOfWeek) =>
      rangeList.map(block => {
        const start = moment(START_DATE_MOMENT).add({
          d: dayOfWeek,
          m: block[0] * 15,
        });

        const end = moment(START_DATE_MOMENT).add({
          d: dayOfWeek,
          m: block[block.length - 1] * 15,
        });

        return [start.toDate(), end.toDate()];
      })
    )
    .reduce((acc, rangesByDay) => [...acc, ...rangesByDay], []);

  return schedule;
};

export const WeeklyScheduleStory = () => {
  const renderDeleteButton = React.useCallback(({scheduleEntryProps}) => {
    const {handleDelete} = scheduleEntryProps;

    return (
      <div>
        <button onClick={handleDelete}>Delete Me</button>
      </div>
    );
  }, []);

  const [schedule, setSchedule] = React.useState([]);

  button('Randomize Schedule Entries', () =>
    setSchedule(BUILD_RANDOM_SCHEDULE())
  );

  return (
    <WeeklySchedule
      isReadOnly={boolean('isDisabled', false)}
      onChange={action('Schedule Updated')}
      schedule={schedule}
      TooltipContents={renderDeleteButton}
    />
  );
};
