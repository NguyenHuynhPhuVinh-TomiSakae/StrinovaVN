'use client';

import Image from 'next/image';

export default function WelcomeSection() {
    return (
        <div className="relative h-[500px] md:h-[600px] w-full overflow-visible bg-[#FBF6F2] text-center">
            {/* Background image */}
            <div className="absolute left-0 top-0 h-full w-full">
                <div className="relative h-[600px] md:h-full w-full">
                    <Image
                        src="/background1.jpg"
                        alt=""
                        fill
                        className="track-image object-cover object-center"
                    />
                </div>
            </div>

            {/* Content wrapper */}
            <div className="relative z-[1] flex h-full flex-col justify-between px-4 md:px-6">
                {/* Top section */}
                <div className="pt-[20px] md:pt-[40px] space-y-2 md:space-y-4">
                    <div className="text-[24px] md:text-[32px] font-extrabold leading-[28px] md:leading-[36px] text-[#3D2E40]">
                        CHÀO MỪNG ĐẾN VỚI STRINOVA
                    </div>
                    <div className="text-[18px] md:text-[22px] leading-[22px] md:leading-[26px] font-semibold text-[#3D2E40]">
                        CHIẾN TRƯỜNG SIÊU DÂY CHO HÀNG TRIỆU
                        NGƯỜI CHƠI TRÊN TOÀN THẾ GIỚI
                    </div>
                </div>

                {/* Middle description */}
                <div className="flex flex-1 items-center justify-center">
                    <div className="w-full md:w-[800px] text-[16px] md:text-[18px] leading-[22px] md:leading-[26px] text-[#3D2E40]">
                        {/* Sử dụng điều kiện để hiển thị văn bản khác nhau trên mobile/desktop */}
                        <div className="block md:hidden">
                            Strinova là game bắn súng chiến thuật PvP 5v5 trong bối cảnh khoa học viễn tưởng.
                            Kết hợp kỹ năng bắn súng và công nghệ siêu dây độc đáo qua nhiều chế độ chơi hấp dẫn.
                            <br /><br />
                            Đây là wiki không chính thức của Strinova, cung cấp thông tin về nhân vật, vũ khí,
                            bản đồ và cập nhật mới nhất cho cộng đồng game thủ Việt Nam.
                        </div>
                        <div className="hidden md:block">
                            Strinova là tựa game bắn súng chiến thuật PvP đột phá, với những trận chiến
                            căng thẳng 5v5 trong bối cảnh vũ trụ khoa học viễn tưởng. Kết hợp giữa kỹ năng
                            bắn súng điêu luyện và công nghệ siêu dây độc đáo, người chơi sẽ trải nghiệm
                            những trận đấu gay cấn qua nhiều chế độ chơi hấp dẫn như Đấu Đội,
                            Chiếm Cứ Điểm và Battle Royale.
                            <br /><br />
                            Trang web này là trang wiki không chính thức của game Strinova, được thiết kế dựa trên giao diện từ trang chủ chính thức. Chúng tôi cung cấp thông tin chi tiết về các nhân vật, vũ khí, bản đồ và cập nhật mới nhất của trò chơi. Mục tiêu của chúng tôi là tạo ra một nguồn tài nguyên hữu ích cho cộng đồng người chơi Strinova tại Việt Nam, giúp họ tìm hiểu sâu hơn về thế giới game và cải thiện kỹ năng chơi của mình.
                        </div>
                    </div>
                </div>

                {/* Download button */}
                <div
                    onClick={() => window.open('https://www.strinova.com/reservation?lang=en-US', '_blank')}
                    className="md:pb-[40px] w-fit mx-auto cursor-pointer text-[18px] md:text-[20px] font-semibold leading-[20px] md:leading-[22px] text-[#3D2E40] transition-all duration-300 hover:text-primary"
                >
                    TẢI GAME NGAY
                    <div className="relative m-auto ml-[6px] inline-block h-[20px] w-[24px]">
                        <Image src="/download.png" alt="" fill />
                    </div>
                    <div className="mt-[4px] h-[2px] w-full bg-primary"></div>
                </div>
            </div>
        </div>
    );
}