'use client'
import { FireExtinguisherIcon, SearchIcon } from 'lucide-react'
import React from 'react'
import { useNavigationContexts } from '../contexts/NavigationsContext'
import clsx from 'clsx'
import { NavigationTypes } from '../types/global'
import { usePathname, useRouter, useSearchParams } from 'next/navigation';


const MainNavigations = () => {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const { selected: active, setSelected: setActive } = useNavigationContexts()

    const BUTTONS: { icon: any, label: NavigationTypes }[] = [
        {
            icon: FireExtinguisherIcon,
            label: "start",
        },
        {
            icon: FireExtinguisherIcon,
            label: "new",
        },
        {
            icon: FireExtinguisherIcon,
            label: "slots",
        },
        {
            icon: FireExtinguisherIcon,
            label: "live",
        },
        {
            icon: FireExtinguisherIcon,
            label: "jackpots",
        },
    ]

    function handleChangeTabFilter(tab: NavigationTypes) {
        const currentParams = new URLSearchParams(Array.from(searchParams.entries()));
        currentParams.set("tab", tab);

        router.push(`${pathname}?${currentParams.toString()}`);
        setActive(tab)
    }

    return (
        <div className='flex gap-1 py-2'>
            <button onClick={() => handleChangeTabFilter("search")} type='button' className={`gap-1 flex flex-col justify-center items-center ${active === "search" ? "text-primary" : "text-muted-foreground"}`}>
                <SearchIcon className='size-6' />
                <span className={`uppercase text-xs ${active === "search" ? "text-primary underline" : ""}`}>Search</span>
            </button>
            <div className="w-[1px] h-full bg-muted-foreground mx-1.5" />
            <div className="grid grid-cols-5 gap-1">
                {BUTTONS.map((btn) => {
                    const btnClassName = clsx("gap-1 flex flex-col justify-center items-center", active === btn.label ? "text-primary" : "text-muted-foreground")
                    const labelClassName = clsx("uppercase text-sm", active === btn.label ? "text-primary underline" : "")
                    return (
                        <button onClick={() => handleChangeTabFilter(btn.label)} key={btn.label} type='button' className={btnClassName}>
                            <btn.icon className='size-6' />
                            <span className={labelClassName}>{btn.label}</span>
                        </button>
                    )
                })}
            </div>
        </div>
    )
}

export default MainNavigations