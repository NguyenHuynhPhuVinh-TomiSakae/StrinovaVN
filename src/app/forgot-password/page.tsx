'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function ForgotPasswordPage() {
    const [username, setUsername] = useState('')

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        console.log('Gửi yêu cầu khôi phục với tài khoản:', username)
    }

    return (
        <div className="h-screen w-full">
            <main className="relative flex h-full w-full items-center justify-center md:block">
                {/* Ảnh nền */}
                <div className="absolute inset-0">
                    <Image
                        src="/background-login.jpg"
                        alt="background"
                        fill
                        className="object-cover object-top"
                        priority
                    />
                </div>

                {/* Form quên mật khẩu */}
                <div className="relative w-full md:absolute md:right-[128px] md:top-1/2 md:-translate-y-1/2 md:w-[400px] rounded-[5px] bg-white px-[15px] md:px-[30px] mx-[15px] md:mx-0 max-w-[400px] my-4 md:my-0">
                    <span className="mb-[20px] md:mb-[30px] mt-[20px] md:mt-[30px] block truncate text-center text-[24px] md:text-[32px] font-bold">
                        KHÔI PHỤC MẬT KHẨU
                    </span>

                    {/* Steps indicator */}
                    <div className="mb-6 flex items-center justify-center gap-4">
                        <div className="relative h-[40px] w-[40px]">
                            <Image
                                src="/step-orange.png"
                                alt=""
                                fill
                                className="object-contain"
                            />
                            <span className="absolute left-1/2 top-1/2 flex h-full w-full -translate-x-1/2 -translate-y-1/2 items-center justify-center text-[18px] font-bold text-white">
                                1
                            </span>
                        </div>
                        <Image
                            src="/step-arrow-orange.png"
                            alt=""
                            width={35}
                            height={10}
                        />
                        <div className="relative h-[40px] w-[40px]">
                            <Image
                                src="/step-gray.png"
                                alt=""
                                fill
                                className="object-contain"
                            />
                            <span className="absolute left-1/2 top-1/2 flex h-full w-full -translate-x-1/2 -translate-y-1/2 items-center justify-center text-[18px] font-bold text-white">
                                2
                            </span>
                        </div>
                        <Image
                            src="/step-arrow-gray.png"
                            alt=""
                            width={35}
                            height={10}
                        />
                        <div className="relative h-[40px] w-[40px]">
                            <Image
                                src="/step-gray.png"
                                alt=""
                                fill
                                className="object-contain"
                            />
                            <span className="absolute left-1/2 top-1/2 flex h-full w-full -translate-x-1/2 -translate-y-1/2 items-center justify-center text-[18px] font-bold text-white">
                                3
                            </span>
                        </div>
                    </div>

                    {/* Email icon */}
                    <div className="relative mx-auto mb-6 h-[60px] w-[85px]">
                        <Image
                            src="/email-icon.png"
                            alt="Email icon"
                            fill
                            className="object-contain"
                        />
                    </div>

                    {/* Instructions */}
                    <span className="mb-4 block text-base text-[#222222] text-center">
                        Nhập tài khoản để khôi phục mật khẩu của bạn
                    </span>

                    {/* Form */}
                    <form onSubmit={handleSubmit}>
                        <div className="flex flex-col mb-8">
                            <input
                                type="text"
                                placeholder="Vui lòng nhập tài khoản"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className="h-12 w-full rounded-[5px] border border-[#606060] bg-[#FFFFFF] px-4 text-base text-[#676767]"
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full mb-6 flex items-center justify-center px-4 py-3 border cursor-pointer text-white hover:text-primary border-primary bg-primary hover:bg-white rounded text-xl font-bold transition-all duration-300"
                        >
                            TIẾP THEO
                        </button>
                    </form>
                </div>
            </main>
        </div>
    )
}