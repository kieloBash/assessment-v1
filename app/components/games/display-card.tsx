import { GameType } from '@/app/types/global'
import Image from 'next/image'
import React from 'react'

interface IProps {
    data: GameType
}
const DisplayCard = ({ data: { id, name, image, providerId } }: IProps) => {
    return (
        <div className="rounded-sm shadow aspect-square relative overflow-hidden">
            <Image src={image} alt={name} fill />
        </div>
    )
}

export default DisplayCard