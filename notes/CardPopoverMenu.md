# Card Popover Menu

-- Menu Button with popover options and a kabob icon.

## Design Notes

--

## Technical Notes

Consumers are responsible for defining the callback function that is passed as the `selectTab` prop.

Sample:

```
  selectTab = selectedValue => {
    this.setState(() => ({
      selectedTab: TAB_OPTIONS.find(tab => tab.value === selectedValue),
    }));
  };
```
