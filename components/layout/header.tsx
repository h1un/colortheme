'use client'

import React, {useEffect, useState} from 'react'
import Link from 'next/link'
import {ChevronDown, Menu} from 'lucide-react'
import {Collapsible, CollapsibleContent, CollapsibleTrigger} from "@/components/ui/collapsible"
import {Button} from '@/components/ui/button'
import {Sheet, SheetContent, SheetTrigger,} from '@/components/ui/sheet'

interface HeaderProps {
    showDropdownIcons?: boolean;
    isAlwaysOpaque?: boolean;
    backgroundColor?: string;
    foregroundColor?: string;
}

const Header = ({
                    showDropdownIcons = false,
                    isAlwaysOpaque = false,
                    backgroundColor = 'background',
                    foregroundColor = 'foreground',
                }: HeaderProps) => {
    const [isOpen, setIsOpen] = useState(false)
    const [isServicesOpen, setIsServicesOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const headerClasses = `fixed top-0 left-0 right-0 z-50 transition-colors duration-200 ${
        isAlwaysOpaque
            ? `bg-${backgroundColor}`
            : isScrolled
                ? `bg-${backgroundColor} backdrop-blur supports-[backdrop-filter]:bg-${backgroundColor}`
                : 'bg-transparent'
    }`

    return (
        <>
            <header className={headerClasses}>
                <div className="container flex h-16 items-center justify-between max-w-screen-xl mx-auto px-4 w-full">
                    <Link href="/public" className="flex items-center space-x-2 md:w-1/3">
                        <span className="font-bold ${foregroundColor} text-xl">MyLogo</span>
                    </Link>
                    <nav className="hidden md:flex items-center space-x-8 text-lg font-medium justify-center md:w-1/3">
                        <Link href="/public"
                              className={`transition-colors hover:text-${foregroundColor}/80 text-${foregroundColor} relative group`}>
                            About
                            <span
                                className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-${foregroundColor} transition-all group-hover:w-full`}></span>

                        </Link>
                        <div className="relative group">
                            <button
                                className={`transition-colors hover:text-${foregroundColor}/80 text-${foregroundColor}/60 flex items-center relative`}>
                                회사소개
                                {showDropdownIcons && <ChevronDown className="ml-1 h-4 w-4"/>}
                                <span
                                    className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-${foregroundColor} transition-all group-hover:w-full`}></span>
                            </button>
                            <div
                                className="absolute -translate-x-1/2 left-1/2 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out transform group-hover:translate-y-1">
                                <div className="py-1" role="menu" aria-orientation="vertical"
                                     aria-labelledby="options-menu">
                                    <Link href="/services/web"
                                          className={`block px-4 py-3 text-sm hover:text-${foregroundColor}/80 text-${foregroundColor}/60 transition-colors duration-200`}
                                          role="menuitem">인사말 </Link>
                                    <Link href="/services/mobile"
                                          className={`block px-4 py-3 text-sm hover:text-${foregroundColor}/80 text-${foregroundColor}/60 transition-colors duration-200`}
                                          role="menuitem">구성원</Link>
                                    <Link href="/services/consulting"
                                          className={`block px-4 py-3 text-sm hover:text-${foregroundColor}/80 text-${foregroundColor}/60 transition-colors duration-200`}
                                          role="menuitem">연혁</Link>
                                </div>
                            </div>
                        </div>
                        <div className="relative group">
                            <button
                                className={`transition-colors hover:text-${foregroundColor}/80 text-${foregroundColor}/60 flex items-center relative`}>
                                제품소개
                                {showDropdownIcons && <ChevronDown className="ml-1 h-4 w-4"/>}
                                <span
                                    className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-${foregroundColor} transition-all group-hover:w-full`}></span>
                            </button>
                            <div
                                className="absolute -translate-x-1/2 left-1/2 mt-2 w-64 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out transform group-hover:translate-y-1">
                                <div className="py-1" role="menu" aria-orientation="vertical"
                                     aria-labelledby="options-menu">
                                    <Link href="#"
                                          className={`block px-4 py-3 text-sm hover:text-${foregroundColor}/80 text-${foregroundColor}/60 transition-colors duration-200`}
                                          role="menuitem">제품소개1</Link>
                                    <Link href="#"
                                          className={`block px-4 py-3 text-sm hover:text-${foregroundColor}/80 text-${foregroundColor}/60 transition-colors duration-200`}
                                          role="menuitem">제품소개2</Link>
                                    <Link href="#"
                                          className={`block px-4 py-3 text-sm hover:text-${foregroundColor}/80 text-${foregroundColor}/60 transition-colors duration-200`}
                                          role="menuitem">제품소개3</Link>
                                </div>
                            </div>
                        </div>
                        <div className="relative group">
                            <button
                                className={`transition-colors hover:text-${foregroundColor}/80 text-${foregroundColor}/60 flex items-center relative`}>
                                고객지원
                                {showDropdownIcons && <ChevronDown className="ml-1 h-4 w-4"/>}
                                <span
                                    className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-${foregroundColor} transition-all group-hover:w-full`}></span>
                            </button>
                            <div
                                className="absolute -translate-x-1/2 left-1/2 mt-2 w-64 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out transform group-hover:translate-y-1">
                                <div className="py-1" role="menu" aria-orientation="vertical"
                                     aria-labelledby="options-menu">
                                    <Link href="#"
                                          className="block px-4 py-3 text-sm text-${foregroundColor} hover:bg-gray-100 hover:text-gray-900 transition-colors duration-200"
                                          role="menuitem">공지사항</Link>
                                    <Link href="#"
                                          className={`block px-4 py-3 text-sm hover:text-${foregroundColor}/80 text-${foregroundColor}/60 transition-colors duration-200`}
                                          role="menuitem">Q&A</Link>
                                    <Link href="#"
                                          className={`block px-4 py-3 text-sm hover:text-${foregroundColor}/80 text-${foregroundColor}/60 transition-colors duration-200`}
                                          role="menuitem">문의하기</Link>
                                </div>
                            </div>
                        </div>
                    </nav>
                    <div className="flex md:hidden md:w-1/3 justify-end">
                        <Sheet open={isOpen} onOpenChange={setIsOpen}>
                            <SheetTrigger asChild>
                                <Button variant="outline" size="icon">
                                    <Menu className="h-5 w-5"/>
                                    <span className="sr-only">메뉴 열기</span>
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="right">
                                <nav className="flex flex-col space-y-4">
                                    <Link href="/public" className="text-xl font-medium"
                                          onClick={() => setIsOpen(false)}>
                                        홈
                                    </Link>
                                    <Link href="/about" className="text-xl font-medium"
                                          onClick={() => setIsOpen(false)}>
                                        소개
                                    </Link>
                                    <Collapsible
                                        open={isServicesOpen}
                                        onOpenChange={setIsServicesOpen}
                                    >
                                        <CollapsibleTrigger
                                            className="flex items-center justify-between w-full text-xl font-medium">
                                            서비스
                                            {showDropdownIcons && <ChevronDown className="h-5 w-5"/>}
                                        </CollapsibleTrigger>
                                        <CollapsibleContent>
                                            <ul className="pl-4 mt-2 space-y-2">
                                                <li>
                                                    <Link href="/services/web" className="block text-lg"
                                                          onClick={() => setIsOpen(false)}>
                                                        웹 개발
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/services/mobile" className="block text-lg"
                                                          onClick={() => setIsOpen(false)}>
                                                        모바일 앱
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/services/consulting" className="block text-lg"
                                                          onClick={() => setIsOpen(false)}>
                                                        컨설팅
                                                    </Link>
                                                </li>
                                            </ul>
                                        </CollapsibleContent>
                                    </Collapsible>
                                    <Link href="/contact" className="text-xl font-medium"
                                          onClick={() => setIsOpen(false)}>
                                        연락처
                                    </Link>
                                </nav>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </header>
            <div className={isAlwaysOpaque ? 'h-16' : ''}></div>
        </>
    )
}

export default Header

