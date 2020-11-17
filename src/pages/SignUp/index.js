import React from 'react';

import { Input, Button } from 'semantic-ui-react';

import NavBar from '../../components/NavBar';
import { Container, InfoCard, BoxForm } from './style';

function SignUp() {
  return (
    <>
    <NavBar />
    <Container>
      <InfoCard>
        <h2>Passowrd Manager</h2>
        <p>bla bla bla</p>
      </InfoCard>

      <BoxForm>
        <Input 
            name="email"
            type="email"
            placeholder="email"
            className="input-email"
        />

        <Button 
          type="button"
          content="Cadastrar"
          className="signup-button"
        />
      </BoxForm>
    </Container>
    </>
  );
}

export default SignUp;