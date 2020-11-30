import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from 'semantic-ui-react';

import NavBar from '../../components/NavBar';
import PasswordCard from '../../components/PasswordCard';

import { Container, PasswordCards } from './style';

const Dashboard = () => {

  const history = useHistory();

  return (
    <>
      <NavBar />
      <Container>
        <div className="add-password">
         <div>
          <Button 
             type="button"
             content="Adicionar senha"
             className="add-password-button"
             onClick={() => history.push('/newPassword')}
           />
         </div>
        </div>
        <PasswordCards>
          <PasswordCard />
          <PasswordCard />
          <PasswordCard />
          <PasswordCard />
          <PasswordCard />
        </PasswordCards>
      </Container>
    </>
  );
};

export default Dashboard;