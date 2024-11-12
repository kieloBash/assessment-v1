import { GameProviderType } from '@/app/types/global'
import React from 'react'
import GameProviderCard from './card'
import LoaderTemplate from '../loading';

interface IProps {
    data: GameProviderType[]
    isLoading: boolean;
}

const GameProvidersList = ({ data, isLoading }: IProps) => {
    return (
        <>
            {isLoading ? <LoaderTemplate /> :
                <div className="grid grid-cols-3 gap-2">
                    {data.map((provider) => {
                        return (
                            <GameProviderCard key={provider.id} data={provider} />
                        )
                    })}
                </div>
            }
        </>
    )
}

export default GameProvidersList