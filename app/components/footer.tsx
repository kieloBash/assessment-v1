import { Star } from 'lucide-react'
import React from 'react'

const Footer = () => {
    const BUTTONS = [
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

    return (
        <div className="z-[10] text-muted-foreground w-full h-16 grid grid-cols-5 gap-2 px-2 absolute bottom-0 left-0 bg-primary-foreground">
            {BUTTONS.map((btn) => {
                return (
                    <button key={btn.label} type='button' className="gap-1 flex flex-col justify-center items-center">
                        <btn.icon className='size-6' />
                        <span className="uppercase text-xs">{btn.label}</span>
                    </button>
                )
            })}
        </div>
    )
}

export default Footer