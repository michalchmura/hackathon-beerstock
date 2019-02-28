import React, { useEffect, useState } from 'react';
import MyContext from './MyContext';
import useFetchApi from '../hooks/FetchApi';
// import useConnectSockets from '../hooks/ConnectSockets';

const MyProvider = props => {
  const { isLoadingApi, apiError, apiData } = useFetchApi();

  return (
    <MyContext.Provider
      value={{
        isLoadingApi,
        apiError,
        apiData
      }}
    >
      {props.children}
    </MyContext.Provider>
  );
};

export default MyProvider;
