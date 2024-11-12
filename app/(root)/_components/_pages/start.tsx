'use client'
import DisplayCard from '@/app/components/games/display-card';
import useFetchGames from '@/app/components/games/use-fetch-games'
import LoaderTemplate from '@/app/components/loading';

import React from 'react'

const StartTemplate = () => {
    const games = useFetchGames({});

    return (
        <>
            {games.isLoading || games.isFetching ? <LoaderTemplate /> :
                <div className="grid grid-cols-3 gap-2">
                    {games.data?.payload.map((game) => {
                        return (
                            <DisplayCard key={game.id} data={game} />
                        )
                    })}
                </div>
            }
        </>
    )
}

export default StartTemplate