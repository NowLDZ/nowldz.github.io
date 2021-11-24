import { useEffect, useState } from 'react';
import { events } from '@/pages/api/events';
import { faqs } from '@/pages/api/faqs';
import { hello } from '@/pages/api/hello';
import { organizations } from '@/pages/api/organizations';
import { partners } from '@/pages/api/partners';

export const useGetMethod = apiPath => {
  const [data, setData] = useState([]);

  useEffect(() => {
    switch (apiPath) {
      case 'events':
        setData(events);
        break;
      case 'faqs':
        setData(faqs);
        break;
      case 'hello':
        setData(hello);
        break;
      case 'organizations':
        setData(organizations);
        break;
      case 'partners':
        setData(partners);
        break;
    }
  }, []);

  return { data };
};
