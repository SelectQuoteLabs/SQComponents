# Weekly Schedule

A tool for scheduling events on a weekly basis.

## Design Notes

--

## Technical Notes

### Schedule Format

`WeeklySchedule` uses the following format for defining schedules:

```js
[
  [startDate, endDate],
  [startDate, endDate],
  // ...
];
```

`startDate` and `endDate` are both JavaScript `Date` objects.

The date portion of the `startDate`s and `endDate`s, while being required in JavaScript `Date`s, are provided, but not used directly. Rather, the date should be used to determine the Day of the Week that the time entry is scheduled to run on.

You can use a date/time library such as `moment` or `date-fns`, or you can use vanilla JavaScript via `Date.proptotype.getDay()`.

### Props

The following props are defined on WeeklySchedule:

```js
WeeklySchedule.propTypes = {
  TooltipContents: PropTypes.node.isRequired,
  isReadOnly: PropTypes.bool,
  schedule: schedulePropType,
  onChange: PropTypes.func.isRequired,
  style: PropTypes.object,
};
```

#### Required Props

##### onChange

Whenever a schedule entry is added, deleted, or updated the `onChange` handler will be called with the current [schedule](#schedule-format) being provided as the first parameter.

For example:

```js
const DAYS_OF_WEEK = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Thursday',
  'Friday',
  'Saturday',
];

function formatTime(date) {
  return [date.getHours(), date.getMinutes(), date.getSeconds()].join(':');
}

function handleChange(schedule) {
  schedule
    .map(([start, end]) => ({
      day: DAYS_OF_WEEK[start.getDay()],
      start: formatTime(start),
      end: formatTime(end),
    }))
    .map(({day, start, end}) => `${day}: ${start} - ${end}`)
    .forEach(entry => console.log);
}

// ...

<WeeklySchedule
  /* other props */
  onChange={handleChange}
/>;
```

##### TooltipContents

When the user hovers their mouse over a schedule entry, they will be presented with a tooltip to manipulate that entry. The component that is provided to `TooltipContents` will be displayed inside of that tooltip.

The `TooltipContents` will receive the props of the schedule entry as `scheduleEntryProps`.

For example:

```js
function ScheduleEntryTooltip({scheduleEntryProps}) {
    const {handleDelete} = scheduleEntryProps;

    return <button onClick={handleDelete}>Delete Entry</button>;
})

// ...

<WeeklySchedule
   /* other props */
   TooltipContents={ScheduleEntryTooltip}
/>
```

#### Optional Props

##### schedule

Sets and/or updates the `schedule` of the `WeeklySchedule`. The data provided to the `schedule` prop must adhere to the [Schedule Format](#schedule-format).

##### isReadOnly

Sets the `WeeklySchedule` to Read Only. The tooltip will not be displayed to the user and entries cannot be added or manipulated.

##### style

Any custom css styles to apply to the component.
