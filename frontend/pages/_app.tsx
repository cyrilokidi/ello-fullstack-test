import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { IBook } from "../data";
import React from "react";

export const theme = createTheme({});

export enum EAppStateReducerActionType {
    ADD_BOOK = 'ADD_BOOK',
    REMOVE_BOOK = 'REMOVE_BOOK',
}

export interface IAppState {
    selectedBooks: IBook[];
}

export type TAppStateReducerActionPayload = IBook;

export interface IAppStateReducerAction {
    type: EAppStateReducerActionType;
    payload?: TAppStateReducerActionPayload;
}

export const appStateHandlers = {
    [EAppStateReducerActionType.ADD_BOOK]: (state: IAppState, action: IAppStateReducerAction): IAppState => {
        return {
            ...state,
            selectedBooks: [
                ...state.selectedBooks,
                action.payload as IBook,
            ],
        }
    },
    [EAppStateReducerActionType.REMOVE_BOOK]: (state: IAppState, action: IAppStateReducerAction): IAppState => {
        return {
            ...state,
            selectedBooks: state.selectedBooks.filter((book) => book.title !== action.payload.title && book.author !== action.payload.author && book.readingLevel !== action.payload.readingLevel)
        }
    }
}

export const appStateReducer = (state: IAppState, action: IAppStateReducerAction): IAppState =>
    appStateHandlers[action.type] ? appStateHandlers[action.type](state, action) : state;

export const appStateInitialValue: IAppState = {
    selectedBooks: [],
}

export default function App({ Component, pageProps }) {
    const [state, dispatch] = React.useReducer(appStateReducer, appStateInitialValue);

    const handleAddBook = (payload: IBook) => dispatch({
        type: EAppStateReducerActionType.ADD_BOOK,
        payload,
    });

    const handleRemoveBook = (payload: IBook) => dispatch({
        type: EAppStateReducerActionType.REMOVE_BOOK,
        payload,
    });

    return <ThemeProvider theme={theme}>
        <CssBaseline />

        <Component {...pageProps} />
    </ThemeProvider>;
}