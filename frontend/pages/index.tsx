import { Box, Container, Grid } from "@mui/material";
import React from "react";
import { IBook, demoBooks } from "../data";
import { useApp } from "../contexts/AppContext";
import { BookCard } from "../components/BookCard";
import { SearchInput } from "../components/SearchInput";

export interface IUseFetchAllBooks {
    books: IBook[];
}

export const useFetchAllBooks = (): IUseFetchAllBooks => {
    const [books, setBooks] = React.useState<IBook[]>([]);

    const handleSetBook = (books: IBook[]) =>
        setBooks(books);

    React.useEffect(() => {
        handleSetBook([...demoBooks])
    }, []);

    return {
        books,
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