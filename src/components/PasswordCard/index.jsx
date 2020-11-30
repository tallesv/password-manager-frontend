import React, { useCallback, useState } from 'react';

import { Card } from './style';

const PasswordCard = ({ systemName, password, creationDate }) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = useCallback(() => {
    setShowPassword(!showPassword);
    console.log(showPassword);
  }, [showPassword]);

  return (
    <Card>
      <div class="ui card">
        <div class="content">
          <a class="header">{systemName}</a>
          <div class="meta">
            <span class="date">{`Criado em ${creationDate}`}</span>
          </div>
          {showPassword && (
            <div class="description">
              {`Senha: ${password}`}
            </div>
          )}
        </div>
        <div class="extra content">
          <button class="ui red button" onClick={handleShowPassword}>{showPassword ? 'Esconder senha' : 'Ver senha'}</button>
          <button class="ui negative basic button">Atualizar senha</button>
        </div>
      </div>
    </Card>
  );
};

export default PasswordCard;