/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { useState } from 'react';

export default function FutureSaviorSection() {
    const [, setSwiper] = useState<any>(null);

    const items = [
        {
            image: "/icon1.png",
            title: "ĐỘI SIÊU DÂY",
            description: "Tiên phong sắc bén, người bảo vệ mạnh mẽ, người kiểm soát khó đoán - tập hợp những đồng đội đáng tin cậy và chiến đấu cùng họ."
        },
        {
            image: "/icon2.png",
            title: "CHIẾN ĐẤU SIÊU DÂY",
            description: "Siêu dây hóa cho phép bạn thay đổi không gian chiều. Tận dụng cơ chế này trong khi nạp đạn, né tránh và di chuyển để tạo ra vô số khả năng."
        },
        {
            image: "/icon3.png",
            title: "CHIẾN TRƯỜNG NĂNG ĐỘNG",
            description: "Các chiến trường của Strinova rất đa dạng. Tận hưởng làm việc nhóm trong các chế độ từ Phá hủy, Xe đẩy, Đấu trường đội và nhiều hơn nữa."
        }
    ];

    return (
        <div className="relative min-h-[500px] w-full overflow-hidden bg-black text-center px-4 pb-8 md:pb-0 md:h-[700px]">
            <div
                className="absolute inset-0 w-full h-full"
                style={{
                    backgroundImage: "url('/background3.jpg')",
                    backgroundSize: '100% 100%',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                }}
            />

            <div className="relative z-10">  {/* Wrapper để nội dung nổi lên trên background */}
                <div className="m-auto pt-[40px] md:pt-[80px] text-[26px] md:text-[42px] font-extrabold leading-[1.2] text-[#3D2E40]">
                    NGƯỜI KIẾN TẠO TƯƠNG LAI
                </div>

                <div className="m-auto mt-[25px] md:mt-[35px] max-w-[1000px] whitespace-break-spaces text-[14px] md:text-[18px] font-medium leading-6 text-[#8F9090]">
                    Strinova là game bắn súng chiến thuật phong cách anime. Sau thảm họa lớn xảy ra với Trái Đất cũ, loài người đã di cư đến không gian đa chiều có tên Strinova, nơi các Siêu dây có thể chuyển đổi giữa dạng 2D và 3D tham gia vào những trận chiến bất tận để đạt được tương lai họ mong muốn.
                </div>

                <div className="mt-[25px] md:mt-[35px] pb-[30px] md:pb-0">
                    {/* Desktop view */}
                    <div className="hidden md:flex flex-row items-start justify-center gap-[120px]">
                        {items.map((item, index) => (
                            <div key={index} className="w-full max-w-[280px] text-center">
                                <div className="relative m-auto h-[80px] w-[80px] md:h-[110px] md:w-[110px]">
                                    <Image src={item.image} alt="" fill className="object-contain" />
                                </div>
                                <div className="mt-[14px] md:mt-[18px] text-[16px] md:text-[20px] font-semibold text-[#3D2E40]">
                                    {item.title}
                                </div>
                                <div className="mt-[10px] md:mt-[14px] line-clamp-6 w-full text-ellipsis text-[14px] md:text-[18px] font-medium leading-5 md:leading-6 text-[#8F9090]">
                                    {item.description}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Mobile view với Swiper */}
                    <div className="md:hidden relative">
                        <Swiper
                            onSwiper={setSwiper}
                            modules={[Pagination]}
                            pagination={{
                                clickable: true,
                            }}
                            loop={true}
                            className="w-full"
                            style={{
                                '--swiper-pagination-bottom': '0px',
                                '--swiper-pagination-bullet-inactive-color': '#D9D9D9',
                                '--swiper-pagination-color': '#FF6B2F',
                                '--swiper-pagination-bullet-inactive-opacity': '1',
                                '--swiper-pagination-bullet-size': '10px',
                                '--swiper-pagination-bullet-horizontal-gap': '6px',
                                paddingBottom: '40px'
                            } as React.CSSProperties}
                        >
                            {items.map((item, index) => (
                                <SwiperSlide key={index}>
                                    <div className="w-full max-w-[280px] mx-auto text-center pb-8">
                                        <div className="relative m-auto h-[80px] w-[80px]">
                                            <Image src={item.image} alt="" fill className="object-contain" />
                                        </div>
                                        <div className="mt-[14px] text-[16px] font-semibold text-[#3D2E40]">
                                            {item.title}
                                        </div>
                                        <div className="mt-[10px] line-clamp-6 w-full text-ellipsis text-[14px] font-medium leading-5 text-[#8F9090]">
                                            {item.description}
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    );
}