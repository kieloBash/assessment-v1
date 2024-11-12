'use client'
import DUMMY_GAME_PROVIDERS_DATA from "@/app/data/game-providers";
import { GameProviderType } from "@/app/types/global";
import { useQuery, keepPreviousData } from "@tanstack/react-query";

const default_page = 1;
const default_limit = 5;

interface FetchProps {
    page?: number;
    limit?: number
    searchFilter?: string;
}

interface ApiResponse {
    payload: GameProviderType[];
    totalPages: number;
}

const fetchData = async ({ page = default_page, limit = default_limit, searchFilter = "" }: FetchProps) => {
    const data = await new Promise<GameProviderType[]>((res) => {
        setTimeout(() => {
            res(DUMMY_GAME_PROVIDERS_DATA);
        }, 3000);
    })

    const skip = (page - 1) * limit;

    if (searchFilter === "") return { payload: data.splice(skip, limit) ?? [], totalPages: data.length / limit }

    const newData = data.filter((val) => val.name.toLowerCase().includes(searchFilter.toLowerCase())) ?? []
    return { payload: newData.splice(skip, limit), totalPages: newData.length / limit }
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



    return {
        data,
        error,
        isLoading,
        isFetching,
        isError,
    };
};

export default useFetchGameProviders;
