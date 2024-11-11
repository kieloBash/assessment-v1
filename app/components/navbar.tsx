'use client'
import React from 'react'

import Image from 'next/image'

import logo from "@/public/fun88/assets/header/fun88.svg"
import MenuIcon from "@/public/fun88/assets/header/menu.svg";
import UserIcon from "@/public/fun88/assets/header/user.svg";
import WalletIcon from "@/public/fun88/assets/header/wallet.svg";
import DividerIcon from "@/public/fun88/assets/header/divider.svg";

const Navbar = () => {
    return (
        <header className='w-full h-12 border-b shadow-sm absolute top-0 left-0 z-[10] bg-primary-foreground'>
            <div className="w-full h-full flex justify-between items-center px-2">
                <div className="flex gap-2 items-center justify-center">
                    <button type='button'>
                        <Image src={MenuIcon} alt='Menu' width={15} height={40} />
                    </button>
                    <Image src={logo} alt='Fun88' width={90} height={40} />
                </div>
                <div className="flex gap-1.5 justify-center items-center">
                    <button type='button' className="flex gap-1.5 justify-center items-center">
                        <Image src={WalletIcon} alt='DividerF' width={16} height={10} />
                        <h4 className="text-primary font-bold">$1990.6</h4>
                    </button>
                    <div className="">
                        <Image src={DividerIcon} alt='DividerF' width={2} height={10} />
                    </div>
                    <button type='button'>
                        <Image src={UserIcon} alt='Menu' width={22} height={40} />
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Navbar