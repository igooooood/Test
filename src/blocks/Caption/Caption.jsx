import React from 'react';

import { string, node } from 'prop-types'
import cn from 'classnames';

import './Caption.css'

const Caption = ({className, children}) =>
  <div className={cn('caption', className)}>
    <p className='caption__text'>{children}</p>
  </div>

export default Caption;

Caption.propTypes = {
  className: string,
  children: node,
};
