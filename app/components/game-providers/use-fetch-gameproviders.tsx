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
    type?: "default" | "all";
    filter?: string[]
}

interface ApiResponse {
    payload: GameProviderType[];
    totalPages: number;
}

const fetchData = async ({ page = default_page, limit = default_limit, searchFilter = "", type = "default", filter = [] }: FetchProps) => {
    const data = await new Promise<GameProviderType[]>((res) => {
        setTimeout(() => {
            res(DUMMY_GAME_PROVIDERS_DATA);
        }, 3000);
    })

    if (type === "all") return {
        payload: data,
        totalPages: data.length / limit
    }


    const searchedFilteredData = searchFilter
        ? data.filter((val) => val.name.toLowerCase().includes(searchFilter.toLowerCase()))
        : data;

    const filteredData = searchedFilteredData;

    const skip = (page - 1) * limit;
    const paginatedData = filteredData.slice(skip, skip + limit);

    return { payload: paginatedData ?? [], totalPages: filteredData.length / limit };

}

const useFetchGameProviders = ({ page = default_page, limit = default_limit, searchFilter = "", type = "default", filter = [] }: FetchProps) => {

    const { data, error, isLoading, isFetching, isError } = useQuery<ApiResponse>({
        queryKey: ["game-providers", page, limit, type, searchFilter, filter],
        queryFn: () =>
            fetchData({ page, limit, type, searchFilter, filter }),
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
