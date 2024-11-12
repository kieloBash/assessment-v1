import { GameProviderType } from '@/app/types/global'
import Image from 'next/image'
import React from 'react'

interface IProps {
    data: GameProviderType
}


const GameProviderCard = ({ data }: IProps) => {
    return (
        <div className="rounded flex flex-col overflow-hidden relative" key={data.id}>
            <div className="relative bg-muted-foreground/50 h-10">
                <Image src={data.logo} alt={data.name} fill />
            </div>
            <div className="bg-muted p-1 flex flex-col justify-center items-center">
                <h2 className="text-sm text-center">{data.name}</h2>
                <h4 className="text-xs text-muted-foreground">{data.juego} juegos</h4>
            </div>
        </div>
    )
}

export default GameProviderCard