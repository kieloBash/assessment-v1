import React, { Suspense } from 'react'
import FooterNavigations from './footer-nav'


const Footer = () => {
    return (
        <div className="z-[10] text-muted-foreground w-full h-16 grid grid-cols-5 gap-2 px-2 absolute bottom-0 left-0 bg-primary-foreground">
            <Suspense>
                <FooterNavigations />
            </Suspense>
        </div>
    )
}

export default Footer