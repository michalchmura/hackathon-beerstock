import axios from 'axios';
import { useState, useEffect } from 'react';

const MockResponse = {};

const useFetchApi = props => {
  const [isLoadingApi, setLoadingApi] = useState(true);
  const [apiError, setApiError] = useState(null);
  const [apiData, setApiData] = useState(null);

  const fetchData = async () => {
    setLoadingApi(true);
    setApiError(null);

    try {
      // const {
      //   data: { products }
      // } = await axios.get('http://localhost:5678/api/analytics/latest');

      setApiData(MockResponse);
    } catch (err) {
      setApiError(err);
    }

    setLoadingApi(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return {
    isLoadingApi,
    apiError,
    apiData
  };
};

export default useFetchApi;
