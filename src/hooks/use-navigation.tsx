"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const useNavigation = () => {
    const pathname = usePathname();
    const [isCompareActive, setIsCompareActive] = useState(false);

    useEffect(() => {
        setIsCompareActive(false);

        switch (pathname) {
            case "/compare": setIsCompareActive(true);
            break;
        default:
            break;
        }
    }, [pathname]);

    return {
        isCompareActive,
    };
};

export default useNavigation;