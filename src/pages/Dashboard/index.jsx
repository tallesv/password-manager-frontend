import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from 'semantic-ui-react';

import NavBar from '../../components/NavBar';
import PasswordCard from '../../components/PasswordCard';
import api from '../../services/api.js';

import { Container, PasswordCards } from './style';

const Dashboard = () => {
  const history = useHistory();
  const [id] = useState('3540c0c1-eba4-4dd6-9e32-db8d4c6be53b');
  const [userPasswords, setUserPasswords] = useState([]);

  useEffect(() => {
    api.get(`passwords/${id}`).then(response => setUserPasswords(response.data));
  }, [id]);


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
          {userPasswords.map((password) => (
            <PasswordCard 
              systemName={password.systemName}
              systemUrl={password.systemUrl} 
              password={password.password} 
              creationDate={password.created_at} 
            />
          ))}
        </PasswordCards>
      </Container>
    </>
  );
};

export default Dashboard;