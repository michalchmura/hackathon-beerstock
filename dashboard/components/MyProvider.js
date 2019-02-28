import React, { useEffect, useState } from 'react';
import MyContext from './MyContext';
// import useFetchAnalytics from '../hooks/FetchAnalytics';
// import useConnectSockets from '../hooks/ConnectSockets';

const MyProvider = props => {
  // const [analyticsData, setAnalyticsData] = useState([]);
  // const { isLoadingApi, apiError, productsData } = useFetchAnalytics();
  // const { socketConnection } = useConnectSockets({
  //   analyticsData,
  //   setAnalyticsData
  // });

  return (
    <MyContext.Provider
      value={
        {
          // isLoadingApi,
          // apiError,
          // productsData,
          // socketConnection,
          // analyticsData
        }
      }
    >
      {props.children}
    </MyContext.Provider>
  );
};

export default MyProvider;
