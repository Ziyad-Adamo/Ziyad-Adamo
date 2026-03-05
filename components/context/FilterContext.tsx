"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface FilterContextType {
    activeFilter: string | null;
    setActiveFilter: (filter: string | null) => void;
}

const FilterContext = createContext<FilterContextType | undefined>(undefined);

export function FilterProvider({ children }: { children: ReactNode }) {
    const [activeFilter, setActiveFilter] = useState<string | null>(null);

    return (
        <FilterContext.Provider value={{ activeFilter, setActiveFilter }}>
            {children}
        </FilterContext.Provider>
    );
}

export function useFilter() {
    const context = useContext(FilterContext);
    if (context === undefined) {
        throw new Error("useFilter must be used within a FilterProvider");
    }
    return context;
}
