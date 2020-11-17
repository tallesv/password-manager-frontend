import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const BoxForm = styled.div`
  display: block;
  min-height: 380px;
  width: 550px;
  margin: 60px 0;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 2px 4px 0px;
  border-radius: 4px;
  border: 1px solid rgb(245, 247, 248);

  h2 {
    padding-top: 15px;
    color: #d22d27;
    text-align: center;
  }
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 10px;

  h3 {
    padding-left: 3px;
  }

  .input-password {
    margin-top: 20px;
  }

  .signin-button {
    margin: 30px 0px;
    align-self: flex-start;
    width: 100%;
    height: 42px;
    font-size: 16px;
    font-weight: 700;
    background: #d22d27;
    color: #edf5e1;

    &:hover {
      background: ${shade(0.1, '#d22d27')};
    }

    &:hover {
      color: ${shade(0.1, '#edf5e1')};
    }
  }

  .create-account {
    text-align: center;
  }

`;