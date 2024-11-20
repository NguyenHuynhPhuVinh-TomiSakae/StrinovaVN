'use client';

import Image from 'next/image';
import { useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface Weapon {
    image: string;
    thumbnail: string;
    name: string;
}

const CustomArrow = ({ direction, onClick }: { direction: 'left' | 'right', onClick?: () => void }) => (
    <div
        onClick={onClick}
        className={`arms_arrows__fgyS2 ${direction === 'left' ? '-left-8' : '-right-8'} 
        ${direction === 'right' ? 'rotate-180' : ''} absolute top-[50%] z-[10] h-[42px] w-[32px] 
        -translate-y-1/2 cursor-pointer`}
    >
        <div className="relative arms_icon__4Xg0_ arms_icon-default__4jms_ h-full w-full">
            <Image
                src="/gun-no.png"
                alt=""
                fill
                className="object-contain"
            />
        </div>
        <div className="relative arms_icon__4Xg0_ arms_icon-hover__1Rhbo h-full w-full">
            <Image
                src="/gun-active.png"
                alt=""
                fill
                className="object-contain"
            />
        </div>
    </div>
);

export default function WeaponsSection() {
    const [activeWeapon, setActiveWeapon] = useState(0);

    const weapons: Weapon[] = [
        {
            image: "/gun1.png",
            thumbnail: "/icon-gun1.png",
            name: "QUASAR"
        },
        {
            image: "/gun2.png",
            thumbnail: "/icon-gun2.png",
            name: "BEAREAS"
        },
        {
            image: "/gun3.png",
            thumbnail: "/icon-gun3.png",
            name: "SOLO"
        },
        {
            image: "/gun4.png",
            thumbnail: "/icon-gun4.png",
            name: "FALCON"
        },
        {
            image: "/gun5.png",
            thumbnail: "/icon-gun5.png",
            name: "REBELFLAME"
        },
        {
            image: "/gun6.png",
            thumbnail: "/icon-gun6.png",
            name: "SHADOW ASSAULT"
        },
        {
            image: "/gun7.png",
            thumbnail: "/icon-gun7.png",
            name: "DAWN"
        },
        {
            image: "/gun8.png",
            thumbnail: "/icon-gun8.png",
            name: "FLNALE"
        },
        {
            image: "/gun9.png",
            thumbnail: "/icon-gun9.png",
            name: "WILDFIRE"
        },
        {
            image: "/gun10.png",
            thumbnail: "/icon-gun10.png",
            name: "SAWTOOTH"
        },
        {
            image: "/gun11.png",
            thumbnail: "/icon-gun11.png",
            name: "POLARIS"
        },
        {
            image: "/gun12.png",
            thumbnail: "/icon-gun12.png",
            name: "CHAMPION"
        },
        {
            image: "/gun13.png",
            thumbnail: "/icon-gun13.png",
            name: "FREEDOM"
        },
        {
            image: "/gun14.png",
            thumbnail: "/icon-gun14.png",
            name: "CHROMA"
        },
        {
            image: "/gun15.png",
            thumbnail: "/icon-gun15.png",
            name: "INSPECTOR"
        },
        {
            image: "/gun16.png",
            thumbnail: "/icon-gun16.png",
            name: "JUDGE"
        }
    ];

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        centerMode: true,
        focusOnSelect: true,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        pauseOnFocus: true,
        swipe: true,
        beforeChange: (current: number, next: number) => setActiveWeapon(next),
        nextArrow: <CustomArrow direction="right" />,
        prevArrow: <CustomArrow direction="left" />,
        centerPadding: '60px',
        responsive: [
            {
                breakpoint: 1440,
                settings: {
                    slidesToShow: 3,
                    centerPadding: '40px',
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    centerPadding: '30px',
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    centerPadding: '20px',
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    centerPadding: '10px',
                }
            },
            {
                breakpoint: 320,
                settings: {
                    slidesToShow: 1,
                    centerPadding: '0px',
                }
            }
        ]
    };

    return (
        <div className="relative flex h-[700px] w-full justify-center pb-[60px]">
            {/* Background Image */}
            <div className="absolute inset-0 w-full h-full">
                <Image
                    src="/background5.jpg"
                    alt=""
                    fill
                    priority
                    quality={100}
                    className="object-cover"
                />
            </div>

            {/* Content */}
            <div className="relative z-[1] flex h-full w-full max-w-[1200px] flex-col justify-end px-4">
                {/* Header */}
                <div className="mb-4 flex w-full items-end justify-between">
                    <div className="flex flex-col font-extrabold text-[#3D2E40]">
                        <div className="text-[18px] md:text-[22px] leading-none">CÁC VŨ KHÍ</div>
                        <div className="mt-[4px] text-[24px] md:text-[32px] leading-none">
                            {weapons[activeWeapon].name}
                        </div>
                    </div>
                    <button className="inline-flex h-[32px] md:h-[40px] min-w-[100px] md:min-w-[120px] items-center justify-center 
                        rounded bg-primary px-[16px] md:px-[24px] text-[12px] md:text-[14px] font-bold text-white 
                        transition-all duration-300 hover:bg-white hover:text-primary">
                        XEM TẤT CẢ
                    </button>
                </div>

                {/* Weapon Display */}
                <div className="arms_carousel-wrapper__YL1pW relative flex w-full flex-col items-center">
                    <div className="relative h-[350px] w-full max-w-[1000px]">
                        <Image
                            src={weapons[activeWeapon].image}
                            alt={weapons[activeWeapon].name}
                            fill
                            priority
                            quality={100}
                            className="object-contain"
                        />
                    </div>

                    {/* Carousel */}
                    <div className="relative mt-6 w-full overflow-hidden">
                        <div className="mx-auto max-w-[1800px] px-14">
                            <Slider {...settings}>
                                {weapons.map((weapon, index) => (
                                    <div key={index} className="px-8">
                                        <div className="flex flex-col items-center">
                                            <div className={`relative h-[70px] w-[170px] cursor-pointer 
                                                overflow-hidden rounded transition-all duration-300 flex items-center justify-center
                                                ${activeWeapon === index
                                                    ? 'bg-[#D9CCBD] shadow-lg scale-110'
                                                    : 'bg-[#DCD8D5]'}`}>
                                                <div className="relative h-[50px] w-[140px]">
                                                    <Image
                                                        src={weapon.thumbnail}
                                                        alt={weapon.name}
                                                        fill
                                                        className="object-contain"
                                                        sizes="140px"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}