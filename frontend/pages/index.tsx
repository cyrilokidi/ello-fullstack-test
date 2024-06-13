import { Autocomplete, Box, Container, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import { IBook, demoBooks } from "../data";
import { useApp } from "../contexts/AppContext";
import { BookCard } from "../components/BookCard";

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
                <Autocomplete
                    sx={{ width: 500 }}
                    options={fetchAllBooks.books}
                    getOptionLabel={(book) => book.title}
                    renderOption={(props, book) => <Box
                        {...props}
                        key={book.title + book.author + book.readingLevel}
                        component="li"
                        sx={{
                            '& > img': {
                                mr: 2,
                                flexShrink: 0,
                            }
                        }}
                    >
                        <Typography variant="body1" color="text.primary">
                            {book.title}
                        </Typography>
                    </Box>}
                    renderInput={(params) => <TextField
                        {...params}
                        placeholder="Search..."
                    />}
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