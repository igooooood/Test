import React from 'react';

import {string} from 'prop-types'

import logo from '../../images/logo.svg';

const Logo = ({className}) => <img className={className} src={logo} width="182" height="40" alt="Logo" />

export default Logo;

Logo.propTypes = {
  className: string,
};
