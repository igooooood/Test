import React from 'react';

import { node, string } from 'prop-types';
import cn from 'classnames';

import './Wrapper.scss';

const Wrapper = ({ children, className }) =>
  <div className={cn('wrapper', className)}>
    {children}
  </div>

export default Wrapper;

Wrapper.propTypes = {
  children: node,
  className: string,
};
