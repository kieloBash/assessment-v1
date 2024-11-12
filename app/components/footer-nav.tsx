'use client'
import React from 'react'

import { useNavigationContexts } from '../contexts/NavigationsContext'

import { Star } from 'lucide-react'

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { NavigationTypes } from '../types/global';

const FooterNavigations = () => {
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
        <>
            {BUTTONS.map((btn) => {
                return (
                    <button onClick={() => handleChangeTabFilter(btn.label)} key={btn.label} type='button' className="gap-1 flex flex-col justify-center items-center">
                        <btn.icon className='size-6' />
                        <span className="uppercase text-xs">{btn.label}</span>
                    </button>
                )
            })}
        </>
    )
}

export default FooterNavigations