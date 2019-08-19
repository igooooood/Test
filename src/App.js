import React from 'react';

import { bool, string, func, exact } from 'prop-types';

import Container from './blocks/Container/Container';
import Logo from './blocks/Logo/Logo';
import Wrapper from './blocks/Wrapper/Wrapper';
import User from './blocks/User/User';
import Button from './blocks/Button/Button';
import Form from './blocks/Form/Form';

import './App.scss';

const App = ({
  userData,
  valueFieldMail,
  valueFieldPassword,
  isLoginSuccessful,
  isButtonDisabled,
  isErrorRequest,
  handleLogin,
  handleLogout,
  handleChangeName,
  handleChangePassword
}) => 
  <section className="app">
    <Container>
      <Logo className="app__logo" />
      <Wrapper className='app__wrapper'>
        {
          isLoginSuccessful ?
            <>
              <User className='app__user' pathImg={userData.photoUrl} name={userData.name} />
              <Button handleClick={handleLogout}>Logout</Button>
            </>
          :
            <Form
              className="app__form"
              userData={userData}
              mail={valueFieldMail}
              password={valueFieldPassword}
              isError={isErrorRequest}
              isButtonDisabled={isButtonDisabled}
              handleLogin={handleLogin}
              handleChangeMail={handleChangeName}
              handleChangePassword={handleChangePassword}
            />
        }
        
      </Wrapper>
    </Container>
  </section>

export default App;

App.propTypes = {
  valueFieldMail: string.isRequired,
  valueFieldPassword: string.isRequired,
  isErrorRequest: bool.isRequired,
  isLoginSuccessful: bool.isRequired,
  isButtonDisabled: bool,
  handleLogin: func.isRequired,
  handleLogout: func.isRequired,
  handleChangeName: func.isRequired,
  handleChangePassword: func.isRequired,
  userData: exact({
    name: string.isRequired,
    photoUrl: string.isRequired
  }),   
};
