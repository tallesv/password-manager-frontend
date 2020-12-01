import React, { useCallback, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Moment from 'moment';

import { Card } from './style';

const PasswordCard = ({ systemName, systemUrl, password, creationDate }) => {
  const history = useHistory();
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = useCallback(() => {
    setShowPassword(!showPassword);
  }, [showPassword]);

  return (
    <Card>
      <div class="ui card">
        <div class="content">
          <a class="header" href={systemUrl} target="_blank" rel="noreferrer">{systemName}</a>
          <div class="meta">
            <span class="date">{`Criado em ${Moment(creationDate).format('DD/MM/YYYY')}`}</span>
          </div>
          {showPassword && (
            <div class="description">
              {`Senha: ${password}`}
            </div>
          )}
        </div>
        <div class="extra content">
          <button class="ui red button" onClick={handleShowPassword}>{showPassword ? 'Esconder senha' : 'Ver senha'}</button>
          <button 
            class="ui negative basic button" 
            onClick={() => history.push({ pathname: '/editPassword', state: { systemName, systemUrl, password }})}
          >
            Atualizar senha
          </button>
        </div>
      </div>
    </Card>
  );
};

export default PasswordCard;