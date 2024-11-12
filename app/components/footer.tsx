'use client'
import { Star } from 'lucide-react'
import React from 'react'
import { useNavigationContexts } from '../contexts/NavigationsContext'

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { NavigationTypes } from '../types/global';


const Footer = () => {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const { selected: active, setSelected: setActive } = useNavigationContexts()
    const BUTTONS: { icon: any, label: NavigationTypes }[] = [
        {
            icon: Star,
            label: "sports"
        },
        {
            icon: Star,
            label: "favorites"
        },
        {
            icon: Star,
            label: "invite"
        },
        {
            icon: Star,
            label: "casino live"
        },
        {
            icon: Star,
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
        <div className="z-[10] text-muted-foreground w-full h-16 grid grid-cols-5 gap-2 px-2 absolute bottom-0 left-0 bg-primary-foreground">
            {BUTTONS.map((btn) => {
                return (
                    <button onClick={() => handleChangeTabFilter(btn.label)} key={btn.label} type='button' className="gap-1 flex flex-col justify-center items-center">
                        <btn.icon className='size-6' />
                        <span className="uppercase text-xs">{btn.label}</span>
                    </button>
                )
            })}
        </div>
    )
}

export default Footer