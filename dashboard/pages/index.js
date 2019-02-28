import '../styles/index.scss';
import styled from '@emotion/styled';
import MyContext from '../components/MyContext';
import Dashboard from '../components/Dashboard';

const PageWrapper = styled.div`
  height: 100vh;
`;

export default () => (
  <MyContext.Consumer>
    {context => (
      <PageWrapper>
        <Dashboard context={context} />
      </PageWrapper>
    )}
  </MyContext.Consumer>
);
