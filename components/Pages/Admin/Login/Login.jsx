import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import _, { uniqueId } from 'lodash';

import Layout from '../../../Layout';
import Router from 'next/router';

import {
  FaUsersCog,
  FaUser,
} from 'react-icons/fa';

import {
  TitleDiv,
  Form,
  Warning,
} from '../../../../styles/Pages/Admin/Register/register.styled-components';

import api from '../../../../services/api';

import * as UserAction from '../../../../store/actions/user/user';

const RegisterAdmin = (props) => {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [isSU, setIsSU] = useState(false);
  const [error, setError] = useState(false);
  const [adminUser, setAdminUser] = useState('');
  const [adminPassword, setAdminPassword] = useState('');
  const dispatch = useDispatch();

  const userInfo = useSelector((state) => state.user.data);
  const userInfoFetched = useSelector((state) => state.user.fetched);

  const LoginSU = async (userInfo) => {
    const response = await fetch('http://localhost:5000/admin/user/verify/su',
      {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userInfo),
      });
    const data = await response.json();
    return data;
  };

  const LoginAdmin = async (userInfo) => {
    const response = await fetch('http://localhost:5000/admin/user/login/admin',
      {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userInfo),
      });
    const data = await response.json();
    return data;
  };

  const handleUser = (e) => {
    setUser(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleAdminUser = (e) => {
    setAdminUser(e.target.value);
  };

  const handleAdminPassword = (e) => {
    setAdminPassword(e.target.value);
  };

  const handleLoginSU = async (e) => {
    e.preventDefault();
    const userInfo = {
      user,
      password,
    };
    const res = await LoginSU(userInfo);
    setIsSU(res.isSU);
    if (!isSU) {
      setError(true);
    } else {
      setError(false);
    }
  };

  const handleLoginAdmin = async (e) => {
    e.preventDefault();

    if (adminUser !== '' && adminPassword !== '') {
      const userInfo = {
        adminUser: adminUser,
        adminPassword: adminPassword,
      };
      const res = await LoginAdmin(userInfo);
      dispatch(UserAction.loginAdminUser(adminUser, adminPassword))
    }
  };

  let registerAdmin;

  if (isSU) {
    registerAdmin = (
      <>
        <div className="col-12">
          <TitleDiv>
            <FaUser />
            <h1>Login Admin</h1>
          </TitleDiv>
          <Form method="post" onSubmit={handleLoginAdmin}>
            <input
              type="text"
              name="user"
              id="user"
              value={adminUser}
              placeholder="User"
              autoComplete="off"
              onChange={handleAdminUser}
            />
            <br />
            <input
              type="password"
              name="password"
              id="password"
              value={adminPassword}
              placeholder="Password"
              onChange={handleAdminPassword}
            />
            <br />
            <button className="register" type="submit">
              Login
            </button>
          </Form>
        </div>
      </>
    );
  } else {
    registerAdmin = (
      <>
        <div className="col-12">
          <TitleDiv>
            <FaUsersCog />
            <h1>Super User</h1>
          </TitleDiv>
          <Form method="post" onSubmit={handleLoginSU}>
            <input
              type="text"
              name="user"
              id="user"
              value={user}
              placeholder="User"
              autoComplete="off"
              onChange={handleUser}
            />
            <br />
            <input
              type="password"
              name="password"
              id="password"
              value={password}
              placeholder="Password"
              onChange={handlePassword}
            />
            {error && (
              <>
                <br />
                <Warning>
                  Not a Super User
                </Warning>
              </>
            )}
            <button className="register" type="submit">
              Login
            </button>
          </Form>
        </div>
      </>
    );
  }

  return (
    <>
      <Layout>
        <div className="container">
          <div className="row">
            {registerAdmin}
          </div>
        </div>
      </Layout>
    </>
  );
};

export default RegisterAdmin;
