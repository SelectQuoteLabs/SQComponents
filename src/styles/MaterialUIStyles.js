import cssVars from './cssVars';

const {cerulean, white, spanishOrange, teal} = cssVars.colors;

export const flexStyles = {
  display: 'flex',
  flexDirection: 'column',
  flex: '1 1 auto',
};

export const contentCenter = {
  justifyContent: 'center',
  alignItems: 'center',
};

export const autoWidth = {
  width: 'auto',
};

export const dropdownStyle = {
  width: 'inherit',
  marginRight: '2rem',
  fontSize: 'var(--size-input)',
};

export const autoCompleteStyle = {
  width: 'inherit',
  paddingRight: '2rem',
};

export const floatingLabelStyle = {
  color: 'var(--color-label)',
  fontSize: 'var(--size-label)',
};

export const yScroll = {
  overflowY: 'scroll',
  overflowX: 'hidden',
};

export const activeTextColor = {
  color: cerulean,
};

export const disabledTextColor = {
  color: white,
};

export const requiredTextColor = {
  color: spanishOrange,
};

export const displayBlock = {
  display: 'block',
};

export const capitalizeText = {
  textTransform: 'capitalize',
};

export const actionableTextStyle = {
  color: teal,
  cursor: 'copy',
};

export const dialogContentStyle = {
  width: '90%',
  maxWidth: '130rem',
};

export const dialogBodyStyle = {
  border: 'none',
  padding: '0 1.6rem',
};

export default {
  flexStyles,
  contentCenter,
  autoWidth,
  dropdownStyle,
  autoCompleteStyle,
  activeTextColor,
  disabledTextColor,
  floatingLabelStyle,
  yScroll,
  requiredTextColor,
  capitalizeText,
  actionableTextStyle,
  dialogContentStyle,
  dialogBodyStyle,
  displayBlock,
};
