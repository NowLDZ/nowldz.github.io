import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Custom404() {
  const router = useRouter();

  useEffect(() => {
    if (router.asPath === '/404') {
      return;
    }
    router.replace(router.asPath);
  });

  return null;
}
