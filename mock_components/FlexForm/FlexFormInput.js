import React from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';

import './FlexFormInput.css';

class FlexFormInput extends React.Component {
  render() {
    const {label, inputStyle} = this.props;

    return (
      <TextField
        underlineDisabledStyle={{display: 'none'}}
        floatingLabelText={label}
        floatingLabelFixed={true}
        floatingLabelStyle={{
          color: 'var(--color-label)',
          fontSize: 'var(--size-label-with-offset)',
        }}
        value=""
        hintText="- -"
        rowsMax={2}
        inputStyle={{
          fontSize: 'var(--size-input)',
          color: 'var(--color-input)',
          ...inputStyle,
        }}
        onKeyDown={this.onKeyDownBlurOnEnter}
      />
    );
  }
}

FlexFormInput.propTypes = {
  inputStyle: PropTypes.object,
  label: PropTypes.string.isRequired,
};

export default FlexFormInput;
