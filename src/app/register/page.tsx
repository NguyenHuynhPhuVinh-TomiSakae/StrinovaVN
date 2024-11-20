'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline'

export default function RegisterPage() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)

    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault()
        console.log('Đăng ký với:', { username, password, confirmPassword })
    }

    return (
        <div className="h-screen w-full">
            <main className="relative h-full w-full">
                {/* Ảnh nền - full màn hình và chỉ lấy phần trên */}
                <div className="absolute inset-0">
                    <Image
                        src="/background-login.jpg"
                        alt="background"
                        fill
                        className="object-cover object-top"
                        priority
                    />
                </div>

                {/* Form đăng ký - đặt bên phải và căn giữa theo chiều dọc */}
                <div className="absolute right-[128px] top-1/2 -translate-y-1/2 w-[400px] rounded-[5px] bg-white px-[30px]">
                    <span className="mb-[30px] mt-[30px] block truncate text-center text-[32px] font-bold">
                        ĐĂNG KÝ
                    </span>

                    <form onSubmit={handleRegister}>
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

                        <div className="flex flex-col mb-4">
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

                        <div className="flex flex-col mb-6">
                            <div className="relative">
                                <input
                                    type={showConfirmPassword ? "text" : "password"}
                                    placeholder="Vui lòng nhập lại mật khẩu"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    className="h-12 w-full rounded-[5px] border border-[#606060] bg-[#FFFFFF] px-4 text-base text-[#676767]"
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                                >
                                    {showConfirmPassword ? (
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
                            ĐĂNG KÝ
                        </button>
                    </form>

                    <div className="mb-8 flex items-center justify-center text-[14px]">
                        <span className="text-[#222222]">Đã có tài khoản? </span>
                        <Link href="/login" className="cursor-pointer text-primary underline ml-2">
                            Đăng nhập ngay
                        </Link>
                    </div>

                    <div className="relative text-center mb-6">
                        <span className="bg-white px-4 text-[#222222] relative z-10 text-sm">
                            ĐĂNG KÝ BẰNG TÀI KHOẢN KHÁC
                        </span>
                        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-[#e8e8e8] -z-0" />
                    </div>

                    <div className="mb-[30px] flex items-center justify-center">
                        <button
                            className="relative h-[40px] w-[40px] cursor-pointer"
                            onClick={() => console.log('Đăng ký với Google')}
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