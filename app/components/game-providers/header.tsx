'use client'
import Image from 'next/image'
import React from 'react'

import left from "@/public/fun88/assets/chevron-left.svg";
import right from "@/public/fun88/assets/chevron-right.svg";

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import clsx from 'clsx';

interface IProps {
    totalPages: number
}

const GameProviderHeader = ({ totalPages }: IProps) => {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const page = parseInt(searchParams.get("page") ?? "1", 10);

    const handlePageChange = (newPage: number) => {
        if (newPage < 1) return;

        const currentParams = new URLSearchParams(Array.from(searchParams.entries()));
        currentParams.set("page", `${newPage}`);

        router.push(`${pathname}?${currentParams.toString()}`);
    }

    const btnPrevClassName = clsx("size-8 flex justify-center items-center transition-all", page <= 1 ? "opacity-50" : "")
    const btnNextClassName = clsx("size-8 flex justify-center items-center transition-all", page >= totalPages ? "opacity-50" : "")

    return (
        <div className="w-full flex justify-between items-center">
            <h3 className="text-muted-foreground">Proveedores de juego</h3>
            <div className="flex gap-2 justify-center items-center">
                <button disabled={page <= 1} onClick={() => handlePageChange(page - 1)} type='button' className={btnPrevClassName}>
                    <Image src={left} alt='prev' width={14} height={10} />
                </button>
                <button disabled={page >= totalPages} onClick={() => handlePageChange(page + 1)} type='button' className={btnNextClassName}>
                    <Image src={right} alt='right' width={14} height={10} />
                </button>
            </div>
        </div>
    )
}

export default GameProviderHeader