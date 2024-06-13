import { Alert, Box, Grid, Snackbar, Toolbar } from "@mui/material";
import React from "react";
import { IBook } from "../data";
import { useApp } from "../contexts/AppContext";
import { BookCard } from "../components/BookCard";
import { SearchInput } from "../components/SearchInput";
import { NavigationMenu } from "../components/NavigationMenu";
import { useQuery, gql, ApolloError } from "@apollo/client";

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
    error: any;
    books?: IBook[];
}

export const useFetchAllBooks = (): IUseFetchAllBooks => {
    const { loading, error, data } = useQuery(GET_BOOKS);

    return {
        error,
        books: data?.books,
    }
};

export default function HomePage() {
    const fetchAllBooks = useFetchAllBooks();

    const app = useApp();

    return <React.Fragment>
        <Box display="flex">
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
                        {fetchAllBooks.books?.map((book, index) => <Grid
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

        <Snackbar
            open={fetchAllBooks.error instanceof ApolloError}
            autoHideDuration={6000}
        >
            <Alert
                severity="error"
                sx={{ width: '100%' }}
            >
                {fetchAllBooks.error?.message as string}
            </Alert>
        </Snackbar>
    </React.Fragment>
}