# IconButtonMenu

For your button that needs to be an icon that shows a menu.

## Design Notes

- This component is designed to show lists of clickable text items, often to navigate the user to a specific dialog, view, application, etc.

## Technical Notes

- There are two types of `IconComponent` you should be using for the button:

  1. An SSC `Avatar` component that wraps a letter or an MUI Icon. For example:

     import {Avatar} from 'scplus-shared-components'

     const LetterAvatar = () => (
     <Avatar isInverted isDisabled={isDisabled}>
     L
     </Avatar>
     )

     const IconAvatar = () => (
     <Avatar isDisabled={isDisabled}>
     <SomeIcon />
     </Avatar>
     )

     ...

     <IconButtonMenu
     IconComponent={LetterAvatar}
     ...
     />

  2. v4 MUI Icon component, imported from '@material-ui/icons'

- `menuItems` each object in array must have this shape:
  {
  id: String,
  isDisabled: Boolean,
  label: String,
  onClick: Function
  }

- Possible `placement` props:
  - "top", "topLeft", "topRight"
  - "right",
  - "left",
  - "bottom", "bottom-left", "bottom-right"
