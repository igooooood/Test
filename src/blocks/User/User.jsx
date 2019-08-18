import React from 'react';

import { string } from 'prop-types'
import cn from 'classnames';

import './User.css'

const User = ({className, pathImg, name}) =>
  <div className={cn('user', className)}>
    <img className='user__avatar' src={pathImg} alt={name}/>
    <span className='user__name'>{name}</span>
  </div>

export default User;

User.propTypes = {
  className: string,
  pathImg: string,
  name: string
};
