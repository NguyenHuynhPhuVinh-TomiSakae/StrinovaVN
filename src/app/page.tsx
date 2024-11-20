'use client';

import WelcomeSection from '@/components/WelcomeSection';
import StringificationSection from '@/components/StringificationSection';
import FutureSaviorSection from '@/components/FutureSaviorSection';
import SuperstringsSection from '@/components/SuperstringsSection';
import WeaponsSection from '@/components/WeaponsSection';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex flex-col">
      {/* Hero Section với video */}
      <div className="relative h-[550px] max-h-[900px] w-full">
        {/* Video nền */}
        <video
          src="/strinova-info.mp4"
          className="absolute h-full w-full object-cover"
          autoPlay
          loop
          muted
        />

        {/* Social media icons bên phải - ẩn trên mobile */}
        <div className="hidden md:flex absolute right-[20px] md:right-[38px] top-[calc(50%+39px)] -translate-y-1/2 flex-col gap-y-[16px] md:gap-y-[28px]">
          <a className="tracking-social-facebook" target="_blank" href="https://www.facebook.com/Strinova">
            <Image
              src="/facebook.png"
              width={24}
              height={24}
              className="track-image cursor-pointer opacity-60 hover:opacity-100 md:w-[30px] md:h-[30px]"
              alt="Facebook icon"
            />
          </a>
          <a className="tracking-social-twitter" target="_blank" href="https://x.com/Strinova_EN">
            <Image
              src="/twitter.png"
              width={24}
              height={24}
              className="track-image cursor-pointer opacity-60 hover:opacity-100 md:w-[30px] md:h-[30px]"
              alt="Twitter icon"
            />
          </a>
          <a className="tracking-social-youtube" target="_blank" href="https://www.youtube.com/@Strinova_EN">
            <Image
              src="/youtube.png"
              width={24}
              height={24}
              className="track-image cursor-pointer opacity-60 hover:opacity-100 md:w-[30px] md:h-[30px]"
              alt="YouTube icon"
            />
          </a>
          <a className="tracking-social-discord" target="_blank" href="https://discord.com/invite/strinova">
            <Image
              src="/discord.png"
              width={24}
              height={24}
              className="track-image cursor-pointer opacity-60 hover:opacity-100 md:w-[30px] md:h-[30px]"
              alt="Discord icon"
            />
          </a>
        </div>

        {/* Nội dung chính ở giữa */}
        <div className="absolute bottom-[120px] md:bottom-[120px] left-1/2 flex max-w-max -translate-x-1/2 flex-col items-center">
          {/* Logo - đã tăng kích thước cho mobile */}
          <div className="relative h-[80px] w-[260px] md:h-[70px] md:w-[240px]">
            <Image
              src="/logo.png"
              fill
              alt="Logo"
              className="object-contain"
            />
          </div>

          {/* Subtitle - đã bỏ shadow và giữ nguyên font size lớn */}
          <div className="px-4 md:mt-3 text-center text-[10px] md:text-[14px] leading-snug md:leading-none text-white">
            GAME BẮN SÚNG ANIME THẾ HỆ MỚI
          </div>

          {/* Download button - đã tăng kích thước */}
          <button
            onClick={() => window.open('https://www.strinova.com/reservation?lang=en-US', '_blank')}
            className="mt-6 min-w-[180px] md:min-w-[160px] rounded bg-primary px-[24px] md:px-[24px] py-[16px] md:py-[16px] text-[14px] md:text-[14px] font-bold leading-none text-white transition-all duration-300 hover:bg-white hover:text-primary"
          >
            TẢI NGAY
          </button>

          {/* Platform icon - đã tăng kích thước */}
          <div className="mt-[-8px] md:mt-[-12px] flex items-center">
            <div className="flex items-center">
              <Image
                src="/steam.png"
                width={128}
                height={128}
                quality={100}
                priority
                onClick={() => window.open('https://store.steampowered.com/app/1282270/Strinova/?utm_source=officalweb&utm_campaign=newweb', '_blank')}
                className="cursor-pointer w-[64px] h-[64px] md:w-[64px] md:h-[64px] object-contain"
                alt="Steam icon"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Welcome Section */}
      <WelcomeSection />

      {/* Stringification Section */}
      <StringificationSection />

      {/* Future Savior Section */}
      <FutureSaviorSection />

      {/* Superstrings Section */}
      <SuperstringsSection />

      {/* Weapons Section */}
      <WeaponsSection />
    </main>
  );
}