import { useEffect, useState } from 'react';

export const useGetMethod = apiPath => {
  const [data, setData] = useState([]);

  useEffect(async () => {
    try {
      const res = await fetch(`/api/${apiPath}`);
      if (!res.ok) {
        console.error(`Http error: ${res.status}`);
      }
      const json = await res.json();
      setData(json);
    } catch (error) {
      console.error(error);
    }
  }, []);

  return { data };
};
