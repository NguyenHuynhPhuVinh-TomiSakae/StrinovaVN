'use client';

import Image from 'next/image';

const Footer = () => {
    const socialLinks = [
        {
            href: 'https://www.facebook.com/Strinova',
            icon: '/facebook.png'
        },
        {
            href: 'https://x.com/Strinova_EN',
            icon: '/twitter.png'
        },
        {
            href: 'https://www.youtube.com/@Strinova_EN',
            icon: '/youtube.png'
        },
        {
            href: 'https://discord.com/invite/strinova',
            icon: '/discord.png'
        }
    ];

    return (
        <footer className="relative z-10 flex w-full shrink-0 flex-col border-t-[5px] border-primary bg-[#1f1c1f]">
            {/* Social Media Icons */}
            <div className="flex h-[60px] items-center justify-center gap-x-[35px] border-b border-[#2A2D2D]">
                {socialLinks.map((link) => (
                    <a key={link.href} target="_blank" href={link.href} rel="noopener noreferrer">
                        <Image
                            src={link.icon}
                            width={24}
                            height={24}
                            alt="Social media icon"
                            className="opacity-60 hover:opacity-100"
                        />
                    </a>
                ))}
            </div>

            {/* Footer Content */}
            <div className="flex flex-col items-center justify-center py-8 text-white">
                <div className="text-center text-sm text-gray-400">
                    <p>© {new Date().getFullYear()} TomiSakae - Anime Card Games.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;