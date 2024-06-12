import React from "react";
import { IBook } from "../data";

export interface IAppContextProps {
    selectedBooks: IBook[];
    addBook: (book: IBook) => void;
    removeBook: (book: IBook) => void;
}

export const AppContext = React.createContext<IAppContextProps>({
    selectedBooks: [],
    addBook: () => { },
    removeBook: () => { },
});

export const useApp = () => React.useContext(AppContext);

export interface IAppProviderProps {
    children: React.ReactNode;
    selectedBooks: IBook[];
    addBook: (book: IBook) => void;
    removeBook: (book: IBook) => void;
}

export const AppProvider = ({ children, ...rest }: IAppProviderProps) =>
    <AppContext.Provider value={{ ...rest }}>
        {children}
    </AppContext.Provider>