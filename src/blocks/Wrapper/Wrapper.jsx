import React from 'react';

import { node, string } from 'prop-types';
import cn from 'classnames';

import './Wrapper.css';

const Wrapper = ({ children, className }) => 
  <div className={cn('wrapper', className)}>
    <span>{children}</span>
  </div>

export default Wrapper;

Wrapper.propTypes = {
  children: node,
  className: string,
};
