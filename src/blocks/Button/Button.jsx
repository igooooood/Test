import React from 'react';
import { node, string} from 'prop-types';
import cn from 'classnames';

import './Button.css';

const Button = ({children, className}) => 
  <button className={cn('button', className)}>
    <span>{children}</span>
  </button>

export default Button;

Button.propTypes = {
  children: node,
  className: string
};
