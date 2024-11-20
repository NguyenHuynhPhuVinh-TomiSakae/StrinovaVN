'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { useState } from 'react';

const Navigation = () => {
    const router = useRouter();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const menuItems = [
        { href: '/news', label: 'TIN TỨC' },
        { href: '/worldview', label: 'THẾ GIỚI' },
        { href: '/character', label: 'NHÂN VẬT' },
        { href: '/maps', label: 'BẢN ĐỒ' },
        { href: '/weapon', label: 'VŨ KHÍ' },
    ];

    return (
        <header
            className="fixed top-0 z-[1000] flex h-[60px] w-full items-center justify-between bg-[#1A1B20] px-4 md:px-[25px] md:pl-[200px] transition-all duration-300"
            style={{ cursor: 'pointer' }}
        >
            {/* Logo */}
            <div
                onClick={() => window.open('https://www.strinova.com/', '_blank')}
                className="md:absolute md:left-[25px] md:top-1/2 md:-translate-y-1/2 cursor-pointer"
            >
                <div className="relative h-[28px] w-[130px]">
                    <Image
                        src="/nav-logo.png"
                        alt="logo"
                        fill
                        className="track-image object-contain"
                        priority
                    />
                </div>
                <div className="absolute right-[-30px] top-1/2 h-[16px] w-[1px] -translate-y-1/2 bg-[rgba(255,255,255,.3)]" />
            </div>

            {/* Hamburger Menu Button */}
            <div className="md:hidden" onClick={(e) => {
                e.stopPropagation();
                setIsMobileMenuOpen(!isMobileMenuOpen);
            }}>
                <div className="space-y-2 cursor-pointer">
                    <span className={`block w-8 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2.5' : ''}`}></span>
                    <span className={`block w-8 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
                    <span className={`block w-8 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></span>
                </div>
            </div>

            {/* Menu Items */}
            <div className="hidden md:flex items-center space-x-4">
                {menuItems.map((item) => (
                    <div key={item.href} className="ant-space-item">
                        <div className="relative">
                            <div
                                onClick={() => router.push(item.href)}
                                className="block h-[30px] cursor-pointer rounded-md px-[15px] text-[14px] md:text-[10px] lg:text-[12px] xl:text-[14px] font-medium leading-[30px] text-[#d3d3d3] hover:text-white active:text-white active:opacity-100"
                            >
                                {item.label}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div
                    className="fixed top-[60px] right-0 h-[calc(100vh-60px)] w-[280px] bg-[#1A1B20] md:hidden transform transition-transform duration-300 ease-in-out"
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className="flex flex-col h-full">
                        <div className="flex-1">
                            {menuItems.map((item) => (
                                <div
                                    key={item.href}
                                    onClick={() => {
                                        router.push(item.href);
                                        setIsMobileMenuOpen(false);
                                    }}
                                    className="px-6 py-4 border-b border-gray-700 text-[#d3d3d3] hover:text-white"
                                >
                                    {item.label}
                                </div>
                            ))}
                        </div>

                        {/* Social Icons trong mobile menu */}
                        <div className="px-6 py-4 border-b border-gray-700">
                            <div className="flex justify-center space-x-6">
                                <a className="tracking-social-facebook" target="_blank" href="https://www.facebook.com/Strinova">
                                    <Image
                                        src="/facebook.png"
                                        width={24}
                                        height={24}
                                        className="track-image opacity-60 hover:opacity-100"
                                        alt="Facebook icon"
                                    />
                                </a>
                                <a className="tracking-social-twitter" target="_blank" href="https://x.com/Strinova_EN">
                                    <Image
                                        src="/twitter.png"
                                        width={24}
                                        height={24}
                                        className="track-image opacity-60 hover:opacity-100"
                                        alt="Twitter icon"
                                    />
                                </a>
                                <a className="tracking-social-youtube" target="_blank" href="https://www.youtube.com/@Strinova_EN">
                                    <Image
                                        src="/youtube.png"
                                        width={24}
                                        height={24}
                                        className="track-image opacity-60 hover:opacity-100"
                                        alt="YouTube icon"
                                    />
                                </a>
                                <a className="tracking-social-discord" target="_blank" href="https://discord.com/invite/strinova">
                                    <Image
                                        src="/discord.png"
                                        width={24}
                                        height={24}
                                        className="track-image opacity-60 hover:opacity-100"
                                        alt="Discord icon"
                                    />
                                </a>
                            </div>
                        </div>

                        {/* Language Selector trong mobile menu */}
                        <div className="px-6 py-4 border-b border-gray-700">
                            <div className="flex items-center text-[#ECE2DA]">
                                <div className="relative mr-2 h-[18px] w-[18px]">
                                    <Image
                                        src="/earth.png"
                                        alt="icon"
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                                Tiếng Việt
                            </div>
                        </div>

                        {/* Login Button trong mobile menu */}
                        <div className="px-6 py-4">
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    router.push('/login');
                                    setIsMobileMenuOpen(false);
                                }}
                                className="w-full px-4 py-3 text-[14px] text-white bg-primary rounded font-bold"
                            >
                                ĐĂNG NHẬP
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Right Section */}
            <div className="hidden md:flex items-center space-x-4">
                {/* Language Selector - without dropdown arrow */}
                <div className="ant-dropdown-trigger cursor-pointer rounded text-[#ECE2DA] flex items-center">
                    <div className="flex items-center text-[14px] md:text-[10px] lg:text-[12px] xl:text-[14px]">
                        <div className="relative mr-2 h-[18px] w-[18px]">
                            <Image
                                src="/earth.png"
                                alt="icon"
                                fill
                                className="object-contain"
                            />
                        </div>
                        Tiếng Việt
                    </div>
                </div>

                {/* Login Button */}
                <div className="cursor-pointer">
                    <button
                        onClick={() => router.push('/login')}
                        className="px-[25px] py-[10px] text-[14px] md:text-[10px] lg:text-[12px] xl:text-[14px] cursor-pointer text-white hover:text-primary border-primary bg-primary hover:bg-white rounded font-bold transition-all duration-300"
                    >
                        ĐĂNG NHẬP
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Navigation;