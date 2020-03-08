import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import Link from 'next/link';

import _ from 'lodash';

import {
  BackgroundDrawer,
  Drawer,
  ProfileDrawerUl,
  SideDrawerSubUl,
  ProfileImage,
  AdminLink,
  ProfileName,
  ProfileRanking,
  SideDrawerUl,
  SideDrawerLi,
  SideDrawerButtonTo,
  SideDrawerLinkTo,
  SideDrawerLinkToAdmin,
  Separator,
  LogoutDiv,
  Logout,
  LoginLinkDiv,
  LoginLink,
} from '../../../../styles/Components/UI/Navbar/SideDrawer/side-drawer.styled-components';

import ProfilePlaceholder from '../../../../assets/img/profile-placeholder.png';

import * as UserActions from '../../../../store/actions/user/user';

const SideDrawer = (props) => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  // console.log('userUser:', user.fetched)

  const handleLogout = async () => {
    dispatch(UserActions.logoutUser());
  };

  const handleClose = () => {
    const {
      HandleSideDrawer,
    } = props;
    const closeDrawer = HandleSideDrawer;
    closeDrawer();
  };

  const handleToggleForm = () => {
    const {
      Toggle,
    } = props;
    const toggler = Toggle;
    toggler();
  };


  let ProfileDiv;
  let logoutVar;
  let Admin;

  if (!_.isEmpty(user.data)) {
    const {
      name: displayName,
      profileImage,
    } = user.data;
    ProfileDiv = (
      <>
        <SideDrawerLinkToAdmin
          to="/profile"
          onClick={handleClose}
        >
          <ProfileDrawerUl>
            <li
              style={{
                width: '33%',
                transform: 'translateY(-8px)',
              }}
            >
              <ProfileImage
                onClick={handleClose}
                src={profileImage.url}
              />
            </li>
            <li
              style={{
                width: '67%',
                top: '8px',
              }}
            >
              <ProfileName>
                {displayName}
              </ProfileName>
              <ProfileRanking>
                Newbie
              </ProfileRanking>
            </li>
          </ProfileDrawerUl>
        </SideDrawerLinkToAdmin>
        <Separator />
      </>
    );
    logoutVar = (
      <>
        <LogoutDiv>
          <Logout
            onClick={handleLogout}
          >
            Log out
          </Logout>
        </LogoutDiv>
      </>
    );
  } else {
    ProfileDiv = (
      <>
        <LoginLinkDiv>
          <LoginLink
            onClick={() => {
              handleClose();
              handleToggleForm();
            }}
          >
          Login
          </LoginLink>
        </LoginLinkDiv>
      </>
    );
    logoutVar = (
      <>
      </>
    );
  }

  if (user.fetched) {
    if (!_.isEmpty(user.data)) {
      if (user.data.isAdmin) {
        Admin = (
          <Link href="/admin">
            <AdminLink
              onClick={handleClose}
            >
              Admin
            </AdminLink>
          </Link>
        );
      } else {
        Admin = (
          <Link href="/contributor">
            <AdminLink
              onClick={handleClose}
            >
              Contributor
            </AdminLink>
          </Link>
        );
      }
    }
  }

  return (
    <>
      <BackgroundDrawer onClick={handleClose} />
      <Drawer className="side-drawer">
        {ProfileDiv}
        <SideDrawerUl>
          <SideDrawerLi>
            <SideDrawerButtonTo
              className="navbar-toggler"
              type="button"
              aria-expanded="false"
              aria-label="Toggle navigation"
              data-target="#expand-blog"
              aria-controls="expand-blog"
              data-toggle="collapse"
            >
              Blog
            </SideDrawerButtonTo>
            <SideDrawerSubUl className="collapse navbar-collapse" id="expand-blog">
              <SideDrawerLi>
              <Link href="/">
                <SideDrawerLinkTo
                  onClick={handleClose}
                >
                  Home
                </SideDrawerLinkTo>
              </Link>
              </SideDrawerLi>
              <SideDrawerLi>
                <SideDrawerButtonTo
                  className="navbar-toggler"
                  type="button"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                  data-target="#expand-blog-categories"
                  aria-controls="expand-blog-categories"
                  data-toggle="collapse"
                >
                  Categories
                </SideDrawerButtonTo>
                <SideDrawerSubUl className="collapse navbar-collapse" id="expand-blog-categories">
                  <SideDrawerLi>
                    <SideDrawerLinkTo
                      to="/blog"
                      onClick={handleClose}
                    >
                      Test 1
                    </SideDrawerLinkTo>
                  </SideDrawerLi>
                  <SideDrawerLi>
                    <SideDrawerLinkTo
                      to="/blog"
                      onClick={handleClose}
                    >
                      Test 2
                    </SideDrawerLinkTo>
                  </SideDrawerLi>
                  <SideDrawerLi>
                    <SideDrawerLinkTo
                      to="/blog"
                      onClick={handleClose}
                    >
                      All Categories
                    </SideDrawerLinkTo>
                  </SideDrawerLi>
                </SideDrawerSubUl>
              </SideDrawerLi>
            </SideDrawerSubUl>
          </SideDrawerLi>
          <SideDrawerLi>
            <SideDrawerLinkTo
              href="https://podcast.crypticactivist.com"
              onClick={handleClose}
            >
              Podcasts
            </SideDrawerLinkTo>
          </SideDrawerLi>
          <SideDrawerLi>
            <SideDrawerLinkTo
              href="https://station.crypticactivist.com"
              onClick={handleClose}
            >
              Station
            </SideDrawerLinkTo>
          </SideDrawerLi>
          <SideDrawerLi>
            <SideDrawerLinkTo
              href="https://exchange.crypticactivist.com"
              onClick={handleClose}
            >
              Exchange
            </SideDrawerLinkTo>
          </SideDrawerLi>
          <SideDrawerLi>
            <SideDrawerLinkTo
              href="https://meetup.crypticactivist.com"
              onClick={handleClose}
            >
              Meetup
            </SideDrawerLinkTo>
          </SideDrawerLi>
          <SideDrawerLi>
            <SideDrawerLinkTo
              href="https://forum.crypticactivist.com"
              onClick={handleClose}
            >
              Forum
            </SideDrawerLinkTo>
          </SideDrawerLi>
        </SideDrawerUl>
        {Admin}
        {logoutVar}
      </Drawer>
    </>
  );
};

export default SideDrawer;

SideDrawer.propTypes = {
  HandleSideDrawer: PropTypes.func.isRequired,
  UserData: PropTypes.objectOf(PropTypes.any),
};

SideDrawer.defaultProps = {
  UserData: {},
};
