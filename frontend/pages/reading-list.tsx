import { Box, Button, Container, Grid, Toolbar, Typography } from "@mui/material";
import React from "react";
import { useApp } from "../contexts/AppContext";
import { BookCard } from "../components/BookCard";
import { NavigationMenu } from "../components/NavigationMenu";
import { useRouter } from "next/router";

export default function HomePage() {
    const app = useApp();

    const router = useRouter();

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
                <Grid container spacing={2}>
                    {(!app.selectedBooks.length)
                        ? <Box component="main">
                            <Box
                                gap={1}
                                sx={{
                                    p: 4,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                }}
                            >
                                <Typography>
                                    No book(s) added
                                </Typography>

                                <Button
                                    variant="contained"
                                    onClick={() => router.push('/')}
                                    fullWidth
                                    color="secondary"
                                >
                                    add
                                </Button>
                            </Box>
                        </Box>
                        : app.selectedBooks.map((book, index) => <Grid
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