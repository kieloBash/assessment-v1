'use client'
import React from 'react'

import { useSearchParams } from 'next/navigation';
import useFetchGames from '@/app/components/games/useFetchGames';
import Search from '@/app/components/games/search';
import DisplayCard from '@/app/components/games/display-card';
import LoaderTemplate from '@/app/components/loading';


const SearchTemplate = () => {

    const searchParams = useSearchParams();

    const page = parseInt(searchParams.get("page") ?? "1", 10);
    const limit = parseInt(searchParams.get("limit") ?? "5", 10);
    const searchFilter = searchParams.get("search") || "";

    const games = useFetchGames({ page, limit, searchFilter })

    return (
        <div className="flex flex-col gap-2">
            <div className="flex gap-2 justify-center items-center">
                <Search />
            </div>
            {games.isLoading || games.isFetching ? <LoaderTemplate /> :
                <div className="grid grid-cols-3 gap-2">
                    {games.data?.payload.map((game) => {
                        return (
                            <DisplayCard data={game} key={game.id} type='hasStar' />
                        )
                    })}
                </div>
            }
        </div>
    )
}

export default SearchTemplate