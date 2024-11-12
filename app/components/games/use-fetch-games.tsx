'use client'
import DUMMY_GAMES_DATA from "@/app/data/games";
import { GameType } from "@/app/types/global";
import { useQuery, keepPreviousData } from "@tanstack/react-query";

const default_page = 1;
const default_limit = 5;

interface FetchProps {
    page?: number;
    limit?: number
    searchFilter?: string;
}

interface ApiResponse {
    payload: GameType[];
}

const fetchData = async ({ page = default_page, limit = default_limit, searchFilter = "" }: FetchProps) => {
    const data = await new Promise<GameType[]>((res) => {
        setTimeout(() => {
            res(DUMMY_GAMES_DATA);
        }, 3000);
    })

    const skip = (page - 1) * limit;

    if (searchFilter === "") return { payload: data.splice(skip, limit) ?? [] }
    return {
        payload: data?.filter((val) => val.name.toLowerCase().includes(searchFilter.toLowerCase())) ?? []
    }
}

const useFetchGames = ({ page = default_page, limit = default_limit, searchFilter = "" }: FetchProps) => {

    const { data, error, isLoading, isFetching, isError } = useQuery<ApiResponse>({
        queryKey: ["games", page, limit, searchFilter],
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

export default useFetchGames;
