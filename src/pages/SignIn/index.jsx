import React from 'react';
import { Link } from 'react-router-dom';

import { Input, Button } from 'semantic-ui-react';

import NavBar from '../../components/NavBar';

import { Container, BoxForm, Form } from './style';

function SignIn() {

  return (
    <Container>
      <NavBar />

      <BoxForm>
      <h2>Password Manager</h2>

      <Form>
        <h3>LOGIN</h3>
        <Input 
          name="email"
          type="email"
          placeholder="email"
          className="input-email"
        />

        <Input 
          name="password"
          type="password"
          placeholder="senha"
          className="input-password"
        />

        <Button 
          type="button"
          content="Entrar"
          className="signin-button"
        />

        <div className="create-account">
          <p>Não possui cadastro ? <Link to="/signup">Criar Conta</Link></p>
        </div>
      </Form>
      </BoxForm>
    </ Container>
  );
}

export default SignIn;