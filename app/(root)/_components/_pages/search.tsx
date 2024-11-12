'use client'
import React from 'react'

import { useSearchParams } from 'next/navigation';
import useFetchGames from '@/app/components/games/use-fetch-games';
import Search from '@/app/components/games/search';
import DisplayCard from '@/app/components/games/display-card';
import LoaderTemplate from '@/app/components/loading';

import useFetchGameProviders from '@/app/components/game-providers/use-fetch-gameproviders';
import GameProviderHeader from '@/app/components/game-providers/header';
import GameProvidersList from '@/app/components/game-providers/list';
import GameProviderMenuButton from '@/app/components/game-providers/menu/button';

const SearchTemplate = () => {

    const searchParams = useSearchParams();

    const page = parseInt(searchParams.get("page") ?? "1", 10);
    const limit = parseInt(searchParams.get("limit") ?? "6", 10);
    const searchFilter = searchParams.get("search") || "";

    const games = useFetchGames({ searchFilter })
    const gameProviders = useFetchGameProviders({ page, limit, });

    return (
        <div className="flex flex-col gap-2">
            <div className="flex gap-1 justify-center items-center">
                <Search />
                <GameProviderMenuButton />
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
            <div className="flex flex-col gap-2">
                <GameProviderHeader totalPages={gameProviders.data?.totalPages ?? 1} />
                <GameProvidersList
                    data={gameProviders.data?.payload ?? []}
                    isLoading={gameProviders.isLoading || gameProviders.isFetching} />
            </div>
        </div>
    )
}

export default SearchTemplate