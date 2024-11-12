'use client'
import React from 'react'
import useFetchGameProviders from '../use-fetch-gameproviders'
import Image from 'next/image';

const GameProviderMenuList = () => {
    const allProviders = useFetchGameProviders({ type: "all" });

    return (
        <div className="bg-primary-foreground w-full h-[28rem] overflow-y-auto">
            <div className="w-full grid grid-cols-2 grid-flow-row gap-2 p-2">
                {allProviders.data?.payload.map((provider) => {
                    return (
                        <button className="relative bg-muted-foreground/20 rounded h-10" key={provider.id}>
                            <Image src={provider.logo} alt={provider.name} fill className='object-contain' />
                        </button>
                    )
                })}
            </div>
        </div>
    )
}

export default GameProviderMenuList