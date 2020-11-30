import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from 'semantic-ui-react';

import NavBar from '../../components/NavBar';
import PasswordCard from '../../components/PasswordCard';
import api from '../../services';

import { Container, PasswordCards } from './style';

const Dashboard = () => {
  const history = useHistory();
  const [id] = useState(1);
  const [userInfo, setUserInfo] = useState([]);

  useEffect(() => {
    api.get(`passwordsByUser/${id}`).then(response => setUserInfo(response.data));
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
          {userInfo.map((info) => (
            <PasswordCard systemName={userInfo.systemName} password={userInfo.password} creationDate={userInfo.creationDate} />
          ))}
        </PasswordCards>
      </Container>
    </>
  );
};

export default Dashboard;