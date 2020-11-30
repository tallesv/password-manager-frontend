import styled from 'styled-components';

export const Container = styled.div`
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  margin: 50px 300px;

  h2 {
    text-align: center;
    color: #d22d27;
  }

  .input {
    width: 400px;
    padding: 8px 0;
    align-self: center;
  }

  .buttons {
    display: flex;
    flex-direction: row;
    align-self: center;

    .add-button {
      background: #d22d27;
      color: #edf5e1;
    }
  }

`;