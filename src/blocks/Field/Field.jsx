import React from 'react';
import {string, bool} from 'prop-types';
import cn from 'classnames';

import './Field.css'

const Field = ({className, placeholder, type, name, isError}) => 
  <input
    className={cn('field', {'field--error': isError}, className)}
    placeholder={placeholder}
    type={type}
    name={name}
  />

export default Field;

Field.propTypes = {
  className: string,
  placeholder: string,
  type: string,
  name: string,
  isError: bool
};
