import React from 'react'
import { ILayoutProps } from '../types/global'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import NavigationsProvider from '../contexts/NavigationsContext'
import { QueryProvider } from '../contexts/QueryProvider'
import RootProvider from '../contexts/RootContext'


const Layout = ({ children }: ILayoutProps) => {
    return (
        <QueryProvider>
            <RootProvider>
                <NavigationsProvider>
                    <div className="flex justify-center items-center bg-foreground">
                        <div className="min-h-screen w-full relative max-w-sm bg-background">
                            <Navbar />
                            <main className="w-full min-h-screen z-0 pt-12 pb-16">
                                {children}
                            </main>
                            <Footer />
                        </div>
                    </div>
                </NavigationsProvider>
            </RootProvider>
        </QueryProvider>
    )
}

export default Layout