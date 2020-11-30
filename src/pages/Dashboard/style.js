import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 100px 200px;

  .add-password {
    margin-bottom: 20px;
    div {
      float: right;
      margin-right: 144px;

      .add-password-button {
        background: #d22d27;
        color: #edf5e1;
      }
    }
  }
`;

export const PasswordCards = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
`;
