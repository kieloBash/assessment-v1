"use client";
import * as React from "react";
import { NavigationTypes } from "../types/global";
import LoaderTemplate from "../components/loading";

type ContextType = {
    selected: NavigationTypes;
    setSelected: (temp: NavigationTypes) => void;
};

const Context = React.createContext<ContextType>({
    selected: "start",
    setSelected: (temp: NavigationTypes) => { },
});

export const useNavigationContexts = () => React.useContext(Context);

const NavigationsProvider = ({ children }: { children: React.ReactNode }) => {

    const [selected, setSelected] = React.useState<NavigationTypes>("start");

    return (
        <Context.Provider
            value={{
                selected,
                setSelected,
            }}
        >
            {children}
        </Context.Provider>
    );
};

export default NavigationsProvider;
