'use client'
import React from 'react'
import useFetchGameProviders from '../use-fetch-gameproviders'
import Image from 'next/image';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import clsx from 'clsx';


const GameProviderMenuList = () => {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const filter = searchParams.get("filter")?.split(",") || [];

    const allProviders = useFetchGameProviders({ type: "all", filter });

    const handleFilterChange = (newFilter: string, type: "add" | "remove") => {
        const currentParams = new URLSearchParams(Array.from(searchParams.entries()));
        let updated = [...filter]
        if (type === "add") {
            updated.push(newFilter)
        } else {
            updated = updated.filter((d) => d !== newFilter)
        }

        currentParams.set("filter", updated.length > 0 ? updated.join(",") : "");
        router.push(`${pathname}?${currentParams.toString()}`);
    }

    return (
        <div className="bg-primary-foreground w-full h-[28rem] overflow-y-auto">
            <div className="w-full grid grid-cols-2 grid-flow-row gap-2 p-2">
                {allProviders.data?.payload.map((provider) => {
                    const active = filter.includes(provider.id);
                    const activeClassName = clsx("relative border bg-muted-foreground/20 rounded h-10", active ? "border-primary" : "border-none")
                    return (
                        <button
                            onClick={() => {
                                if (active) handleFilterChange(provider.id, "remove")
                                else handleFilterChange(provider.id, "add")
                            }}
                            className={activeClassName} key={provider.id}>
                            <Image src={provider.logo} alt={provider.name} fill className='object-contain' />
                        </button>
                    )
                })}
            </div>
        </div>
    )
}

export default GameProviderMenuList