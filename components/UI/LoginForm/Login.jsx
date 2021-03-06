import React, { useState, useContext } from 'react';
import _ from 'lodash';

import {
  LoginForm,
  Header,
  LoginButtons,
  Background,
} from '../../../styles/Components/UI/LoginForm/login.styled-components';


import LoginButton from './ThirdPartyLoginButton';

const Login = (props) => {
  const handleToggleForm = () => {
    const {
      Toggle,
    } = props;
    const toggler = Toggle;
    toggler();
  };

  return (
    <>
      <LoginForm>
        <Header>
          Login
        </Header>
        <LoginButtons>
          <li
            style={{
              listStyle: 'none',
            }}
          >
            <LoginButton
              icon="google"
              backgroundColor="#4285f4"
              endpoint="https://cryptic-activist-user-api.herokuapp.com/auth/google"
              providerName="Google"
            />
          </li>
          <li
            style={{
              listStyle: 'none',
            }}
          >
            <LoginButton
              icon="github"
              backgroundColor="#333"
              endpoint="https://cryptic-activist-user-api.herokuapp.com/auth/github"
              providerName="Github"
            />
          </li>
          <li
            style={{
              listStyle: 'none',
            }}
          >
            <LoginButton
              icon="facebook"
              backgroundColor="#3a5797"
              endpoint="https://cryptic-activist-user-api.herokuapp.com/auth/facebook"
              providerName="Facebook"
            />
          </li>
        </LoginButtons>
      </LoginForm>
      <Background onClick={handleToggleForm} />
    </>
  );
};

export default Login;
