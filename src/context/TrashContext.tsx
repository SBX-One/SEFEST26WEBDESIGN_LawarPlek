import { createContext, useState, ReactNode, useContext } from "react";

interface TrashContextType {
    totalHarga: number;
    setTotalHarga: (harga: number) => void;
}

export const TrashContext = createContext<TrashContextType | undefined>(undefined);

export function TrashProvider({ children }: { children: ReactNode }) {
    const [totalHarga, setTotalHarga] = useState<number>(0);

    return (
        <TrashContext.Provider value={{ totalHarga, setTotalHarga }}>
            {children}
        </TrashContext.Provider>
    );
}

export function useTrash() {
    const context = useContext(TrashContext);
    if (!context) {
        throw new Error("useTrash harus digunakan dalam TrashProvider");
    }
    return context;
}
