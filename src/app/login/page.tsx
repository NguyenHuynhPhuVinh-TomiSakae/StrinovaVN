'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline'

export default function LoginPage() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault()
        console.log('Đăng nhập với:', { username, password })
    }

    return (
        <div className="h-screen w-full">
            <main className="relative flex h-full w-full items-center justify-center md:block">
                {/* Ảnh nền - giữ nguyên full màn hình */}
                <div className="absolute inset-0">
                    <Image
                        src="/background-login.jpg"
                        alt="background"
                        fill
                        className="object-cover object-top"
                        priority
                    />
                </div>

                {/* Form đăng nhập - căn giữa cho mobile */}
                <div className="relative w-full md:absolute md:right-[128px] md:top-[128px] md:w-[400px] rounded-[5px] bg-white px-[15px] md:px-[30px] mx-[15px] md:mx-0 max-w-[400px] my-4 md:my-0">
                    <span className="mb-[20px] md:mb-[30px] mt-[20px] md:mt-[30px] block truncate text-center text-[24px] md:text-[32px] font-bold">
                        ĐĂNG NHẬP
                    </span>

                    <form onSubmit={handleLogin}>
                        <div className="flex flex-col mb-4">
                            <input
                                type="text"
                                placeholder="Vui lòng nhập tài khoản"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className="h-12 w-full rounded-[5px] border border-[#606060] bg-[#FFFFFF] px-4 text-base text-[#676767]"
                                required
                            />
                        </div>

                        <div className="flex flex-col mb-6">
                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Vui lòng nhập mật khẩu"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="h-12 w-full rounded-[5px] border border-[#606060] bg-[#FFFFFF] px-4 text-base text-[#676767]"
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                                >
                                    {showPassword ? (
                                        <EyeIcon className="h-5 w-5" />
                                    ) : (
                                        <EyeSlashIcon className="h-5 w-5" />
                                    )}
                                </button>
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="w-full mb-6 flex items-center justify-center px-4 py-3 border cursor-pointer text-white hover:text-primary border-primary bg-primary hover:bg-white rounded text-xl font-bold transition-all duration-300"
                        >
                            ĐĂNG NHẬP
                        </button>
                    </form>

                    <div className="mb-6 md:mb-8 flex flex-col md:flex-row items-center justify-between text-[14px] space-y-4 md:space-y-0">
                        <Link href="/forgot-password" className="cursor-pointer text-primary underline">
                            Quên mật khẩu?
                        </Link>
                        <Link href="/register" className="cursor-pointer text-[#222222]">
                            Đăng ký tài khoản mới
                        </Link>
                    </div>

                    <div className="relative text-center mb-6">
                        <span className="bg-white px-4 text-[#222222] relative z-10 text-sm">
                            ĐĂNG NHẬP BẰNG TÀI KHOẢN KHÁC
                        </span>
                        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-[#e8e8e8] -z-0" />
                    </div>

                    <div className="mb-[30px] flex items-center justify-center">
                        <button
                            className="relative h-[40px] w-[40px] cursor-pointer"
                            onClick={() => console.log('Đăng nhập với Google')}
                        >
                            <div className="relative h-full w-full">
                                <Image
                                    src="/gg.png"
                                    alt="Google"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </button>
                    </div>
                </div>
            </main>
        </div>
    )
}