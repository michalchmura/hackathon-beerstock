import styled from '@emotion/styled';
import LoadingComponent from './LoadingComponent';
import IllustrationLearningAndDevelopment from '@bubble-ui/illustration-learning-and-development';
import IllustrationCreditRefusal from '@bubble-ui/illustration-credit-refusal';
const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 2rem;
  padding: 5rem;

  @media screen and (max-width: 900px) {
    grid-template-columns: auto;
    padding: 0;
  }
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

const FridgeWebCamText = styled.span`
  font-family: 'Klarna Headline';
  font-weight: bolder;
  text-transform: uppercase;
  letter-spacing: 1.2px;
  padding-left: 0.5rem;
  color: #606f7b;
`;

const FridgeImage = styled.img`
  object-fit: cover;
  display: flex;
  justify-content: center;
  /* width: 100%; */
  max-height: 400px;
  box-shadow: 0 15px 30px 0 rgba(0, 0, 0, 0.11),
    0 5px 15px 0 rgba(0, 0, 0, 0.08);
  border-radius: 0.5rem;
  background-color: #fff;
`;

const MateAvailability = styled.span`
  font-family: 'Klarna Headline';
  font-weight: bolder;
  font-size: 8rem;

  @media screen and (max-width: 900px) {
    font-size: 3rem;
  }
`;

const StyledIconSuccess = styled(IllustrationLearningAndDevelopment)`
  path {
    fill: #589e60 !important;
  }
`;

const StyledIconFailure = styled(IllustrationCreditRefusal)`
  path {
    fill: #e66640 !important;
  }
`;

const Dashboard = props => {
  const { context } = props;
  return (
    <LoadingComponent
      isLoading={context.isLoadingApi}
      isError={context.apiError}
    >
      <ContentWrapper>
        <div>
          <FridgeWebCamText>🎥 Fridge live cam</FridgeWebCamText>
          <FridgeImage src="/static/1.jpg" width="400px" height="400px" />
        </div>

        <MateAvailability>
          <span style={{ color: '#589E60' }}>
            Mate in stock! <StyledIconSuccess />
          </span>
        </MateAvailability>

        {/* <MateAvailability>
          <span style={{ color: '#E66640' }}>
            Mate is out! <StyledIconFailure />
          </span>
        </MateAvailability> */}
      </ContentWrapper>
    </LoadingComponent>
  );
};

export default Dashboard;
