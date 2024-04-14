import { useState, useEffect } from "react";

export default function useMediaQuery() {
    const [deviceType, setDeviceType] = useState<'mobile' | 'tablet' | 'desktop' | null>(
        null,
    );
    const [dimensions, setDimensions] = useState<{
        width: number;
        height: number;
    } | null>(null);

    useEffect(() => {
        const checkDevice = () => {
            if (window.matchMedia('(max-width: 640px)').matches) {
                setDeviceType('mobile');
            } else if (
                window.matchMedia('(min-width: 641px) and (max-width: 1024px)').matches
            ) {
                setDeviceType('tablet');
            } else {
                setDeviceType('desktop');
            }
            setDimensions({ width: window.innerWidth, height: window.innerHeight });
        };

        checkDevice();

        window.addEventListener('resize', checkDevice);

        return () => {
            window.removeEventListener('resize', checkDevice);
        }
    }, []);

    return {
        deviceType,
        width: dimensions?.width,
        height: dimensions?.height,
        isMobile: deviceType === 'mobile',
        isTablet: deviceType === 'tablet',
        isDesktop: deviceType === 'desktop',
    };
};