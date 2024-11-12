'use client'
import { useNavigationContexts } from '@/app/contexts/NavigationsContext'
import React from 'react'
import StartTemplate from './_pages/start'
import SearchTemplate from './_pages/search'

const Display = () => {
    const { selected } = useNavigationContexts()

    if (selected === "start") return <StartTemplate />
    else if (selected === "search") return <SearchTemplate />;
    else return;
}

export default Display