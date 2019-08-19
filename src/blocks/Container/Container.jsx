import React from 'react';
import { node } from 'prop-types';

import './Container.scss'

const Container = ({children}) => <div className='container'>{children}</div>

export default Container;

Container.propTypes = {
  children: node
};
