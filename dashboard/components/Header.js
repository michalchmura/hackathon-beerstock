import React from 'react';
import Link from 'next/link';
import styled from '@emotion/styled';
import NProgress from 'nprogress';
import Router from 'next/router';
import { Fragment } from 'react';
import KlarnaLogoFull from '@bubble-ui/asset-klarna-logo-full';

Router.onRouteChangeStart = () => {
  NProgress.start();
};
Router.onRouteChangeComplete = () => {
  NProgress.done();
};

Router.onRouteChangeError = () => {
  NProgress.done();
};

const HeaderWrapper = styled.div`
  padding: 2rem;
`;

const Logo = styled.span`
  font-family: 'Klarna Headline';
  font-weight: bolder;
  font-size: 22px;
  padding: 1rem;
  color: #343434;
  /* margin-top: 2px; */
`;

const Header = () => (
  <HeaderWrapper>
    <span>
      <KlarnaLogoFull /> <Logo>Mate Monitoring 🍹</Logo>
    </span>
  </HeaderWrapper>
);

export default Header;
