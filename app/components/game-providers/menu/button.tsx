'use client'
import React, { useState } from 'react'
import { MenuIcon } from 'lucide-react';
import GameProviderMenuHeader from './header';
import GameProviderMenuList from './list';

const GameProviderMenuButton = () => {
    const [open, setOpen] = useState(false)

    return (
        <>
            {open && (
                <div className="w-full h-screen top-0 left-0 fixed z-[100] bg-black/35 flex flex-col justify-end items-center">
                    <GameProviderMenuHeader setOpen={setOpen} />
                    <GameProviderMenuList />
                </div>
            )}
            <button onClick={() => setOpen(true)} type="button" className='w-9 aspect-square relative p-1.5 border rounded-sm border-muted-foreground text-muted-foreground'>
                <MenuIcon className='size-full' />
            </button>
        </>
    )
}

export default GameProviderMenuButton