import React from 'react';

import {string} from 'prop-types'
import cn from 'classnames';

import logo from './icon/logo.svg';
import './Logo.scss';

const Logo = ({className}) => <img className={cn('logo', className)} src={logo} width="182" height="40" alt="Logo" />

export default Logo;

Logo.propTypes = {
  className: string,
};
