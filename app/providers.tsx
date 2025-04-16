'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import * as gtag from '@/lib/gtag';

export function GoogleAnalytics() {
  const pathName = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const url = pathName + searchParams.toString();
    gtag.pageview(url);
  }, [pathName, searchParams]);

  return null;
}
