const LoadingComponent = ({ isLoading, isError, children }) => {
  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (isError) {
    return <p>API ERROR</p>;
  }
  return children;
};

export default LoadingComponent;
