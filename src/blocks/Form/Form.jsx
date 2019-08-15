import React from 'react';
import { string } from 'prop-types';
import Field from '../Field/Field';
import Button from '../Button/Button';
import cn from 'classnames';

import './Form.css';

const Form = ({className}) => 
  <form className={cn('form', className)}>
    <fieldset>
      <legend className='form__title'>Log In</legend>
      <Field className='form__field' placeholder="E-Mail" />
      <Field className='form__field' placeholder="Password" />
      <Button className='form__button'>Login</Button>
    </fieldset>
  </form>

export default Form;

Form.propTypes = {
  className: string,
};
