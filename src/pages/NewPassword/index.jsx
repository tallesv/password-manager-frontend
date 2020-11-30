import React from 'react';
import { useHistory } from 'react-router-dom';
import { Input, Button } from 'semantic-ui-react';

import NavBar from '../../components/NavBar';

import { Container, Form } from './style';

const NewPassword = () => {
  const history = useHistory();

  return (
    <>
      <NavBar />
      <Container>
        <Form>
          <h2>Cadastre a sua nova senha</h2>

          <div className="input">
            <label>Aplicação:</label>
            <Input 
              name="Aplicação"
              type="text"
              placeholder="Ex: Facebook"
            />
          </div>

          <div className="input">
            <label>Endereço:</label>
            <Input 
              name="Endereço"
              type="text"
              placeholder="Ex: https://pt-br.facebook.com/"
            />
          </div>

          <div className="input">
            <label>Senha:</label>
            <Input 
              name="Senha"
              type="text"
            />
          </div>

          <div className="buttons">
            <Button 
              type="button"
              content="Voltar"
              className="back-button"
              onClick={() => history.goBack()}
            />

            <Button 
              type="button"
              content="Cadastrar"
              className="add-button"
            />
          </div>
        </Form>

      </Container>
    </>
  );
};

export default NewPassword;