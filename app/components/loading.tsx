import { Loader2Icon } from 'lucide-react'
import React from 'react'

const LoaderTemplate = () => {
    return (
        <div className='w-full h-full min-h-20 flex justify-center items-center'><Loader2Icon className='animate-spin size-5'/></div>
    )
}

export default LoaderTemplate