'use client'
import React, { useEffect, useState } from 'react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import useDebounce from '@/lib/use-debounce';
import { SearchIcon, XIcon } from 'lucide-react';

const Search = () => {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const searchFilter = searchParams.get("search") || "";
    const [searchTerm, setSearchTerm] = useState(searchFilter);
    const debouncedSearchTerm = useDebounce(searchTerm, 1000);

    const handleClear = () => {
        setSearchTerm("")
    }

    useEffect(() => {
        const currentParams = new URLSearchParams(Array.from(searchParams.entries()));
        currentParams.set("search", debouncedSearchTerm);
        currentParams.set("tab", "search");
        // handleResetPage()

        router.push(`${pathname}?${currentParams.toString()}`);
    }, [debouncedSearchTerm])

    return (
        <div className="border border-primary rounded-sm w-full px-2 h-9 flex justify-center items-center gap-2">
            <SearchIcon className='size-5 text-muted-foreground' />
            <input value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className='w-full h-full outline-none active:outline-none text-sm' placeholder='Search for games...' />
            {searchTerm && (
                <button type="button" onClick={handleClear}>
                    <XIcon className='size-4 text-muted-foreground' />
                </button>
            )}
        </div>
    )
}

export default Search