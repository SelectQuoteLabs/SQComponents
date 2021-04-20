# Date Picker

-- A standardized date picker.

## Design Notes

-- Design approved by UX for all applications.

## Technical Notes

Install React Datepicker

```bash
npm i react-datepicker
```

Import the css file from react-datepicker

```javascript
import 'react-datepicker/dist/react-datepicker.css';
```

Consumers are responsible for defining the callback function that is passed as the `updateDate` prop.

Sample:

```
  updateDate = (field, value) => {
    // If field is the end date it should be at the end of that day so events on that day show up
    const adjustedValue =
      (field === 'end' || field === 'start') && value !== ''
        ? value.toISOString()
        : value;

    this.setState(prevState => ({
      dateRange: {...prevState.dateRange, ...{[field]: adjustedValue}},
    }));
  };
```

Consumers also have to pass the `dateRange` prop and `entity` prop. The objects should follow this structure:

```
    dateRange: {
      start: '',
      end: '',
    },
    entity: {
      start: moment().add(5, 'minutes'),
      end: moment().add(10, 'minutes'),
      subject: '[Customer Info]',
      description: '',
    }
```
