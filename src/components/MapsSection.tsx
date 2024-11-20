'use client';

import Image from 'next/image';
import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';

interface MapMode {
    name: string;
    image: string;
    description: string;
}

export default function MapsSection() {
    const [activeMode, setActiveMode] = useState(0);
    const isMobile = useMediaQuery({ maxWidth: 768 });

    const mapModes: MapMode[] = [
        {
            name: 'DEMOLITION',
            image: '/map1.jpg',
            description: 'Khám phá bốn góc của Strinova, từ những cảng biển nhộn nhịp đến các phòng thí nghiệm bí mật, từ những thành phố cao tầng đến vùng đất cát hoang vu. Mỗi bản đồ đều chứa đựng một câu chuyện đang chờ được khám phá!'
        },
        {
            name: 'TEAM ARENA',
            image: '/map2.jpg',
            description: 'Khám phá bốn góc của Strinova, từ những cảng biển nhộn nhịp đến các phòng thí nghiệm bí mật, từ những thành phố cao tầng đến vùng đất cát hoang vu. Mỗi bản đồ đều chứa đựng một câu chuyện đang chờ được khám phá!'
        },
        {
            name: 'ESCORT MODE',
            image: '/map3.jpg',
            description: 'Khám phá bốn góc của Strinova, từ những cảng biển nhộn nhịp đến các phòng thí nghiệm bí mật, từ những thành phố cao tầng đến vùng đất cát hoang vu. Mỗi bản đồ đều chứa đựng một câu chuyện đang chờ được khám phá!'
        }
    ];

    return (
        <div className={`relative flex h-[700px] w-full ${isMobile
            ? 'flex-col justify-between pb-[20px] px-[20px] pt-[40px]'
            : 'justify-end pb-[40px] pr-[108px] pt-[80px]'
            }`}>
            {/* Background Image */}
            <div className="absolute bottom-0 left-0 h-full w-full">
                <Image
                    src="/map.jpg"
                    alt=""
                    fill
                    className="object-cover"
                />
            </div>

            {/* Mobile Header */}
            {isMobile && (
                <div className="relative z-10 text-center mb-6">
                    <div className="text-[24px] font-extrabold leading-[24px] text-white">
                        BẢN ĐỒ
                    </div>
                    <div className="mt-3 max-h-[150px] overflow-auto whitespace-pre-wrap text-[12px] leading-[18px] text-[#F3F1EC] [text-shadow:0px_0px_7px_#000000]">
                        {mapModes[activeMode].description}
                    </div>
                </div>
            )}

            {/* Content */}
            <div className={`relative z-10 flex ${isMobile ? 'w-full flex-col' : 'h-full w-[400px] flex-col'}`}>
                {/* Desktop Header */}
                {!isMobile && (
                    <div>
                        <div className="text-[40px] font-extrabold leading-[32px] text-white">
                            BẢN ĐỒ
                        </div>
                        <div className="mt-6 max-h-[150px] overflow-auto whitespace-pre-wrap text-[18px] leading-[26px] text-[#F3F1EC] [text-shadow:0px_0px_7px_#000000]">
                            {mapModes[activeMode].description}
                        </div>
                    </div>
                )}

                {/* Mode Selector */}
                <div className={`p-3 ${isMobile ? 'bg-black/80' : 'mt-16'}`}>
                    <div className="flex items-end gap-3">
                        {mapModes.map((mode, index) => (
                            <div
                                key={index}
                                onClick={() => setActiveMode(index)}
                                className={`cursor-pointer text-[10px] md:text-[16px] font-semibold hover:text-white w-[calc((100%-24px)/3)] ${activeMode === index ? '!text-primary' : 'text-[#D3D3D3]'
                                    }`}
                            >
                                <span className="whitespace-nowrap">
                                    {mode.name}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Map Image */}
                <div className="relative h-[200px] w-full">
                    <Image
                        src={mapModes[activeMode].image}
                        alt=""
                        fill
                        className="object-cover"
                    />
                </div>

                {/* View All Button */}
                <div className="mt-4 flex md:justify-start justify-center">
                    <button className="w-max min-w-[100px] md:min-w-[140px] px-[20px] md:px-[40px] py-[10px] md:py-[14px] text-[12px] md:text-[16px] cursor-pointer text-white hover:text-primary border-primary bg-primary hover:bg-white relative flex justify-center rounded text-center font-bold leading-none transition-all duration-300">
                        XEM TẤT CẢ
                    </button>
                </div>
            </div>
        </div>
    );
}