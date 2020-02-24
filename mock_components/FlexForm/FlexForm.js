import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './FlexForm.css';

function _isDomElement(element) {
  return element && typeof element.type === 'string';
}

function _isMuiSvgIcon(element) {
  return element && element.type.muiName === 'SvgIcon';
}

function isReactComponent(element) {
  if (_isDomElement(element) || _isMuiSvgIcon(element)) return false;
  return true;
}

class FlexForm extends React.Component {
  render() {
    const {
      isTight,
      isFull,
      isWide,
      isStaticWidth,
      children,
      additionFlexFormItemClassName,
      ...propsToClone
    } = this.props;

    return (
      <div className="flexForm">
        {React.Children.map(children, child => {
          if (!child) return null;

          const {
            additionFlexFormItemClassName: childAdditionFlexFormItemClassName,
            isEmpty: isChildEmpty,
            isFull: isChildFull,
            isTall: isChildTall,
            isTight: isChildTight,
            isWide: isChildWide,
            isStaticWidth: isChildStaticWidth,
            ...childProps
          } = child.props;

          const classes = classnames({
            flexForm__item: !isChildEmpty,
            'flexForm__item--full': isFull || isChildFull,
            'flexForm__item--wide': isWide || isChildWide,
            'flexForm__item--tight': isTight || isChildTight,
            'flexForm__item--static-width': isStaticWidth || isChildStaticWidth,
            [childAdditionFlexFormItemClassName]: !!childAdditionFlexFormItemClassName,
            'flexForm__item--tall': isChildTall,
          });

          return (
            <div className={classes}>
              {!isReactComponent(child)
                ? child
                : React.cloneElement(child, {
                    ...propsToClone,
                    ...childProps,
                  })}
            </div>
          );
        })}
      </div>
    );
  }
}

FlexForm.propTypes = {
  disabled: PropTypes.bool,
  isTight: PropTypes.bool,
  isWide: PropTypes.bool,
  isFull: PropTypes.bool,
  isStaticWidth: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
    PropTypes.node,
  ]).isRequired,
};

FlexForm.defaultProps = {
  disabled: false,
  isTight: false,
  isWide: false,
  isFull: false,
  isStaticWidth: false,
};

export default FlexForm;
