"use client";
import * as React from "react";
import { GameType } from "../types/global";

type ContextType = {
    favorites: GameType[];
    setFavorites: (temp: GameType[]) => void;
};

const Context = React.createContext<ContextType>({
    favorites: [],
    setFavorites: (temp: GameType[]) => { },
});

export const useRootContext = () => React.useContext(Context);

const RootProvider = ({ children }: { children: React.ReactNode }) => {

    const [favorites, setFavorites] = React.useState<GameType[]>([]);

    return (
        <Context.Provider
            value={{
                favorites,
                setFavorites,
            }}
        >
            {children}
        </Context.Provider>
    );
};

export default RootProvider;
