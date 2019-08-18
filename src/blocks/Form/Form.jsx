import React from 'react';

import { string, bool, func } from 'prop-types';
import cn from 'classnames';

import Field from '../Field/Field';
import Caption from '../Caption/Caption';
import Button from '../Button/Button';

import './Form.css';

const Form = ({ className, mail, password, isError, handleLogin, handleChangeMail, handleChangePassword}) =>
  <form onSubmit={handleLogin} className={cn('form', className)}>
    <fieldset>
      <legend className='form__title'>Log In</legend>
      <Field
        className='form__field'
        placeholder='E-Mail'
        isError={isError}
        value={mail}
        onChange={handleChangeMail}
      />
      <Field
        className='form__field'
        placeholder='Password'
        type='password'
        isError={isError}
        value={password}
        onChange={handleChangePassword}
      />
      {isError && <Caption className='form__caption'>E-Mail or password is incorrect</Caption>}
      <Button className='form__button'>Login</Button>
    </fieldset>
  </form>

export default Form;

Form.propTypes = {
  className: string,
  mail: string.isRequired,
  password: string.isRequired,
  isError: bool.isRequired,
  handleLogin: func.isRequired,
  handleChangeMail: func.isRequired,
  handleChangePassword: func.isRequired
};

// TODO: поправить деструктуризацию
