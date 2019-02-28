import styled from '@emotion/styled';
import LoadingComponent from './LoadingComponent';

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 2rem;
  padding: 5rem;
`;

const Card = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  min-height: 150px;
  box-shadow: 0 15px 30px 0 rgba(0, 0, 0, 0.11),
    0 5px 15px 0 rgba(0, 0, 0, 0.08);
  border-radius: 0.5rem;
  background-color: #fff;
  /* background-color: red; */
`;

const Dashboard = props => {
  const { context } = props;
  return (
    <LoadingComponent
      isLoading={context.isLoadingApi}
      isError={context.apiError}
    >
      <ContentWrapper>
        <Card>asd</Card>
        <div>
          <p>🎥 Fridge live cam</p>
          <Card>def</Card>
        </div>
      </ContentWrapper>
    </LoadingComponent>
  );
};

export default Dashboard;
