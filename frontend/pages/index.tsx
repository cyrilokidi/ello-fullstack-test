import { Autocomplete, Box, Button, Card, CardActions, CardContent, Container, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import { IBook, demoBooks } from "../data";

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

    const [selectedBooks, setSelectedBooks] = React.useState<IBook[]>([]);

    const handleAddBook = (book: IBook) =>
        setSelectedBooks([
            ...selectedBooks,
            book,
        ]);

    const handleRemoveBook = (book: IBook) =>
        setSelectedBooks(selectedBooks.filter(({ title, author, readingLevel }) => title !== book.title && author !== book.author && readingLevel !== book.readingLevel));

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
                        <Card>
                            <CardContent>
                                <Typography gutterBottom variant="body1" component="div">
                                    {book.title}
                                </Typography>

                                <Typography variant="body2" color="text.secondary">
                                    {`by ${book.author}`}
                                </Typography>
                            </CardContent>

                            <CardActions>
                                {!(selectedBooks.find(({ title, author, readingLevel }) => title === book.title && author === book.author && readingLevel === book.readingLevel))
                                    ? <Button
                                        size="small"
                                        onClick={() => handleAddBook(book)}
                                    >
                                        Add
                                    </Button>
                                    : <Button
                                        size="small"
                                        color="error"
                                        onClick={() => handleRemoveBook(book)}
                                    >
                                        Remove
                                    </Button>}
                            </CardActions>
                        </Card>
                    </Grid>)}
                </Grid>
            </Box>
        </Box>
    </Container>
}