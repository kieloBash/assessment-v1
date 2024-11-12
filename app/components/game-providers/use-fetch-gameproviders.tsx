'use client'
import DUMMY_GAME_PROVIDERS_DATA from "@/app/data/game-providers";
import { GameProviderType } from "@/app/types/global";
import { useQuery, keepPreviousData } from "@tanstack/react-query";
import { useMemo } from "react";

const default_page = 1;
const default_limit = 5;

interface FetchProps {
    page?: number;
    limit?: number
    searchFilter?: string;
}

interface ApiResponse {
    payload: GameProviderType[];
}

const fetchData = async ({ page = default_page, limit = default_limit, searchFilter = "" }: FetchProps) => {
    console.log(page, limit, searchFilter)
    const data = await new Promise<GameProviderType[]>((res) => {
        setTimeout(() => {
            res(DUMMY_GAME_PROVIDERS_DATA);
        }, 3000);
    })

    return { payload: data };
}

const useFetchGameProviders = ({ page = default_page, limit = default_limit, searchFilter = "" }: FetchProps) => {

    const { data, error, isLoading, isFetching, isError } = useQuery<ApiResponse>({
        queryKey: ["game-providers", page, limit, searchFilter],
        queryFn: () =>
            fetchData({ page, limit, searchFilter }),
        staleTime: 60000 * 10, //10 mins
        refetchOnWindowFocus: false,
        placeholderData: keepPreviousData,
    });

    const filteredData = useMemo(() => {
        if (searchFilter === "") return data
        return { payload: data?.payload.filter((val) => val.name.toLowerCase().includes(searchFilter.toLowerCase())) ?? [] }
    }, [searchFilter])

    return {
        data: filteredData,
        error,
        isLoading,
        isFetching,
        isError,
    };
};

export default useFetchGameProviders;
