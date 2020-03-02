import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {
  TimeGridScheduler,
  classes,
  DefaultEventRootComponent,
} from '@remotelock/react-week-scheduler';
import Tippy from '@tippy.js/react';
import classnames from 'classnames';

import 'tippy.js/dist/tippy.css';
import 'tippy.js/themes/material.css';
import '@remotelock/react-week-scheduler/index.css';
import './WeeklySchedule.css';

/* The actual date doesn't really matter.
 * we're just using it to start the calendar on a Sunday
 * and to and to deserialize previous entries relative
 * to this date in order to render them properly.
 */
const START_DAY = new Date('2019-03-04');

const FRAME_LENGTH = 1000 / 60;
const toNearestFrame = ms =>
  Math.round(ms + FRAME_LENGTH - (ms % FRAME_LENGTH));

/* IF YOU OVERRIDE THIS, YOU MUST OVERRIDE .day-hours { font-size } in ./schedule-overrides.css !!! */
const ROW_HEIGHT = '40px';

const SCHEDULER_STYLE = {
  width: '100%',
  height: '100%',
  minWidth: '1200px',
  minHeight: '500px',
  '--cell-height': ROW_HEIGHT,
  '--color-event-background': 'var(--color-green)',
  '--color-event-hover-background': 'var(--color-green-hover)',
  '--color-handle-wrapper-text': 'var(--color-white)',
};

// const CENTER_STYLING = {
//   display: 'flex',
//   justifyContent: 'center',
//   alignItems: 'center',
// };

const BuildHoverTooltip = TooltipBody =>
  React.forwardRef(function(props, ref) {
    const {handleDelete, disabled} = props;
    return (
      <Tippy
        interactive
        interactiveBorder={10}
        hideOnClick={false}
        theme="material"
        distance={8}
        enabled={!disabled}
        duration={[toNearestFrame(150), toNearestFrame(25)]}
        delay={[toNearestFrame(83), 0]}
        content={<TooltipBody handleDelete={handleDelete} />}
        style={{backgroundColor: 'red'}}
      >
        <DefaultEventRootComponent
          {...props}
          ref={ref}
          style={{...props.style, fontSize: ROW_HEIGHT}}
        />
      </Tippy>
    );
  });

function WeeklySchedule({
  TooltipGuy,
  style,
  schedule: providedSchedule = [],
  isReadOnly,
  onChange,
}) {
  const [schedule, setSchedule] = useState(providedSchedule);

  const updateSchedule = React.useCallback(
    entries => {
      setSchedule(entries);
      onChange(entries);
    },
    [onChange]
  );

  const overriddenClasses = {
    ...classes,
    'day-hours': classnames(classes['day-hours'], 'weekly-schedule__day-hours'),
    'event-content': classnames(
      classes['event-content'],
      'weekly-schedule__event-content'
    ),
    top: 'weekly-schedule__resize-handle-top',
    bottom: 'weekly-schedule__resize-handle-bottom',
  };

  const HoverTooltip = React.useMemo(() => BuildHoverTooltip(TooltipGuy), [
    TooltipGuy,
  ]);

  return (
    <TimeGridScheduler
      disabled={isReadOnly}
      classes={overriddenClasses}
      style={{...SCHEDULER_STYLE, ...style}}
      originDate={START_DAY} // This is just a random sunday, the date itself doesn't matter.
      schedule={schedule}
      onChange={updateSchedule}
      defaultHours={[8, 17]}
      visualGridVerticalPrecision={60}
      verticalPrecision={15}
      cellClickPrecision={60}
      eventRootComponent={HoverTooltip}
    />
  );
}

WeeklySchedule.propTypes = {
  /** Tooltip element */
  TooltipGuy: PropTypes.node.isRequired,
  isReadOnly: PropTypes.bool,
  schedule: schedulePropType,
  onChange: PropTypes.func.isRequired,
  style: PropTypes.object,
};

export default WeeklySchedule;

function schedulePropType(props, propName, componentName) {
  const schedule = props[propName];

  const isValid =
    schedule === undefined ||
    (Array.isArray(schedule) &&
      schedule.every(
        entry =>
          Array.isArray(entry) &&
          entry.length === 2 &&
          entry.every(datetime => datetime instanceof Date)
      ));

  if (!isValid) {
    return new Error(
      'Invalid Prop `' +
        propName +
        '` supplied to  `' +
        componentName +
        '`. Each schedule entry must be an array with two elements of type: `Date`:\n' +
        `
      [
        // [startDateTime, endDateTime]
        [new Date(), new Date()],
        [new Date(), new Date()],
        // ...
      ]
      `
    );
  }
}
