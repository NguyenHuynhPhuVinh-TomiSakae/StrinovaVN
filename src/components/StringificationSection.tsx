'use client';

import Image from 'next/image';
import { useMediaQuery } from 'react-responsive';
import { useState, useEffect } from 'react';

export default function StringificationSection() {
    const [mounted, setMounted] = useState(false);
    const isMobile = useMediaQuery({ maxWidth: 768 });

    useEffect(() => {
        setMounted(true);
    }, []);

    // Trả về null hoặc loading state khi chưa mounted
    if (!mounted) {
        return null; // hoặc return một loading placeholder
    }

    const MobileVersion = () => (
        <div className="grid grid-rows-[60vh_40vh] w-full min-h-[100vh] bg-gradient-to-b from-[#101B51] to-[#101B51]">
            <div className="flex flex-col justify-center p-8 pt-28 text-left">
                <div className="text-[28px] font-bold leading-[1.2] text-[#F3EBE5]">
                    STRINOVA
                </div>
                <div className="mt-[20px] text-[14px] font-medium text-[#FFFFFF] whitespace-break-spaces leading-relaxed">
                    Strinova là game bắn súng chiến thuật anime với cơ chế độc đáo cho phép chuyển đổi giữa 2D và 3D, mang đến trải nghiệm PvP gay cấn chưa từng có.
                </div>
                <button className="mt-[32px] w-max min-w-[120px] px-[20px] py-[10px] text-[14px] cursor-pointer 
                    text-white hover:text-primary border-primary bg-primary hover:bg-white relative flex 
                    justify-center rounded text-center font-bold leading-none transition-all duration-300">
                    KHÁM PHÁ NGAY
                </button>
            </div>
            <div className="relative w-full h-full">
                <div className="absolute inset-0 bg-gradient-to-b from-[#101B51] via-transparent to-transparent opacity-90 z-10" />
                <Image
                    src="/background2.jpg"
                    alt="Background"
                    fill
                    priority
                    quality={100}
                    className="object-cover"
                />
            </div>
        </div>
    );

    const DesktopVersion = () => (
        <div className="relative w-full aspect-[21/9]">
            <Image
                src="/background2.jpg"
                alt="Background"
                fill
                priority
                quality={100}
                sizes="(min-width: 769px) 100vw, 1920px"
                className="object-cover object-center"
            />
            <div className="absolute bottom-[40px] left-[100px] text-left max-w-none">
                <div className="text-[40px] font-bold leading-[36px] text-[#F3EBE5] text-shadow-[0px_0px_16px_rgba(0,0,0,0.35)]">
                    STRINOVA
                </div>
                <div className="mt-[16px] w-[650px] text-lg font-medium text-[#FFFFFF] whitespace-break-spaces leading-relaxed">
                    Strinova là game bắn súng chiến thuật góc nhìn thứ ba phong cách anime đối kháng
                    đầy gay cấn. Trải nghiệm những trận đấu PVP căng thẳng với cơ chế độc đáo cho phép
                    chuyển đổi linh hoạt giữa hình dạng 2D và 3D, mang đến lối chơi bắn súng
                    chưa từng có.
                </div>
                <button className="mt-[24px] w-max min-w-[140px] px-[36px] py-[14px] text-[16px] cursor-pointer 
                    text-white hover:text-primary border-primary bg-primary hover:bg-white relative flex 
                    justify-center rounded text-center font-bold leading-none transition-all duration-300">
                    KHÁM PHÁ NGAY
                </button>
            </div>
        </div>
    );

    return isMobile ? <MobileVersion /> : <DesktopVersion />;
}