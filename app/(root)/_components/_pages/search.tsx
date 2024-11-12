'use client'
import React from 'react'

import { useSearchParams } from 'next/navigation';
import useFetchGames from '@/app/components/games/use-fetch-games';
import Search from '@/app/components/games/search';
import DisplayCard from '@/app/components/games/display-card';
import LoaderTemplate from '@/app/components/loading';
import Image from 'next/image';

import left from "@/public/fun88/assets/chevron-left.svg";
import right from "@/public/fun88/assets/chevron-right.svg";
import useFetchGameProviders from '@/app/components/game-providers/use-fetch-gameproviders';

const SearchTemplate = () => {

    const searchParams = useSearchParams();

    const page = parseInt(searchParams.get("page") ?? "1", 10);
    const limit = parseInt(searchParams.get("limit") ?? "5", 10);
    const searchFilter = searchParams.get("search") || "";

    const games = useFetchGames({ page, limit, searchFilter })
    const gameProviders = useFetchGameProviders({});

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
            <div className="flex flex-col gap-2">
                <div className="w-full flex justify-between items-center">
                    <h3 className="text-muted-foreground">Proveedores de juego</h3>
                    <div className="flex gap-2 justify-center items-center">
                        <button type='button' className='size-8 flex justify-center items-center'>
                            <Image src={left} alt='prev' width={14} height={10} />
                        </button>
                        <button type='button' className='size-8 flex justify-center items-center'>
                            <Image src={right} alt='right' width={14} height={10} />
                        </button>
                    </div>
                </div>
                <div className="grid grid-cols-3 gap-2">
                    {gameProviders.data?.payload.map((provider) => {
                        return (
                            <div className="rounded flex flex-col overflow-hidden relative" key={provider.id}>
                                <div className="relative bg-muted-foreground/50 h-10">
                                    <Image src={provider.logo} alt={provider.name} fill />
                                </div>
                                <div className="bg-muted p-1 flex flex-col justify-center items-center">
                                    <h2 className="text-sm text-center">{provider.name}</h2>
                                    <h4 className="text-xs text-muted-foreground">{provider.juego} juegos</h4>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default SearchTemplate