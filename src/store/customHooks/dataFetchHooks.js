import React, { useState, useEffect } from 'react';
import { callApi } from '../api/api';

const baseUrl = '/api/?key=9656065-a4094594c34f9ac14c7fc4c39';

export function dataFetchHooks(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const getData = await callApi(`${baseUrl}${url}`);
      setData(getData);
      setLoading(false);
    }

    fetchData();
  }, [url]);

  return { data, loading };
}
