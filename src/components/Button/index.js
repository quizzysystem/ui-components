import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Icon from '../Icon';

const Button = ({
  type, mode, format, disabled, size, widthAuto, fullWidth, transparent, children,
  className, icon, iconSize, alignLeft, reverse, label, ...customProps
}) => {
  const classes = classNames('button', {
    [`button--${mode}`]: mode,
    [`button--${format}`]: format,
    'is-disabled': disabled,
    [`button--${size}`]: size,
    'button--width-auto': widthAuto,
    'button--full-width': fullWidth,
    'button--transparent': transparent,
    'button--align-left': alignLeft,
    [className]: className,
  });

  return (
    <button
      type={type}
      className={classes}
      disabled={disabled}
      aria-label={label}
      {...customProps}
    >
      <span className={classNames('button__body', { 'button__body--reverse': reverse })}>
        {icon && (
          <span className={classNames('button__icon', {
            [`button__icon--${iconSize}`]: iconSize,
          })}
          >
            <Icon id={icon.id} />
          </span>
        )}
        {children && <span className="button__text">{children}</span>}
      </span>
    </button>
  );
};

Button.propTypes = {
  /**
  * Type attribute of button. Can be **button**, **submit**, **reset**
  */
  type: PropTypes.string,
  /**
  * Describes mode of the button. Can be **primary**, **secondary**, **green**, **yellow**,
  * **red**, **black** and **white**.
  */
  mode: PropTypes.string,
  /**
  * Describes format of the button. Can be **square**, **circle**. Default **''**
  */
  format: PropTypes.string,
  /**
  * Disables for the button.
  */
  disabled: PropTypes.bool,
  /**
  * Size of the button. By default - **''**. Can be **sm**, **md**
  */
  size: PropTypes.string,
  /**
  * Sets button's width to auto.
  */
  widthAuto: PropTypes.bool,
  /**
  * Sets button's width to 100%.
  */
  fullWidth: PropTypes.bool,
  /**
   * Set transparent background with border
   */
  transparent: PropTypes.bool,
  /**
   * Button content
   */
  children: PropTypes.node,
  /**
   * Adds custom classes to button
   */
  className: PropTypes.string,
  /**
   * Adds icon to the button(on left side)
   */
  icon: PropTypes.node,
  /**
   * Size for of the button icon.  By default - **''**. Can be **xs**, **sm**, **md**, **lg**
   */
  iconSize: PropTypes.string,
  /**
   * Aligns button contents to the left size
   */
  alignLeft: PropTypes.bool,
  /**
   * Change icon and text places
   */
  reverse: PropTypes.bool,
  /**
   * Description of the button
   */
  label: PropTypes.string.isRequired,
};

Button.defaultProps = {
  type: 'button',
  mode: 'primary',
  format: '',
  disabled: false,
  size: '',
  widthAuto: false,
  fullWidth: false,
  transparent: false,
  children: null,
  className: '',
  icon: null,
  iconSize: '',
  alignLeft: false,
  reverse: false,
};

export default Button;
