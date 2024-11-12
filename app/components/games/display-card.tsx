"use client"
import { GameType } from '@/app/types/global'
import { Star } from 'lucide-react';
import Image from 'next/image'
import React from 'react'

interface IProps {
    data: GameType;
    type?: "default" | "hasStar";
}
const DisplayCard = ({ data: { id, name, image, providerId }, type = "default" }: IProps) => {
    return (
        <div className="rounded shadow aspect-square relative overflow-hidden">
            {type === "hasStar" && (
                <button type='button'>
                    <Star className='size-5 absolute top-1 right-1 z-10 text-primary-foreground shadow-sm' />
                </button>
            )}
            <Image src={image} alt={name} fill />
        </div>
    )
}

export default DisplayCard