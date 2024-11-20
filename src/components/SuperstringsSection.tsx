'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';

export default function SuperstringsSection() {
    const characters = [
        {
            image: "/agent1.png",
            activeImage: "/agent1a.png",
            background: "/background4-1.jpg",
            isActive: true,
            title: "THE SCISSORS",
            description: "Trong thời đại hỗn loạn, nhân loại đã chọn di cư\nđến không gian đa chiều Strinova, nơi các Superstring\nchiến đấu không ngừng nghỉ để bảo vệ niềm tin\nvà lý tưởng của họ."
        },
        {
            image: "/agent2.png",
            activeImage: "/agent2a.png",
            background: "/background4-2.jpg",
            isActive: false,
            title: "P.U.S",
            description: "Tổ chức cầm quyền của Tân Thế Giới, vừa duy trì trật tự vừa nghiên cứu cách tiêu diệt \"Hội chứng Sụp đổ\" đang đe dọa sự tồn vong của nhân loại."
        },
        {
            image: "/agent3.png",
            activeImage: "/agent3a.png",
            background: "/background4-3.jpg",
            isActive: false,
            title: "URBINO",
            description: "Tập đoàn kiểm soát nguồn sống của Tân Thế Giới, sử dụng năng lượng tinh thể để khám phá các chiều không gian mới và mở rộng lãnh thổ."
        }
    ];

    const [activeChar, setActiveChar] = useState(0);

    // Thêm hook kiểm tra mobile
    const isMobile = useMediaQuery({ maxWidth: 768 });
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    const MobileVersion = () => (
        <div className="grid grid-rows-[60vh_40vh] w-full min-h-[100vh] bg-gradient-to-b from-[#101B51] to-[#101B51]">
            <div className="flex flex-col justify-center p-8 pt-12 text-left">
                <div className="text-[24px] font-bold leading-[1.2] text-[#F3EBE5]">
                    CHIẾN BINH SIÊU DÂY
                </div>

                <div className="mt-[20px] flex gap-x-3">
                    {characters.map((char, index) => (
                        <div
                            key={index}
                            onClick={() => setActiveChar(index)}
                            className={`relative h-[50px] w-[50px] cursor-pointer overflow-hidden rounded ${index !== activeChar ? 'opacity-80 hover:opacity-100' : ''}`}
                        >
                            <Image
                                src={index === activeChar ? char.activeImage : char.image}
                                alt=""
                                fill
                                className="object-cover object-left"
                            />
                        </div>
                    ))}
                </div>

                <div className="mt-[20px] text-[14px] font-bold leading-none text-white">
                    {characters[activeChar].title}
                </div>

                <div className="mt-[10px] text-[12px] font-medium text-[#FFFFFF] whitespace-pre-wrap leading-relaxed">
                    {characters[activeChar].description}
                </div>

                <button className="mt-[32px] w-max min-w-[120px] px-[20px] py-[10px] text-[12px] cursor-pointer 
                    text-white hover:text-primary border-primary bg-primary hover:bg-white relative flex 
                    justify-center rounded text-center font-bold leading-none transition-all duration-300">
                    XEM TẤT CẢ
                </button>
            </div>
            <div className="relative w-full h-full">
                <div className="absolute inset-0 bg-gradient-to-b from-[#101B51] via-transparent to-transparent opacity-30 z-10" />
                <div className="absolute inset-0 bg-[#101B51] opacity-5 z-[5]" />
                <Image
                    src={characters[activeChar].background}
                    alt=""
                    fill
                    priority
                    quality={100}
                    className="object-cover object-left"
                />
            </div>
        </div>
    );

    const DesktopVersion = () => (
        <div className="relative w-full aspect-[16/9] sm:aspect-[16/9] md:aspect-[21/9]">
            <div className="absolute inset-0">
                <Image
                    src={characters[activeChar].background}
                    alt=""
                    fill
                    priority
                    quality={100}
                    sizes="(max-width: 768px) 100vw, 80vw"
                    className="object-cover object-center"
                />
            </div>

            <div className="absolute right-[10px] sm:right-[50px] md:right-[150px] top-[50%] -translate-y-1/2 flex h-auto w-full max-w-[260px] sm:max-w-[380px] md:max-w-[450px] flex-col justify-between text-[#F3F1EC] p-3 md:p-0">
                <div>
                    <div className="text-[16px] sm:text-[24px] md:text-[42px] font-bold leading-none text-[#F3F1EC]">
                        CHIẾN BINH SIÊU DÂY
                    </div>

                    <div className="mt-2 sm:mt-4 md:mt-8 flex gap-x-1.5 sm:gap-x-3 md:gap-x-6">
                        {characters.map((char, index) => (
                            <div
                                key={index}
                                onClick={() => setActiveChar(index)}
                                className={`relative h-[32px] w-[32px] sm:h-[50px] sm:w-[50px] md:h-[70px] md:w-[70px] cursor-pointer overflow-hidden rounded ${index !== activeChar ? 'opacity-80 hover:opacity-100' : ''}`}
                            >
                                <Image
                                    src={index === activeChar ? char.activeImage : char.image}
                                    alt=""
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        ))}
                    </div>

                    <div className="mt-[12px] sm:mt-[20px] md:mt-[32px] text-[12px] sm:text-[16px] md:text-[24px] font-bold leading-none">
                        {characters[activeChar].title}
                    </div>

                    <div className="mt-[6px] sm:mt-[10px] md:mt-[14px] whitespace-pre-wrap text-[8px] sm:text-[12px] md:text-[16px] leading-[14px] sm:leading-[18px] md:leading-[24px] text-[#F3F1EC]">
                        {characters[activeChar].description}
                    </div>
                </div>

                <button className="mt-2 sm:mt-4 md:mt-8 w-max min-w-[60px] sm:min-w-[100px] md:min-w-[140px] px-[12px] sm:px-[20px] md:px-[36px] py-[6px] sm:py-[10px] md:py-[14px] text-[10px] sm:text-[14px] md:text-[16px] cursor-pointer text-white hover:text-primary border-primary bg-primary hover:bg-white relative flex justify-center rounded text-center font-bold leading-none transition-all duration-300">
                    XEM TẤT CẢ
                </button>
            </div>
        </div>
    );

    return isMobile ? <MobileVersion /> : <DesktopVersion />;
}