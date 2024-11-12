'use client'
import { MenuIcon, XIcon } from 'lucide-react'
import React from 'react'

interface IProps {
    setOpen: (prev: boolean) => void
}
const GameProviderMenuHeader = ({ setOpen }: IProps) => {
    return (
        <div className="w-full bg-primary p-2 h-10 flex justify-between items-center">
            <div className="flex gap-2 justify-center items-center">
                <MenuIcon className='size-6 text-primary-foreground' />
                <h3 className="text-primary-foreground">Game Provider</h3>
                <div className="border border-primary-foreground rounded-sm px-2 flex justify-center items-center">
                    <span className="text-primary-foreground text-sm text-center font-medium">119</span>
                </div>
            </div>
            <button onClick={() => setOpen(false)} type="button" className='w-6 aspect-square text-primary-foreground'>
                <XIcon className='size-full' />
            </button>
        </div>
    )
}

export default GameProviderMenuHeader