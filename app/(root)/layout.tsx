import React from 'react'
import { ILayoutProps } from '../types/global'
import Navbar from '../components/navbar'
import Footer from '../components/footer'


const Layout = ({ children }: ILayoutProps) => {
    return (
        <div className="min-h-screen w-full relative">
            <Navbar />
            <main className="w-full min-h-screen z-0 pt-12 pb-16">
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default Layout