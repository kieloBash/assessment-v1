'use client'
import React from 'react'

import { useNavigationContexts } from '../contexts/NavigationsContext'

import { Dices, LoaderPinwheelIcon, Star, UserPlus2Icon, WalletCardsIcon } from 'lucide-react'

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { NavigationTypes } from '../types/global';
import ActiveBorderIcon from "@/public/fun88/assets/footer/active-border.svg"
import Image from 'next/image';

const FooterNavigations = () => {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const { selected: active, setSelected: setActive } = useNavigationContexts()
    const BUTTONS: { icon: any, label: NavigationTypes }[] = [
        {
            icon: LoaderPinwheelIcon,
            label: "sports"
        },
        {
            icon: Star,
            label: "favorites"
        },
        {
            icon: UserPlus2Icon,
            label: "invite"
        },
        {
            icon: Dices,
            label: "casino live"
        },
        {
            icon: WalletCardsIcon,
            label: "cashier"
        },
    ]


    function handleChangeTabFilter(tab: NavigationTypes) {
        const currentParams = new URLSearchParams(Array.from(searchParams.entries()));
        currentParams.set("tab", tab);

        router.push(`${pathname}?${currentParams.toString()}`);
        setActive(tab)
    }

    return (
        <>
            {BUTTONS.map((btn) => {
                const activeBtn = active === btn.label;

                return (
                    <button onClick={() => handleChangeTabFilter(btn.label)} key={btn.label} type='button' className={`relative gap-0.5 flex flex-col justify-center items-center ${activeBtn && "text-primary"}`}>
                        {activeBtn && (
                            <Image src={ActiveBorderIcon} className='absolute' alt='border' width={80} height={80} />
                        )}
                        <btn.icon className='size-7' />
                        <span className={`uppercase text-xs ${activeBtn && "text-primary font-medium"}`}>{btn.label}</span>
                    </button>
                )
            })}
        </>
    )
}

export default FooterNavigations