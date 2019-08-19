import React from 'react';
import { string, bool, func } from 'prop-types';
import cn from 'classnames';

import './Field.scss'

const Field = ({ className, placeholder, required, type, name, value, onChange, isError }) =>
  <input
    className={cn('field', { 'field--error': isError }, className)}
    placeholder={placeholder}
    type={type}
    name={name}
    value={value}
    onChange={onChange}
    required={required}
  />

export default Field;

Field.propTypes = {
  className: string,
  placeholder: string,
  required: string,
  type: string,
  name: string,
  value: string,
  isError: bool,
  onChange: func,
};
