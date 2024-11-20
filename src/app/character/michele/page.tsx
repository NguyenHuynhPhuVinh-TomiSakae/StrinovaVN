'use client'
import Image from 'next/image';
import { useState } from 'react';

export default function MichelePage() {
    const [currentSkill, setCurrentSkill] = useState(0);

    const skills = [
        {
            video: "/char1-skill1.mp4",
            icon: "char1-skill1.png",
            name: "Kitty Tracer",
            description: "Đòn tấn công trực tiếp vào Michele sẽ tự động hiển thị vị trí của kẻ tấn công."
        },
        {
            video: "/char1-skill2.mp4",
            icon: "char1-skill2.png",
            name: "Cyber Shield",
            description: "Tạo ra một rào chắn kỹ thuật số hấp thụ sát thương đến."
        },
        {
            video: "/char1-skill3.mp4",
            icon: "char1-skill3.png",
            name: "Game Over",
            description: "Kỹ năng tối thượng tăng cường khả năng phòng thủ cho tất cả thành viên trong đội."
        }
    ];

    return (
        <main className="relative min-h-screen w-full shrink-0" id="main">
            {/* Phần Anh Hùng */}
            <div
                className="relative mt-[40px] h-[680px] w-full bg-[length:100%_100%] bg-left-top bg-no-repeat text-left"
                style={{
                    backgroundImage: "url(/background-char-info.jpg)"
                }}
            >
                {/* Thông Tin Nhân Vật */}
                <div className="pl-[140px] pt-[130px]">
                    <div className="text-[76px] font-semibold leading-[1] text-[#312C29]">
                        MICHELE
                    </div>
                    <div className="mt-[24px] h-[2px] w-[130px] bg-primary"></div>

                    {/* Lớp Nhân Vật */}
                    <div className="mt-[28px] text-[34px] font-semibold text-[#312C29]">
                        <div className="relative inline-block h-[30px] w-[30px] overflow-hidden align-middle">
                            <div
                                style={{ filter: "drop-shadow(1.875rem 0px 0px #386CF4)" }}
                                className="relative left-[-30px] h-[30px] w-[30px]"
                            >
                                <Image
                                    alt="Biểu tượng Sentinel"
                                    className="absolute"
                                    src="/sentinel.svg"
                                    fill
                                    sizes="30px"
                                />
                            </div>
                        </div>
                        <div className="ml-[15px] inline-block w-[280px] overflow-hidden text-ellipsis align-middle leading-[1]">
                            SENITINEL
                        </div>
                    </div>

                    {/* Mô Tả Nhân Vật */}
                    <div className="w-[480px] text-ellipsis text-[22px] font-normal leading-[30px] text-[#67615D]">
                        Một điều tra viên tập sự và một game thủ chuyên nghiệp.
                    </div>

                    {/* Logo Nhân Vật */}
                    <div className="ml-[-24px] mt-[90px] h-[150px] w-[380px]">
                        <div className="relative h-[150px] w-[380px]">
                            <Image
                                alt="Vũ khí nhân vật"
                                className="absolute"
                                src="/gun15.png"
                                fill
                                sizes="380px"
                                priority
                            />
                        </div>
                    </div>
                </div>

                {/* Hình Ảnh Nhân Vật */}
                <div
                    className="absolute right-[300px] top-0 h-[680px] w-[540px] bg-[length:100%_100%] bg-center"
                    style={{
                        backgroundImage: "url(/char-info-bg.png)"
                    }}
                ></div>
                <div
                    className="absolute right-0 top-0 h-[680px] w-[920px] bg-[length:100%_100%] bg-center"
                    style={{
                        backgroundImage: "url(/char1-info.png)"
                    }}
                ></div>
            </div>

            {/* Phần Kỹ Năng */}
            <div className="relative h-[600px] w-full bg-[#322d2e]">
                {/* Phần Trang Trí */}
                <div className="absolute left-[70px] top-[238px] h-[5px] w-[5px] bg-primary"></div>
                <div className="absolute right-[70px] top-[102px] h-[3px] w-[28px] bg-primary"></div>
                <div className="absolute left-[102px] top-[649px] h-[3px] w-[28px] bg-primary"></div>

                {/* Xem Trước Video */}
                <div className="absolute left-[140px] top-[80px] h-[400px] w-[680px] bg-black">
                    <video
                        key={skills[currentSkill].video}
                        src={skills[currentSkill].video}
                        className="h-full w-full"
                        autoPlay
                        loop
                        controls
                    ></video>
                </div>

                {/* Thông Tin Kỹ Năng */}
                <div className="absolute left-[860px] top-[100px] w-[560px] text-center">
                    <div className="text-[56px] font-semibold leading-[1] text-[#FFFFFF]">
                        KỸ NĂNG
                    </div>

                    {/* Biểu Tượng Kỹ Năng */}
                    <div className="mt-[48px] flex items-center justify-center gap-[48px]">
                        {skills.map((skill, index) => (
                            <div key={index} onClick={() => setCurrentSkill(index)}>
                                <div className={`relative h-[84px] w-[84px] cursor-pointer transition-all hover:opacity-[1] ${index !== currentSkill ? 'opacity-[0.4]' : ''}`}>
                                    <Image
                                        alt={`Kỹ năng ${index + 1}`}
                                        className="absolute"
                                        src={`/${skill.icon}`}
                                        fill
                                        sizes="84px"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Mô Tả Kỹ Năng */}
                    <div className="mt-[70px] text-[28px] font-semibold leading-[1] text-[#FFFFFF]">
                        {skills[currentSkill].name}
                    </div>
                    <div className="m-auto mt-[24px] h-[2px] w-[70px] bg-[#FFFFFF] opacity-[0.3]"></div>
                    <div className="mt-[24px] px-[70px] text-[20px] font-normal leading-[28px] text-[#BFBFBF]">
                        {skills[currentSkill].description}
                    </div>
                </div>
            </div>
        </main>
    );
}