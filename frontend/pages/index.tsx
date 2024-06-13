import { Box, Container, Grid } from "@mui/material";
import React from "react";
import { IBook, demoBooks } from "../data";
import { useApp } from "../contexts/AppContext";
import { BookCard } from "../components/BookCard";
import { SearchInput } from "../components/SearchInput";

export enum EFetchAllBooksSortOrder {
    ['asc'] = 'asc',
    ['desc'] = 'desc',
}

export enum EFetchAllBooksSortField {
    ['title'] = 'title',
    ['author'] = 'author',
    ['readingLevel'] = 'readingLevel',
}

export interface IUseFetchAllBooks {
    books: IBook[];
    field: EFetchAllBooksSortField;
    handleChangeField: (field: EFetchAllBooksSortField) => void;
    order: EFetchAllBooksSortOrder;
    handleChangeOrder: (order: EFetchAllBooksSortOrder) => void;
}

export const useFetchAllBooks = (): IUseFetchAllBooks => {
    const [books, setBooks] = React.useState<IBook[]>([]);

    const handleSetBook = (books: IBook[]) =>
        setBooks(books);

    const [field, setField] = React.useState<EFetchAllBooksSortField>(EFetchAllBooksSortField.title);

    const handleChangeField = (field: EFetchAllBooksSortField): void =>
        setField(field);

    const [order, setOrder] = React.useState<EFetchAllBooksSortOrder>(EFetchAllBooksSortOrder.desc);

    const handleChangeOrder = (order: EFetchAllBooksSortOrder): void =>
        setOrder(order);

    React.useEffect(() => {
        (order === EFetchAllBooksSortOrder.desc)
            ? handleSetBook([...demoBooks].sort((a, b) => b.title.localeCompare(a.title)))
            : handleSetBook([...demoBooks].sort((a, b) => a.title.localeCompare(b.title)))
    }, []);

    return {
        books,
        field,
        handleChangeField,
        order,
        handleChangeOrder,
    }
};

export default function HomePage() {
    const fetchAllBooks = useFetchAllBooks();

    const app = useApp();

    return <Container component="main">
        <Box
            sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
            gap={2}
        >
            <Box>
                <SearchInput
                    books={fetchAllBooks.books}
                />
            </Box>

            <Box>
                <Grid container spacing={2}>
                    {fetchAllBooks.books.map((book, index) => <Grid
                        key={index}
                        item
                        xs={2}
                    >
                        <BookCard
                            book={book}
                            selectedBooks={app.selectedBooks}
                            onAddBook={app.addBook}
                            onRemoveBook={app.removeBook}
                        />
                    </Grid>)}
                </Grid>
            </Box>
        </Box>
    </Container>
}