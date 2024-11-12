"use client"
import React, { useState } from 'react'

import BannerImage from "@/public/fun88/images/banner-bg.png"
import Image from "next/image";
import clsx from 'clsx';

const Banner = () => {
    const BUTTONS = [
        {
            label: "rescue",
        },
        {
            label: "bonus",
        },
        {
            label: "we are here for you",
        },
    ]
    const [active, setActive] = useState("bonus")

    return (
        <div className="px-4 relative w-full aspect-video overflow-hidden rounded-md">
            <div className="absolute z-10 left-8 top-0 h-full py-6 grid gap-6 w-32">
                {BUTTONS.map((btn) => {
                    const btnClassName = clsx("text-left", active === btn.label ? "" : "")
                    const labelClassName = clsx("transition-all text-left uppercase text-primary-foreground font-bold", active === btn.label ? "text-yellow-500" : "")
                    return (
                        <button onClick={() => { setActive(btn.label) }} key={btn.label} type="button" className={btnClassName}>
                            <span className={labelClassName}>{btn.label}</span>
                        </button>
                    )
                })}

            </div>
            <Image src={BannerImage} alt="banner" fill />
        </div>
    )
}

export default Banner