import React from 'react';
import { node, string, bool, func } from 'prop-types';
import cn from 'classnames';

import './Button.scss';

const Button = ({ children, className, disabled, handleClick }) =>
  <button disabled={disabled} className={cn('button', className)} onClick={handleClick}>
    <span>{children}</span>
  </button>

export default Button;

Button.propTypes = {
  children: node,
  className: string,
  disabled: bool,
  handleClick: func
};
