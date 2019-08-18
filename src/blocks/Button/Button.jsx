import React from 'react';
import { node, string, func } from 'prop-types';
import cn from 'classnames';

import './Button.css';

const Button = ({children, className, handleClick}) => 
  <button className={cn('button', className)} onClick={handleClick}>
    <span>{children}</span>
  </button>

export default Button;

Button.propTypes = {
  children: node,
  className: string,
  handleClick: func
};
