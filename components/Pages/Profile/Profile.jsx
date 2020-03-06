/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import _ from 'lodash';
import Head from 'next/head';

import {
  FaEdit,
  FaSpinner,
} from 'react-icons/fa';

import {
  ContainerProfile,
  Cover,
  Wrapper,
  ProfileImage,
  Label,
  DisplayName,
  Input,
  TextArea,
  SubmitButton,
  LoadingProfileImage,
  EditableButton,
  LoadingAllContent,
} from '../../../styles/Pages/Profile/profile.styled-components';

import Layout from '../../Layout';
import RecentActivities from './RecentActivities';

import {
  updateUserInfo,
  refreshUserData,
} from '../../../store/actions/user/user';

const Profile = (props) => {
  const dispatch = useDispatch();

  const [emailState, setEmailState] = useState('');
  const [quoteState, setQuoteState] = useState('');
  const [githubState, setGithubState] = useState('');
  const [linkedinState, setLinkedinState] = useState('');
  const [twitterState, setTwitterState] = useState('');
  const [editable, setEditable] = useState(false);
  const [updated, setUpdated] = useState(false);

  useEffect(() => {
    if (!_.isEmpty(props.data)) {
      const {
        email,
        quote,
        socialMedia,
      } = props.data;
      setEmailState(email);
      setQuoteState(quote);
      setGithubState(socialMedia.github);
      setLinkedinState(socialMedia.linkedin);
      setTwitterState(socialMedia.twitter);
    }
  }, [props.data]);

  useEffect(() => {
    if (updated) {
      // dispatch(refreshUserData(props.data._id));
    }
  }, [updated]);

  const handleEditable = () => {
    setEditable(!editable);
  };

  const handleEmail = (e) => {
    setEmailState(e.target.value);
  };

  const handleQuote = (e) => {
    if (quoteState.length <= 100) {
      setQuoteState(e.target.value);
    } else {
      setQuoteState(quoteState.substring(0, quoteState.length - 1));
    }
  };

  const handleGithub = (e) => {
    setGithubState(e.target.value);
  };

  const handleLinkedin = (e) => {
    setLinkedinState(e.target.value);
  };

  const handleTwitter = (e) => {
    setTwitterState(e.target.value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const updateObj = {
      userId: props.data._id,
    };

    updateObj.email = emailState;
    updateObj.quote = quoteState;
    updateObj.github = githubState;
    updateObj.linkedin = linkedinState;
    updateObj.twitter = twitterState;

    dispatch(updateUserInfo(updateObj));
    setUpdated(true);
  };

  console.log('props profile:', props)

  let header;
  let content;
  let UserImageDiv;
  let ProfileCoverImage;
  let EmailInput;
  let Submit;
  let Quote;
  let GithubInput;
  let LinkedinInput;
  let TwitterInput;
  let displayName;
  let Activities;


  if (props.loading) {
    content = (
      <>
        <LoadingAllContent>
          <FaSpinner />
        </LoadingAllContent>
      </>
    );
    displayName = (
      <>
      </>
    );
    UserImageDiv = (
      <>
        <LoadingProfileImage
          style={{
            backgroundColor: '#eee',
          }}
        />
      </>
    );
    ProfileCoverImage = (
      <>
        <Cover
          alt="Profile Placeholder"
          style={{
            backgroundColor: '#eee',
          }}
        />
      </>
    );
    EmailInput = (
      <>
      </>
    );
    Activities = (
      <>
      </>
    );
  } else if (props.fetched) {
    if (!_.isEmpty(props.data)) {
      const {
        name, profileImage,
      } = props.data;

      header = (
        <Head>
          <title>Profile | Cryptic Activist Blog</title>
          <meta
            name="description"
            content="Blog Posts"
          />
          <meta property="og:locale" content="en_US" />
          <meta property="og:locale:alternate" content="en_CA" />
          <meta property="og:locale:alternate" content="es_GB" />
          <meta property="og:site_name" content="Cryptic Activist" />
          <meta property="og:description" content="Meta description" />
          <meta property="og:title" content={`${props.data.name} | Cryptic Activist`} />
          <meta property="og:image" content={props.data.profileImage.url} />
          <meta property="og:image:type" content="image/jpeg" />
          <meta property="og:image:type" content="image/jpg" />
          <meta property="og:image:type" content="image/png" />
          <meta property="og:image:width" content="800" />
          <meta property="og:image:height" content="600" />
          <meta property="og:image:alt" content={`${props.data.name} profile picture`} />
          <meta property="og:url" content="https://blog.crypticactivist.com/profile" />
          <meta property="og:type" content="article" />

          <meta name="twitter:site" content="Cryptic Activist" />
          <meta name="twitter:title" content={`${props.data.name} | Cryptic Activist`} />
          <meta name="twitter:description" content="metaDescription" />
          <meta name="twitter:image" content={props.data.profileImage.url} />
          <meta name="twitter:creator" content={props.data.profileImage.url} />
          <meta name="twitter:card" content="article" />
          <meta name="twitter:image:alt" content={props.data.name} />
        </Head>
      );

      displayName = (
        <>
          <Label>Name</Label>
          <DisplayName>{name}</DisplayName>
        </>
      );
      UserImageDiv = (
        <>
          <ProfileImage src={profileImage.url} alt="Profile Placeholder" />
        </>
      );
      ProfileCoverImage = (
        <>
          <Cover
            alt="Profile Placeholder"
            style={{
              backgroundImage: `url(${profileImage.url})`,
            }}
          />
        </>
      );
      Activities = (
        <>
          <RecentActivities
            activities={props.data.posts}
            authorPicture={profileImage.url}
          />
        </>
      );
      if (editable) {
        EmailInput = (
          <>
            <Label>
              Email
            </Label>
            <Input
              id="email"
              name="email"
              value={emailState}
              onChange={handleEmail}
            />
          </>
        );
        Quote = (
          <>
            <Label>
              Quote
            </Label>
            <TextArea
              id="quote"
              name="quote"
              value={quoteState}
              onChange={handleQuote}
            />
          </>
        );
        GithubInput = (
          <>
            <Label>
              Github Profile
            </Label>
            <Input
              id="github-profile"
              name="github-profile"
              type="github-profile"
              value={githubState}
              onChange={handleGithub}
            />
          </>
        );
        LinkedinInput = (
          <>
            <Label>
              Linked-in Profile
            </Label>
            <Input
              id="linkedin-profile"
              name="linkedin-profile"
              type="linkedin-profile"
              value={linkedinState}
              onChange={handleLinkedin}
            />
          </>
        );
        TwitterInput = (
          <>
            <Label>
              Twitter Profile
            </Label>
            <Input
              id="twitter-profile"
              name="twitter-profile"
              type="twitter-profile"
              value={twitterState}
              onChange={handleTwitter}
            />
          </>
        );
        Submit = (
          <>
            <SubmitButton>
              Update
            </SubmitButton>
          </>
        );
        content = (
          <>
            {header}
            {displayName}
            {EmailInput}
            {Quote}
            {GithubInput}
            {LinkedinInput}
            {TwitterInput}
            {Submit}
          </>
        );
      } else {
        EmailInput = (
          <>
            <Label>
              Email
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={emailState}
              onChange={handleEmail}
              disabled
            />
          </>
        );
        Quote = (
          <>
            <Label>
              Quote
            </Label>
            <TextArea
              value={quoteState}
              onChange={handleQuote}
              disabled
            />
          </>
        );
        GithubInput = (
          <>
            <Label>
              Github Profile
            </Label>
            <Input
              id="github-profile"
              name="github-profile"
              type="github-profile"
              value={githubState}
              onChange={handleGithub}
              disabled
            />
          </>
        );
        LinkedinInput = (
          <>
            <Label>
              Linked-in Profile
            </Label>
            <Input
              id="linkedin-profile"
              name="linkedin-profile"
              type="linkedin-profile"
              value={linkedinState}
              onChange={handleLinkedin}
              disabled
            />
          </>
        );
        TwitterInput = (
          <>
            <Label>
              Twitter Profile
            </Label>
            <Input
              id="twitter-profile"
              name="twitter-profile"
              type="twitter-profile"
              value={twitterState}
              onChange={handleTwitter}
              disabled
            />
          </>
        );
        Submit = (
          <>
          </>
        );
        content = (
          <>
            {header}
            {displayName}
            {EmailInput}
            {Quote}
            {GithubInput}
            {LinkedinInput}
            {TwitterInput}
            {Submit}
          </>
        );
      }
    } else {
      const router = useRouter();
      router.push('/');
    }
  }

  return (
    <>
      <Layout>
        {ProfileCoverImage}
        <ContainerProfile className="container">
          <div className="row">
            <div className="col-lg-3 col-md-3 col-sm-12 col-12">
              {UserImageDiv}
            </div>
            <div className="col-lg-9 col-md-9 col-sm-12 col-12">
              <Wrapper>
                <EditableButton
                  type="button"
                  onClick={handleEditable}
                >
                  <FaEdit />
                </EditableButton>
                <form onSubmit={onSubmit}>
                  {content}
                </form>
              </Wrapper>
            </div>
            {Activities}
          </div>
        </ContainerProfile>
      </Layout>
    </>
  );
};

export default connect((state) => state.user)(Profile);
