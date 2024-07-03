'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useEffect } from 'react';

const page = () => {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (pathname === '/docs') {
      router.replace('/docs/getting-started/introduction');
    }
  }, []);
  return null;
};

export default page;
