import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { Form, Input, Button } from 'semantic-ui-react';

import api from '../../services/api.js';

import NavBar from '../../components/NavBar';

import { Container, FormContainer } from './style';

const EditPassword = () => {
  const history = useHistory();
  const location = useLocation();

  const schema = Yup.object().shape({
    aplicaçao: Yup.string().required('Nome da aplicação obrigatória'),
    endereço: Yup.string(),
    senha: Yup.string().required('Senha obrigatória'),
  });

  const formik = useFormik({
    initialValues: {
      aplicaçao: '',
      endereço: '',
      senha: '',
    },
    validationSchema: schema,
    validateOnChange: false,
    onSubmit: async formData => {
      try {
        const data = {
          idUser: '3540c0c1-eba4-4dd6-9e32-db8d4c6be53b',
          systemName: formData.aplicaçao,
          systemUrl: formData.endereço,
          expirationDate: null,
          receiveNotification: true,
          password: formData.senha,
        }

        await api.post('/passwords', data);
        console.log(data);
      } catch (err) {
        console.log(err);
      }
    }
  })

  return (
    <>
      <NavBar />
      <Container>
        <FormContainer>
          <Form onSubmit={formik.handleSubmit}> 
            <h2>Edite sua senha</h2>
            {location}
            <div className="input">
              <label>Aplicação:</label>
              <Input 
                name="aplicaçao"
                type="text"
                placeholder="Ex: Facebook"
                onChange={formik.handleChange}
                value={formik.values.aplicaçao}
              />
            </div>

            <div className="input">
              <label>Endereço:</label>
              <Input 
                name="endereço"
                type="text"
                placeholder="Ex: https://pt-br.facebook.com/"
                onChange={formik.handleChange}
                value={formik.values.endereço}
              />
            </div>

            <div className="input">
              <label>Senha:</label>
              <Input 
                name="senha"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.senha}
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
                type="submit"
                content="Editar"
                className="add-button"
              />
            </div>
          </Form>
        </FormContainer>

      </Container>
    </>
  );
};

export default EditPassword;