"use client"
import { GameType } from '@/app/types/global'
import { Star } from 'lucide-react';
import Image from 'next/image'
import React from 'react'

import FavoriteMask from "@/public/fun88/assets/favorite-mask.svg"
import { useRootContext } from '@/app/contexts/RootContext';
import clsx from 'clsx';
interface IProps {
    data: GameType;
    type?: "default" | "hasStar";
}
const DisplayCard = ({ data: { id, name, image, providerId, category }, type = "default" }: IProps) => {
    const { favorites, setFavorites } = useRootContext()

    const isFavorited = favorites.some((favorite) => favorite.id === id);
    const starClassName = clsx('size-4 absolute top-1 right-1 z-10 text-primary-foreground shadow-sm transition-all', isFavorited ? "text-yellow-500 fill-yellow-500" : "")
    return (
        <div className="rounded shadow aspect-square relative overflow-hidden">
            {type === "hasStar" && (
                <>
                    <div className='absolute top-0 right-0 z-10'>
                        <Image src={FavoriteMask} alt='mask' width={40} height={40} />
                    </div>
                    <button type='button' onClick={() => {
                        if (isFavorited) {
                            const newArr = favorites.filter((d) => d.id !== id)
                            setFavorites(newArr)
                        } else {
                            setFavorites([...favorites, { id, name, image, providerId, category }])
                        }
                    }}>
                        <Star className={starClassName} />
                    </button>
                </>
            )}
            <Image src={image} alt={name} fill />
        </div>
    )
}

export default DisplayCard