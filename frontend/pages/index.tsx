import { Box, Grid, Toolbar } from "@mui/material";
import React from "react";
import { IBook, demoBooks } from "../data";
import { useApp } from "../contexts/AppContext";
import { BookCard } from "../components/BookCard";
import { SearchInput } from "../components/SearchInput";
import { NavigationMenu } from "../components/NavigationMenu";
import { useQuery, gql } from "@apollo/client";

const GET_BOOKS = gql`
  query GetBooks {
    books {
      title
      author
      coverPhotoURL
      readingLevel
    }
  }
`;

export interface IUseFetchAllBooks {
    books?: IBook[];
}

export const useFetchAllBooks = (): IUseFetchAllBooks => {
    const { loading, error, data } = useQuery(GET_BOOKS);

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

    return <Box display="flex">
        <NavigationMenu selectedBooksCount={app.selectedBooks.length} />

        <Box
            component="main"
            sx={{
                p: 3,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
            gap={2}
        >
            <Toolbar />
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
                        lg={2}
                        md={3}
                        xs={6}
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
    </Box>
}