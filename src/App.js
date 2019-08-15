import React from 'react';
import Container from './blocks/Container/Container';
import Logo from './blocks/Logo/Logo';
import Form from './blocks/Form/Form';

import './App.css';

const App = () => 
  <section className="App">
    <Container>
      <Logo className="App__logo" />
      <Form className="App__form" />
    </Container>
  </section>

export default App;
