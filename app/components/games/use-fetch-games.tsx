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
    filter?: string[]
}

interface ApiResponse {
    payload: GameType[];
}

const fetchData = async ({ page = default_page, limit = default_limit, searchFilter = "", filter = [] }: FetchProps) => {
    const data = await new Promise<GameType[]>((res) => {
        setTimeout(() => {
            res(DUMMY_GAMES_DATA);
        }, 3000);
    });

    const searchedFilteredData = searchFilter
        ? data.filter((val) => val.name.toLowerCase().includes(searchFilter.toLowerCase()))
        : data;

    const filteredData = filter.length > 0 ? searchedFilteredData.filter((game) => filter.includes(game.providerId)) : searchedFilteredData

    const skip = (page - 1) * limit;
    const paginatedData = filteredData.slice(skip, skip + limit);

    return { payload: paginatedData ?? [] };
};


const useFetchGames = ({ page = default_page, limit = default_limit, searchFilter = "", filter = [] }: FetchProps) => {

    const { data, error, isLoading, isFetching, isError } = useQuery<ApiResponse>({
        queryKey: ["games", page, limit, searchFilter, filter],
        queryFn: () =>
            fetchData({ page, limit, searchFilter, filter }),
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
