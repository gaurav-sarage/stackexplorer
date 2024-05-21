'use client';

import { useEffect, useState } from 'react';

import { usePathname } from 'next/navigation';

const useNavigation = () => {
  const pathname = usePathname();
  const [isCompareActive, setIsCompare] = useState(false);

  useEffect(() => {
    setIsCompare(false);

    switch (pathname) {
      case '/compare':
        setIsCompare(true);
        break;
      default:
        // Handle any other cases here
        break;
    }
  }, [pathname]);

  return {
    isCompareActive,
  };
};

export default useNavigation;
