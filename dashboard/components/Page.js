import React, { Component } from 'react';
import styled from '@emotion/styled';
import Header from './Header';
import Meta from './Meta';

const Inner = styled.div`
  margin: 0 auto;
  padding: 2rem;
`;

class Page extends Component {
  render() {
    return (
      <>
        <Meta />
        <Header />
        <Inner>{this.props.children}</Inner>
      </>
    );
  }
}

export default Page;
