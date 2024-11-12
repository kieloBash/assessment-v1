'use client'
import DisplayCard from '@/app/components/games/display-card'
import { useRootContext } from '@/app/contexts/RootContext'
import React from 'react'

const FavoritesTemplate = () => {
    const { favorites } = useRootContext()
    return (
        <>
            {favorites.length <= 0 ? <div className='w-full h-full flex justify-center items-center'>No Favorited Games</div> : <>
                <div className="grid grid-cols-3 gap-2">
                    {favorites.map((game) => {
                        return (
                            <DisplayCard data={game} key={game.id} type='hasStar' />
                        )
                    })}
                </div>
            </>}
        </>
    )
}

export default FavoritesTemplate